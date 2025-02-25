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
const imports = ["_app/immutable/nodes/4.CABPcS3R.js","_app/immutable/chunks/DgMzrqux.js","_app/immutable/chunks/DsZSh94P.js","_app/immutable/chunks/Dfo8cZ4o.js","_app/immutable/chunks/COIN8evz.js","_app/immutable/chunks/DkCP2Fnt.js","_app/immutable/chunks/BFO-mupc.js","_app/immutable/chunks/D9am8Gvn.js","_app/immutable/chunks/DdUBiRTo.js","_app/immutable/chunks/Dg7HLL5Q.js","_app/immutable/chunks/CXYAfE7x.js","_app/immutable/chunks/zU8o-TzL.js","_app/immutable/chunks/c86IGuWO.js"];
const stylesheets = ["_app/immutable/assets/4.quOxcx65.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-BpyREDWB.js.map
