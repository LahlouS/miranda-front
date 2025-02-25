import { error, json } from '@sveltejs/kit';
import type { EngineStats } from '$lib/interfaces';
import type { RequestHandler } from '../$types';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Replace with your actual API base URL

type ErrorEngine = {
	detail: string
}

async function handle_too_many_engine(pid:any) {
	let engineResponse = await fetch(`${API_BASE_URL}/engine/${pid}/run`)
	if (engineResponse.status == 403) {
		const runningEngineResponse = await fetch(`${API_BASE_URL}/engine/runningengines`)
		const runningEngineList = await runningEngineResponse.json()
		const delete_pid = runningEngineList.list_id[0]
		const deleteEngineResponse = await fetch(`${API_BASE_URL}/engine/${delete_pid}/kill`, { method: 'DELETE', })
		if (!deleteEngineResponse.ok) {
			throw error(engineResponse.status, `Failed to start engine for product with id ${pid}: there has been a problem trying to delete in memory engine`);
		}
		engineResponse = await fetch(`${API_BASE_URL}/engine/${pid}/run`)
		if (!engineResponse.ok) {
			throw error(engineResponse.status, `Failed to start engine for product with id ${pid}`);
		}
	}
	return engineResponse
}

export const GET: RequestHandler = async ({ url, params }) => {
	const pid = params.pid
	const engineResponse = await handle_too_many_engine(pid)
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