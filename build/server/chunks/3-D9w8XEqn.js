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
    const productData = await Promise.all(productRequests);
    const products = productData.map((data) => ({
      pid: data.pid,
      type: data.product_type,
      description: data.description,
      gen_description: Object.values(data.gen_description).map(([sentence]) => sentence),
      gen_tweets_pos: Object.values(data.gen_tweets_pos).map(([sentence]) => sentence),
      gen_tweets_neg: Object.values(data.gen_tweets_neg).map(([sentence]) => sentence)
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
const component = async () => component_cache ??= (await import('./_page.svelte-CuTMvLiD.js')).default;
const server_id = "src/routes/product/+page.server.ts";
const imports = ["_app/immutable/nodes/3.D9zf8uXw.js","_app/immutable/chunks/CsBDFye-.js","_app/immutable/chunks/_SuVmlR5.js","_app/immutable/chunks/CL7D1t7f.js","_app/immutable/chunks/D97quzuU.js","_app/immutable/chunks/BwteBFUm.js","_app/immutable/chunks/DeJp0rgA.js","_app/immutable/chunks/Ci55xSBr.js","_app/immutable/chunks/CSlmfg9l.js","_app/immutable/chunks/DC98kA9C.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-D9w8XEqn.js.map
