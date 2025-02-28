import { w as push, Q as store_get, O as ensure_array_like, I as push_element, J as pop_element, R as unsubscribe_stores, P as bind_props, y as pop, F as FILENAME, K as getContext } from './index-D58S01WZ.js';
import './client-Da0ZFuY5.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import './exports-BxxU4STN.js';

const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
_page[FILENAME] = "src/routes/product/explore/[pid]/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  var $$store_subs;
  let data = $$props["data"];
  const product = data.product;
  store_get($$store_subs ??= {}, "$page", page).url.href;
  const each_array = ensure_array_like(product.gen_description);
  const each_array_1 = ensure_array_like(product.gen_tweets_pos);
  const each_array_2 = ensure_array_like(product.gen_tweets_neg);
  $$payload.out += `<h1 class="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mt-8">`;
  push_element($$payload, "h1", 97, 0);
  $$payload.out += `User search</h1>`;
  pop_element();
  $$payload.out += ` `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <hr class="my-6 border-t-2 border-gray-300">`;
  push_element($$payload, "hr", 104, 0);
  pop_element();
  $$payload.out += ` <div class="flex flex-row items-start justify-between w-full px-6 py-8 space-x-6">`;
  push_element($$payload, "div", 106, 0);
  $$payload.out += `<div class="w-1/2 p-6 rounded-lg shadow-lg bg-white sticky top-0">`;
  push_element($$payload, "div", 108, 2);
  $$payload.out += `<div class="flex items-center justify-between space-x-4">`;
  push_element($$payload, "div", 111, 1);
  $$payload.out += `<h2 class="text-2xl font-bold text-gray-900">`;
  push_element($$payload, "h2", 113, 3);
  $$payload.out += `(${escape_html(product.pid)}) ${escape_html(product.type)}</h2>`;
  pop_element();
  $$payload.out += ` <button class="p-3 rounded-lg text-white font-semibold text-xl bg-gradient-to-r from-blue-400 to-pink-400 hover:from-blue-300 hover:to-pink-300 transition-all duration-300 transform hover:scale-105 svelte-1e413e3">`;
  push_element($$payload, "button", 116, 3);
  $$payload.out += `Tune your search 🧭</button>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <p class="mt-2 text-gray-600">`;
  push_element($$payload, "p", 124, 1);
  $$payload.out += `${escape_html(product.description)}</p>`;
  pop_element();
  $$payload.out += ` <div class="mt-4">`;
  push_element($$payload, "div", 127, 1);
  $$payload.out += `<h3 class="font-medium text-gray-700">`;
  push_element($$payload, "h3", 128, 3);
  $$payload.out += `Who are they ?</h3>`;
  pop_element();
  $$payload.out += ` <ul class="list-disc pl-5 space-y-2 text-gray-600">`;
  push_element($$payload, "ul", 129, 3);
  $$payload.out += `<!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let gd = each_array[$$index];
    $$payload.out += `<li>`;
    push_element($$payload, "li", 131, 4);
    $$payload.out += `${escape_html(gd)}</li>`;
    pop_element();
  }
  $$payload.out += `<!--]--></ul>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <div class="mt-4">`;
  push_element($$payload, "div", 137, 1);
  $$payload.out += `<h3 class="font-medium text-gray-700">`;
  push_element($$payload, "h3", 138, 3);
  $$payload.out += `Life is a bless with your product:</h3>`;
  pop_element();
  $$payload.out += ` <ul class="list-disc pl-5 space-y-2 text-gray-600">`;
  push_element($$payload, "ul", 139, 3);
  $$payload.out += `<!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let tp = each_array_1[$$index_1];
    $$payload.out += `<li>`;
    push_element($$payload, "li", 141, 4);
    $$payload.out += `${escape_html(tp)}</li>`;
    pop_element();
  }
  $$payload.out += `<!--]--></ul>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <div class="mt-4">`;
  push_element($$payload, "div", 147, 1);
  $$payload.out += `<h3 class="font-medium text-gray-700">`;
  push_element($$payload, "h3", 148, 3);
  $$payload.out += `Life is hard without your product:</h3>`;
  pop_element();
  $$payload.out += ` <ul class="list-disc pl-5 space-y-2 text-gray-600">`;
  push_element($$payload, "ul", 149, 3);
  $$payload.out += `<!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let tn = each_array_2[$$index_2];
    $$payload.out += `<li>`;
    push_element($$payload, "li", 151, 4);
    $$payload.out += `${escape_html(tn)}</li>`;
    pop_element();
  }
  $$payload.out += `<!--]--></ul>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <div class="relative flex items-center h-screen w-16 overflow-hidden">`;
  push_element($$payload, "div", 160, 2);
  $$payload.out += `<div class="absolute inset-0 flex items-center justify-center">`;
  push_element($$payload, "div", 161, 1);
  $$payload.out += `<p class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 whitespace-nowrap tracking-wide animate-scroll svelte-1e413e3" style="writing-mode: vertical-lr;">`;
  push_element($$payload, "p", 162, 3);
  $$payload.out += `お や す み な さ い 、 優 し く し な い で く だ さ い - お や す み な さ い、 優 し く し な い で く だ さ い</p>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `  <div class="relative w-1/2 h-screen">`;
  push_element($$payload, "div", 170, 0);
  $$payload.out += `<div class="h-full overflow-y-auto space-y-4">`;
  push_element($$payload, "div", 172, 1);
  {
    $$payload.out += "<!--[-->";
    {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex flex-col items-center justify-center h-full p-6 bg-gray-50 rounded-lg shadow-sm">`;
      push_element($$payload, "div", 176, 4);
      $$payload.out += `<div class="flex items-center justify-center mb-4">`;
      push_element($$payload, "div", 177, 3);
      $$payload.out += `<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500">`;
      push_element($$payload, "div", 178, 5);
      $$payload.out += `</div>`;
      pop_element();
      $$payload.out += `</div>`;
      pop_element();
      $$payload.out += ` <div class="text-center space-y-2">`;
      push_element($$payload, "div", 180, 3);
      $$payload.out += `<p class="text-gray-800 font-semibold text-lg">`;
      push_element($$payload, "p", 181, 5);
      $$payload.out += `Instantiating recommendation engine</p>`;
      pop_element();
      $$payload.out += ` <div class="flex space-x-1 justify-center">`;
      push_element($$payload, "div", 182, 5);
      $$payload.out += `<span class="animate-bounce delay-75 h-2 w-2 bg-blue-500 rounded-full">`;
      push_element($$payload, "span", 183, 4);
      $$payload.out += `</span>`;
      pop_element();
      $$payload.out += ` <span class="animate-bounce delay-150 h-2 w-2 bg-blue-500 rounded-full">`;
      push_element($$payload, "span", 184, 4);
      $$payload.out += `</span>`;
      pop_element();
      $$payload.out += ` <span class="animate-bounce delay-300 h-2 w-2 bg-blue-500 rounded-full">`;
      push_element($$payload, "span", 185, 4);
      $$payload.out += `</span>`;
      pop_element();
      $$payload.out += `</div>`;
      pop_element();
      $$payload.out += ` <p class="text-gray-600">`;
      push_element($$payload, "p", 187, 5);
      $$payload.out += `This may take 20-30 seconds</p>`;
      pop_element();
      $$payload.out += ` <p class="text-gray-500 text-sm italic">`;
      push_element($$payload, "p", 188, 5);
      $$payload.out += `Once engine is running, loading will be much faster</p>`;
      pop_element();
      $$payload.out += `</div>`;
      pop_element();
      $$payload.out += `</div>`;
      pop_element();
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div>`;
  pop_element();
  $$payload.out += ` `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};

export { _page as default };
//# sourceMappingURL=_page.svelte-EOz77NLG.js.map
