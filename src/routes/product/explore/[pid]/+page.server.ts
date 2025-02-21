import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Weights, GetProductValidation, User, Product, EngineStats, GetUserScoreValidation, GetUserValidation, GetUserRankingMaterial } from '$lib/interfaces';
import JSONbig from "json-bigint";
import type { Actions } from './$types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Replace with your actual API base URL

type ErrorEngine = {
	detail: string
}

export const load: PageServerLoad = async ( params ) => {
	// Function to create a fake user
	try {
		const pid = params.params.pid

		const productResponse = await fetch(`${API_BASE_URL}/product/${pid}`);
		if (!productResponse.ok) {
			throw error(productResponse.status, `Failed to fetch product with id ${pid}`);
		}
		const product_data: GetProductValidation = await productResponse.json();
		const product: Product = {
			pid: product_data.pid,
			type: product_data.product_type,
			description: product_data.description,
			gen_description: Object.values(product_data.gen_description).map(([sentence]) => sentence),
			gen_tweets_pos: Object.values(product_data.gen_tweets_pos).map(([sentence]) => sentence),
			gen_tweets_neg: Object.values(product_data.gen_tweets_neg).map(([sentence]) => sentence),
		}
		return { product }
	} catch (err) {
		throw error(500, `Error fetching products: ${err}`);
	}
};


// export const actions = {
// 	update_weights: async ({ request, params }) => {
// 		const data = await request.formData();
// 		const pid = params.pid
// 		try {
// 			const weights: Weights = {
// 				w_occurence: parseFloat(data.get('occurrence') as string),
// 				w_pos: parseFloat(data.get('similarity_pos') as string),
// 				w_neg: parseFloat(data.get('similarity_neg') as string),
// 				w_desc: parseFloat(data.get('similarity_desc') as string),
// 				w_followers: parseFloat(data.get('followers_count') as string),
// 				w_likes: parseFloat(data.get('likes') as string),
// 				w_rt: parseFloat(data.get('rt') as string),
// 			};
// 
// 			// Ensure all values are valid numbers
// 			if (Object.values(weights).some(isNaN)) {
// 				throw error(400, 'Invalid input: All weight values must be valid numbers.');
// 			}
// 			
// 			const url = `${API_BASE_URL}/engine/${pid}/computescores?w_pos=${weights.w_pos}&w_neg=${weights.w_neg}&w_desc=${weights.w_desc}&w_followers=${weights.w_followers}&w_likes=${weights.w_likes}&w_rt=${weights.w_rt}&w_occurence=${weights.w_occurence}`
// 			const response = await fetch(url)
// 			if (!response.ok) {
// 				throw error(response.status, `Failed to recompute scores for product with id ${pid}`);
// 			}
// 			const responseData = await response.json()
// 			return responseData;
// 		} catch (err) {
// 			throw err
// 		}
// 	}
// } satisfies Actions;
