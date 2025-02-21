import { e as error } from './index2-Dnzf2XsT.js';
import 'json-bigint';

const API_BASE_URL = "http://host.docker.internal:8000";
const load = async (params) => {
  try {
    const pid = params.params.pid;
    const productResponse = await fetch(`${API_BASE_URL}/product/${pid}`);
    if (!productResponse.ok) {
      throw error(productResponse.status, `Failed to fetch product with id ${pid}`);
    }
    const product_data = await productResponse.json();
    const product = {
      pid: product_data.pid,
      type: product_data.product_type,
      description: product_data.description,
      gen_description: Object.values(product_data.gen_description).map(([sentence]) => sentence),
      gen_tweets_pos: Object.values(product_data.gen_tweets_pos).map(([sentence]) => sentence),
      gen_tweets_neg: Object.values(product_data.gen_tweets_neg).map(([sentence]) => sentence)
    };
    return { product };
  } catch (err) {
    throw error(500, `Error fetching products: ${err}`);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DtlHYFuj.js')).default;
const server_id = "src/routes/product/explore/[pid]/+page.server.ts";
const imports = ["_app/immutable/nodes/4.Bn0eQJfx.js","_app/immutable/chunks/CsBDFye-.js","_app/immutable/chunks/_SuVmlR5.js","_app/immutable/chunks/CL7D1t7f.js","_app/immutable/chunks/D97quzuU.js","_app/immutable/chunks/BwteBFUm.js","_app/immutable/chunks/CZwtKhBr.js","_app/immutable/chunks/DeJp0rgA.js","_app/immutable/chunks/Ci55xSBr.js","_app/immutable/chunks/CSlmfg9l.js","_app/immutable/chunks/DC98kA9C.js","_app/immutable/chunks/BJINlCqP.js","_app/immutable/chunks/CHaFX-VK.js"];
const stylesheets = ["_app/immutable/assets/4.DRGDjPmz.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-D0ZWlYPP.js.map
