import { e as error, j as json } from './index2-Dnzf2XsT.js';

const API_BASE_URL = "http://host.docker.internal:8000";
async function handle_too_many_engine(pid) {
  let engineResponse = await fetch(`${API_BASE_URL}/engine/${pid}/run`);
  if (engineResponse.status == 403) {
    const runningEngineResponse = await fetch(`${API_BASE_URL}/engine/runningengines`);
    const runningEngineList = await runningEngineResponse.json();
    const delete_pid = runningEngineList.list_id[0];
    const deleteEngineResponse = await fetch(`${API_BASE_URL}/engine/${delete_pid}/kill`, { method: "DELETE" });
    if (!deleteEngineResponse.ok) {
      throw error(engineResponse.status, `Failed to start engine for product with id ${pid}: there has been a problem trying to delete in memory engine`);
    }
    engineResponse = await fetch(`${API_BASE_URL}/engine/${pid}/run`);
    if (!engineResponse.ok) {
      throw error(engineResponse.status, `Failed to start engine for product with id ${pid}`);
    }
  }
  return engineResponse;
}
const GET = async ({ url, params }) => {
  const pid = params.pid;
  const engineResponse = await handle_too_many_engine(pid);
  const engineStats = await engineResponse.json();
  if (!engineResponse.ok) {
    if (typeof engineStats.detail === "string" && engineStats.detail.includes("already exist")) {
      console.log("LOG: engine already running");
    } else {
      throw error(engineResponse.status, `Failed to start engine for product with id ${pid}`);
    }
  }
  return json(engineStats);
};

export { GET };
//# sourceMappingURL=_server.ts-Cu-JA6Uz.js.map
