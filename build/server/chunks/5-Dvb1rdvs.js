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
  actions: actions
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ChZWw25f.js')).default;
const server_id = "src/routes/product/new-product/+page.server.ts";
const imports = ["_app/immutable/nodes/5.DY0nyAnA.js","_app/immutable/chunks/CsBDFye-.js","_app/immutable/chunks/_SuVmlR5.js","_app/immutable/chunks/CL7D1t7f.js","_app/immutable/chunks/D97quzuU.js","_app/immutable/chunks/BwteBFUm.js","_app/immutable/chunks/CZwtKhBr.js","_app/immutable/chunks/Ci55xSBr.js","_app/immutable/chunks/CSlmfg9l.js","_app/immutable/chunks/DC98kA9C.js","_app/immutable/chunks/BJINlCqP.js","_app/immutable/chunks/CHaFX-VK.js"];
const stylesheets = ["_app/immutable/assets/5.dFRlV3lX.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-Dvb1rdvs.js.map
