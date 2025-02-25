import { f as fail, e as error } from './index2-Dnzf2XsT.js';

const API_BASE_URL = "http://host.docker.internal:8000";
function validateProductTypes(input) {
  const trimmed = input.trim();
  if (!trimmed) {
    return {
      isValid: false,
      value: "",
      error: "Product types cannot be empty"
    };
  }
  const validCharacterRegex = /^[a-zA-Z0-9, ]+$/;
  if (!validCharacterRegex.test(trimmed)) {
    return {
      isValid: false,
      value: trimmed,
      error: "Product types can only contain letters, numbers, spaces, and commas"
    };
  }
  const invalidCommaPatterns = [
    /^,/,
    // Comma at start
    /,$/,
    // Comma at end
    /,,/,
    // Consecutive commas
    /, ,/
    // Empty item (just spaces between commas)
  ];
  for (const pattern of invalidCommaPatterns) {
    if (pattern.test(trimmed)) {
      return {
        isValid: false,
        value: trimmed,
        error: "Invalid comma formatting. Ensure no empty items or consecutive commas"
      };
    }
  }
  return {
    isValid: true,
    value: trimmed
  };
}
const simulateProcessing = async (ms = 3e3) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const load = async () => {
  try {
    const runningEngineResponse = await fetch(`${API_BASE_URL}/engine/runningengines`);
    const runningEngineList = await runningEngineResponse.json();
    for (const delete_pid of runningEngineList.list_id) {
      const deleteEngineResponse = await fetch(`${API_BASE_URL}/engine/${delete_pid}/kill`, { method: "DELETE" });
      if (!deleteEngineResponse.ok) {
        throw error(deleteEngineResponse.status, `there has been a problem trying to delete in memory engine id:${delete_pid}`);
      }
    }
    return { "status": "ok" };
  } catch (err) {
    throw error(500, `Error fetching products: ${err}`);
  }
};
const actions = {
  default: async ({ request }) => {
    try {
      await simulateProcessing(Math.random() * 5e3 + 2e3);
      const formData = await request.formData();
      const productType = formData.get("productType")?.toString() || "";
      const description = formData.get("description")?.toString() || "";
      if (!productType || !description) {
        return fail(400, {
          error: "All fields are required"
        });
      }
      const productTypeValidation = validateProductTypes(productType);
      if (!productTypeValidation.isValid) {
        return fail(400, {
          error: productTypeValidation.error
        });
      }
      const product = {
        ptype: productTypeValidation.value,
        description
      };
      const url = `${API_BASE_URL}/product`;
      const postProductResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          // Tells the server you expect JSON response
          "Content-Type": "application/json"
          // Specifies that you're sending JSON data
        },
        body: JSON.stringify(product)
      });
      if (!postProductResponse.ok) {
        throw error(postProductResponse.status, `Failed to push new product`);
      }
      const data = await postProductResponse.json();
      return {
        success: true,
        message: "Product registered successfully",
        ...data
      };
    } catch (error2) {
      console.error("Error registering product:", error2);
      return fail(500, {
        error: "Failed to register product"
      });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BnszwNls.js')).default;
const server_id = "src/routes/product/new-product/+page.server.ts";
const imports = ["_app/immutable/nodes/5.ZV25ASIr.js","_app/immutable/chunks/DgMzrqux.js","_app/immutable/chunks/DsZSh94P.js","_app/immutable/chunks/Dfo8cZ4o.js","_app/immutable/chunks/COIN8evz.js","_app/immutable/chunks/DkCP2Fnt.js","_app/immutable/chunks/BFO-mupc.js","_app/immutable/chunks/DdUBiRTo.js","_app/immutable/chunks/Dg7HLL5Q.js","_app/immutable/chunks/CXYAfE7x.js","_app/immutable/chunks/zU8o-TzL.js","_app/immutable/chunks/c86IGuWO.js"];
const stylesheets = ["_app/immutable/assets/5.dFRlV3lX.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-D9Qf1T_9.js.map
