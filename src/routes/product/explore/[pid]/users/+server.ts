import { error, json } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import type { Weights, User, GetUserScoreValidation, GetUserValidation, GetUserRankingMaterial, UserRankingMaterial } from '$lib/interfaces';
import JSONbig from "json-bigint";
import type { Actions } from '../$types';
import type { RequestHandler } from '../$types';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Replace with your actual API base URL

type ErrorEngine = {
	detail: string
}

function convertUserRankingMaterialToStrings(material: UserRankingMaterial): UserRankingMaterial {
	return {
		tweet_pos: material.tweet_pos.map(String),
		tweet_neg: material.tweet_neg.map(String),
		description: material.description.map(String),
	};
}

async function fetchUsersData(usersScore: GetUserScoreValidation[], pid: number): Promise<User[]> {
	const parser = JSONbig()
	const usersArray = await Promise.all(
		usersScore.map(async (value) => {
			const uid = value.uid;
			const scores = value.scores;

			// Fetch user data
			const usersResponse = await fetch(`${API_BASE_URL}/user/${uid}`);
			if (!usersResponse.ok) {
				throw error(usersResponse.status, `Failed to fetch user data for user id ${uid}`);
			}
			const usersData: GetUserValidation = await usersResponse.json();

			// Fetch user ranking material
			const usersMaterialResponse = await fetch(`${API_BASE_URL}/engine/${pid}/${uid}`);
			if (!usersMaterialResponse.ok) {
				throw error(usersMaterialResponse.status, `Failed to fetch ranking material for user id ${uid}`);
			}
			const rawMaterialData = await usersMaterialResponse.text()
			const usersMaterialData: GetUserRankingMaterial = await parser.parse(rawMaterialData);
			usersMaterialData.material = convertUserRankingMaterialToStrings(usersMaterialData.material)
			// Return structured User object

			const ret = {
				uid: uid.toString(),
				user_data: usersData,
				scores: scores,
				ranking_material: usersMaterialData.material
			};
			return ret;
		})
	);

	// Convert array to a Record<number, User> (Object with UID as keys)
	return usersArray;
}



export const GET: RequestHandler = async ({ url, params }) => {
	const pid = params.pid
	const userScoresResponse  = await fetch(`${API_BASE_URL}/engine/${pid}/userlist`);
		if (!userScoresResponse.ok) {
			throw error(userScoresResponse.status, `Failed to fetch recomended users for ${pid}`);
		}
		const rawScoreResponse = await userScoresResponse.text()
		const usersScore: GetUserScoreValidation[] = await JSONbig().parse(rawScoreResponse);
		let users : User[] = await fetchUsersData(usersScore, pid)
	return json(users);
};


export const POST: RequestHandler = async ({ request, params }) => {
	const body = await request.formData();
	const pid = params.pid;

	try {
		// Convert form data to weights object
		const weights: Weights = {
			w_occurence: parseFloat(body.get('occurrence') as string),
			w_pos: parseFloat(body.get('similarity_pos') as string),
			w_neg: parseFloat(body.get('similarity_neg') as string),
			w_desc: parseFloat(body.get('similarity_desc') as string),
			w_followers: parseFloat(body.get('followers_count') as string),
			w_likes: parseFloat(body.get('likes') as string),
			w_rt: parseFloat(body.get('rt') as string),
		};

		// Ensure all values are valid numbers
		if (Object.values(weights).some(isNaN)) {
			throw error(400, 'Invalid input: All weight values must be valid numbers.');
		}

		const url = `${API_BASE_URL}/engine/${pid}/computescores?w_pos=${weights.w_pos}&w_neg=${weights.w_neg}&w_desc=${weights.w_desc}&w_followers=${weights.w_followers}&w_likes=${weights.w_likes}&w_rt=${weights.w_rt}&w_occurence=${weights.w_occurence}`
		const response = await fetch(url, { method: 'GET' });

		if (!response.ok) {
			throw error(response.status, `Failed to recompute scores for product with id ${pid}`);
		}

		// Parse response
		const responseData = await response.json();

		// Return JSON response
		return json(responseData);
	} catch (err) {
		console.error('Error processing request:', err);
		throw error(500, 'Internal Server Error');
	}
};
