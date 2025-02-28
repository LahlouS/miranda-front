import { w as push, I as push_element, J as pop_element, y as pop, K as getContext, F as FILENAME } from './index-D58S01WZ.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { s as stores } from './client-Da0ZFuY5.js';
import './exports-BxxU4STN.js';

({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
Error$1[FILENAME] = "node_modules/.pnpm/@sveltejs+kit@2.17.1_@sveltejs+vite-plugin-svelte@5.0.3_svelte@5.19.9_vite@6.1.0_jiti@2_c30ae795e86b3f834f85713a01a146e9/node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte";
function Error$1($$payload, $$props) {
  push(Error$1);
  $$payload.out += `<h1>`;
  push_element($$payload, "h1", 5, 0);
  $$payload.out += `${escape_html(page.status)}</h1>`;
  pop_element();
  $$payload.out += ` <p>`;
  push_element($$payload, "p", 6, 0);
  $$payload.out += `${escape_html(page.error?.message)}</p>`;
  pop_element();
  pop();
}
Error$1.render = function() {
  throw new Error$1("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};

export { Error$1 as default };
//# sourceMappingURL=error.svelte-CgZXOZU1.js.map
