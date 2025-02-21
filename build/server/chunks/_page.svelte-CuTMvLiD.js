import { w as push, N as ensure_array_like, I as push_element, J as pop_element, O as bind_props, y as pop, F as FILENAME } from './index-DxcH4qTA.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

_page[FILENAME] = "src/routes/product/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  let data = $$props["data"];
  const products = data.products;
  const each_array = ensure_array_like(products);
  $$payload.out += `<h1 class="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mt-8">`;
  push_element($$payload, "h1", 10, 0);
  $$payload.out += `Products Cards</h1>`;
  pop_element();
  $$payload.out += ` <a href="/product/new-product" class="rounded-md bg-gradient-to-r from-blue-500 to-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-6">`;
  push_element($$payload, "a", 14, 0);
  $$payload.out += `+ New product</a>`;
  pop_element();
  $$payload.out += ` <hr class="my-6 border-t-2 border-gray-300">`;
  push_element($$payload, "hr", 23, 0);
  pop_element();
  $$payload.out += ` <div class="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-8 px-6 mt-6">`;
  push_element($$payload, "div", 26, 0);
  $$payload.out += `<!--[-->`;
  for (let $$index_3 = 0, $$length = each_array.length; $$index_3 < $$length; $$index_3++) {
    let product = each_array[$$index_3];
    const each_array_1 = ensure_array_like(product.gen_description);
    const each_array_2 = ensure_array_like(product.gen_tweets_pos);
    const each_array_3 = ensure_array_like(product.gen_tweets_neg);
    $$payload.out += `<a${attr("href", `/product/explore/${product.pid}`)} class="block">`;
    push_element($$payload, "a", 28, 6);
    $$payload.out += `<div class="group rounded-lg shadow-lg p-6 bg-white hover:bg-gray-50 transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl">`;
    push_element($$payload, "div", 29, 8);
    $$payload.out += `<h2 class="text-xl font-semibold text-gray-900">`;
    push_element($$payload, "h2", 30, 10);
    $$payload.out += `(${escape_html(product.pid)}) ${escape_html(product.type)}</h2>`;
    pop_element();
    $$payload.out += ` <p class="mt-2 text-gray-600">`;
    push_element($$payload, "p", 31, 10);
    $$payload.out += `${escape_html(product.description)}</p>`;
    pop_element();
    $$payload.out += ` <div class="mt-4">`;
    push_element($$payload, "div", 34, 10);
    $$payload.out += `<h3 class="font-medium text-gray-700">`;
    push_element($$payload, "h3", 35, 12);
    $$payload.out += `Who are they ?</h3>`;
    pop_element();
    $$payload.out += ` <ul class="list-disc pl-5 space-y-2 text-gray-600">`;
    push_element($$payload, "ul", 36, 12);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let gd = each_array_1[$$index];
      $$payload.out += `<li>`;
      push_element($$payload, "li", 38, 16);
      $$payload.out += `${escape_html(gd)}</li>`;
      pop_element();
    }
    $$payload.out += `<!--]--></ul>`;
    pop_element();
    $$payload.out += `</div>`;
    pop_element();
    $$payload.out += ` <div class="mt-4">`;
    push_element($$payload, "div", 44, 10);
    $$payload.out += `<h3 class="font-medium text-gray-700">`;
    push_element($$payload, "h3", 45, 12);
    $$payload.out += `Life is a bless with your product:</h3>`;
    pop_element();
    $$payload.out += ` <ul class="list-disc pl-5 space-y-2 text-gray-600">`;
    push_element($$payload, "ul", 46, 12);
    $$payload.out += `<!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let tp = each_array_2[$$index_1];
      $$payload.out += `<li>`;
      push_element($$payload, "li", 48, 16);
      $$payload.out += `${escape_html(tp)}</li>`;
      pop_element();
    }
    $$payload.out += `<!--]--></ul>`;
    pop_element();
    $$payload.out += `</div>`;
    pop_element();
    $$payload.out += ` <div class="mt-4">`;
    push_element($$payload, "div", 54, 10);
    $$payload.out += `<h3 class="font-medium text-gray-700">`;
    push_element($$payload, "h3", 55, 12);
    $$payload.out += `Life is hard without your product:</h3>`;
    pop_element();
    $$payload.out += ` <ul class="list-disc pl-5 space-y-2 text-gray-600">`;
    push_element($$payload, "ul", 56, 12);
    $$payload.out += `<!--[-->`;
    for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
      let tn = each_array_3[$$index_2];
      $$payload.out += `<li>`;
      push_element($$payload, "li", 58, 16);
      $$payload.out += `${escape_html(tn)}</li>`;
      pop_element();
    }
    $$payload.out += `<!--]--></ul>`;
    pop_element();
    $$payload.out += `</div>`;
    pop_element();
    $$payload.out += `</div>`;
    pop_element();
    $$payload.out += `</a>`;
    pop_element();
  }
  $$payload.out += `<!--]--></div>`;
  pop_element();
  $$payload.out += ` <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">`;
  push_element($$payload, "div", 68, 2);
  $$payload.out += `<div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">`;
  push_element($$payload, "div", 72, 4);
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  bind_props($$props, { data });
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};

export { _page as default };
//# sourceMappingURL=_page.svelte-CuTMvLiD.js.map
