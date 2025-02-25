// Define the shape of the product type

interface Weights {
	w_occurence: number
	w_pos: number
	w_neg: number
	w_desc: number
	w_followers: number
	w_likes: number
	w_rt: number
}
interface SendProduct {
	ptype: string;
	description: string;

}

type Product = {
	pid: number;
	type: string;
	description: string;
	gen_description: string[];
	gen_tweets_pos: string[];
	gen_tweets_neg: string[];
}

type IsRunning = {
	isRunning: boolean
}

interface EngineStats {
	pid: number;
	n_users: number;
}

interface UserScores {
	sementic: number;
	tweet_pos: number;
	tweet_neg: number;
	desc: number;
	occurence: number;
	likes: number;
	rt: number;
	followers_count: number;
}

interface GetUserScoreValidation {
	uid : BigInt | string;
	scores: UserScores
}

interface GetUserValidation {

	uid : BigInt | string;
	username : string;
	follower_count : number;
	description : Record<number, [string, number[]]>;
	tweets : Record<number, [string, number[]]>;
}

interface UserRankingMaterial {
	tweet_pos: BigInt[] | string[];
	tweet_neg: BigInt[] | string[];
	description:  BigInt[] | string[];
}

interface GetUserRankingMaterial {
	uid : BigInt | string;
	material: UserRankingMaterial;
}

type User = {
	uid : BigInt | string;
	user_data: GetUserValidation;
	scores: UserScores;
	ranking_material: UserRankingMaterial;
}

interface ListId {
	list_id: number[];
}

interface GetProductValidation {
	pid: number;
	product_type: string;
	description: string;
	gen_description: Record<number, [string, number[]]>;
	gen_tweets_pos: Record<number, [string, number[]]>;
	gen_tweets_neg: Record<number, [string, number[]]>;
}



export type {	Weights,
				Product,
				User, 
				ListId, 
				EngineStats,
				GetProductValidation, 
				GetUserScoreValidation,
				UserRankingMaterial,
				GetUserRankingMaterial,
				GetUserValidation,
				SendProduct, 
				IsRunning };