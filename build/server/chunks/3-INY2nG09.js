import { e as error } from './index2-Dnzf2XsT.js';

const API_BASE_URL = "http://host.docker.internal:8000";
const load = async ({ fetch }) => {
  try {
    const listIdResponse = await fetch(`${API_BASE_URL}/product/all`);
    if (!listIdResponse.ok) {
      throw error(listIdResponse.status, "Failed to fetch product IDs");
    }
    const listIdData = await listIdResponse.json();
    const productIds = listIdData.list_id;
    const productRequests = productIds.map(async (pid) => {
      const productResponse = await fetch(`${API_BASE_URL}/product/${pid}`);
      if (!productResponse.ok) {
        throw error(productResponse.status, `Failed to fetch product with id ${pid}`);
      }
      return productResponse.json();
    });
    const runningEngineResponse = await fetch(`${API_BASE_URL}/engine/runningengines`);
    if (!runningEngineResponse.ok) {
      throw error(runningEngineResponse.status, `Failed to fetch running engines`);
    }
    const list_running_engine = await runningEngineResponse.json();
    const productData = await Promise.all(productRequests);
    const products = productData.map((data) => ({
      pid: data.pid,
      type: data.product_type,
      description: data.description,
      gen_description: Object.values(data.gen_description).map(([sentence]) => sentence),
      gen_tweets_pos: Object.values(data.gen_tweets_pos).map(([sentence]) => sentence),
      gen_tweets_neg: Object.values(data.gen_tweets_neg).map(([sentence]) => sentence),
      isRunning: list_running_engine.list_id.includes(data.pid) ? true : false
    }));
    return { products };
  } catch (err) {
    throw error(500, `Error fetching products: ${err}`);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-U6bC3Hjq.js')).default;
const server_id = "src/routes/product/+page.server.ts";
const imports = ["_app/immutable/nodes/3.BLLqVcHg.js","_app/immutable/chunks/DroBwdLr.js","_app/immutable/chunks/g3Tmz0S3.js","_app/immutable/chunks/_FgpyuGP.js","_app/immutable/chunks/CKB5XqNR.js","_app/immutable/chunks/Qs_-gKkR.js","_app/immutable/chunks/0GM-F11P.js","_app/immutable/chunks/BmYs9oa1.js","_app/immutable/chunks/DS3mA53_.js","_app/immutable/chunks/ACi1ui8k.js","_app/immutable/chunks/BWobMu05.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-INY2nG09.js.map
