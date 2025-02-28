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
const component = async () => component_cache ??= (await import('./_page.svelte-EOz77NLG.js')).default;
const server_id = "src/routes/product/explore/[pid]/+page.server.ts";
const imports = ["_app/immutable/nodes/4.GMtm94Rr.js","_app/immutable/chunks/DroBwdLr.js","_app/immutable/chunks/g3Tmz0S3.js","_app/immutable/chunks/_FgpyuGP.js","_app/immutable/chunks/CKB5XqNR.js","_app/immutable/chunks/Qs_-gKkR.js","_app/immutable/chunks/0GM-F11P.js","_app/immutable/chunks/BmYs9oa1.js","_app/immutable/chunks/B8fgIfpB.js","_app/immutable/chunks/DS3mA53_.js","_app/immutable/chunks/ACi1ui8k.js","_app/immutable/chunks/BWobMu05.js","_app/immutable/chunks/D5ilOZxg.js","_app/immutable/chunks/6CztJwP1.js"];
const stylesheets = ["_app/immutable/assets/4.quOxcx65.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-Dp0mSmEj.js.map
