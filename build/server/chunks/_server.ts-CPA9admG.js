import { e as error, j as json } from './index2-Dnzf2XsT.js';

const API_BASE_URL = "http://host.docker.internal:8000";
const GET = async ({ url, params }) => {
  const pid = params.pid;
  const engineResponse = await fetch(`${API_BASE_URL}/engine/${pid}/run`);
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
//# sourceMappingURL=_server.ts-CPA9admG.js.map
