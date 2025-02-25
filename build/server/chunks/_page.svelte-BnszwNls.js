import { w as push, I as push_element, J as pop_element, O as bind_props, y as pop, F as FILENAME } from './index-DxcH4qTA.js';
import './client-uKgJwaF1.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import './exports-B9mRjsef.js';

_page[FILENAME] = "src/routes/product/new-product/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  let form = $$props["form"];
  let data = $$props["data"];
  let isSubmitting = false;
  let product_id = "";
  $$payload.out += `<div class="relative isolate px-6 pt-14 lg:px-8 svelte-g3jc82">`;
  push_element($$payload, "div", 25, 2);
  $$payload.out += `<div class="mx-auto max-w-2xl py-32 svelte-g3jc82">`;
  push_element($$payload, "div", 26, 4);
  $$payload.out += `<div class="text-center mb-12 svelte-g3jc82">`;
  push_element($$payload, "div", 27, 6);
  $$payload.out += `<h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 animate-gradient-text svelte-g3jc82">`;
  push_element($$payload, "h1", 28, 8);
  $$payload.out += `Register New Product</h1>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <form method="POST" class="space-y-6 bg-white p-8 rounded-lg shadow-lg relative svelte-g3jc82">`;
  push_element($$payload, "form", 47, 6);
  if (form?.error) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="bg-red-50 border-l-4 border-red-400 p-4 mb-4 svelte-g3jc82">`;
    push_element($$payload, "div", 53, 10);
    $$payload.out += `<p class="text-red-700 svelte-g3jc82">`;
    push_element($$payload, "p", 54, 12);
    $$payload.out += `${escape_html(form.error)}</p>`;
    pop_element();
    $$payload.out += `</div>`;
    pop_element();
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (form?.success) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="bg-green-50 border-l-4 border-green-400 p-4 mb-4 svelte-g3jc82">`;
    push_element($$payload, "div", 59, 10);
    $$payload.out += `<p class="text-green-700 svelte-g3jc82">`;
    push_element($$payload, "p", 60, 12);
    $$payload.out += `Product registered successfully with id ${escape_html(product_id)} !</p>`;
    pop_element();
    $$payload.out += `</div>`;
    pop_element();
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="svelte-g3jc82">`;
  push_element($$payload, "div", 64, 8);
  $$payload.out += `<label for="productType" class="block text-sm font-medium text-gray-700 mb-2 svelte-g3jc82">`;
  push_element($$payload, "label", 65, 10);
  $$payload.out += `Product Type</label>`;
  pop_element();
  $$payload.out += ` <input type="text" name="productType" id="productType" required${attr("disabled", isSubmitting, true)} placeholder="e.g. electronics, fashion, accessories" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed svelte-g3jc82">`;
  push_element($$payload, "input", 68, 10);
  pop_element();
  $$payload.out += ` <p class="mt-1 text-sm text-gray-500 svelte-g3jc82">`;
  push_element($$payload, "p", 77, 10);
  $$payload.out += `Separate multiple types with commas</p>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <div class="svelte-g3jc82">`;
  push_element($$payload, "div", 80, 8);
  $$payload.out += `<label for="description" class="block text-sm font-medium text-gray-700 mb-2 svelte-g3jc82">`;
  push_element($$payload, "label", 81, 10);
  $$payload.out += `Product Description</label>`;
  pop_element();
  $$payload.out += ` <textarea name="description" id="description" required${attr("disabled", isSubmitting, true)} rows="4" placeholder="Enter a detailed description of your product..." class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed svelte-g3jc82">`;
  push_element($$payload, "textarea", 84, 10);
  $$payload.out += `</textarea>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <button type="submit"${attr("disabled", isSubmitting, true)} class="w-full rounded-md bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:cursor-not-allowed svelte-g3jc82">`;
  push_element($$payload, "button", 95, 8);
  $$payload.out += `${escape_html("Register Product")}</button>`;
  pop_element();
  $$payload.out += `</form>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  bind_props($$props, { form, data });
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};

export { _page as default };
//# sourceMappingURL=_page.svelte-BnszwNls.js.map
