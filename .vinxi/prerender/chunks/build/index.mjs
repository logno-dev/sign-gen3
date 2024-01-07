import { ssr, ssrHydrationKey, escape, createComponent } from 'file:///home/logno/projects/sign-gen3/node_modules/.pnpm/solid-js@1.8.8/node_modules/solid-js/web/dist/server.js';
import { f as f$1 } from './index-4c60157c.mjs';
import { createSignal } from 'file:///home/logno/projects/sign-gen3/node_modules/.pnpm/solid-js@1.8.8/node_modules/solid-js/dist/server.js';

const l = ["<button", ' class="increment">Clicks: <!--$-->', "<!--/--></button>"];
function i() {
  const [e, m] = createSignal(0);
  return ssr(l, ssrHydrationKey(), escape(e()));
}
const c = ["<main", "><!--$-->", "<!--/--><h1>Hello world!</h1><!--$-->", '<!--/--><p>Visit <a href="https://start.solidjs.com" target="_blank">start.solidjs.com</a> to learn how to build SolidStart apps.</p></main>'];
function f() {
  return ssr(c, ssrHydrationKey(), escape(createComponent(f$1, { children: "Hello World" })), escape(createComponent(i, {})));
}

export { f as default };
//# sourceMappingURL=index.mjs.map
