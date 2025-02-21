import { error, json } from '@sveltejs/kit';
import type { EngineStats } from '$lib/interfaces';
import type { RequestHandler } from '../$types';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Replace with your actual API base URL

type ErrorEngine = {
	detail: string
}


export const GET: RequestHandler = async ({ url, params }) => {
	const pid = params.pid
	const engineResponse = await fetch(`${API_BASE_URL}/engine/${pid}/run`)
		const engineStats: EngineStats | ErrorEngine = await engineResponse.json()
	if (!engineResponse.ok) {
		if (typeof engineStats.detail === "string" && engineStats.detail.includes("already exist")) {
			console.log("LOG: engine already running");
		} else {
			throw error(engineResponse.status, `Failed to start engine for product with id ${pid}`);
		}
	}
	return json(engineStats);
};