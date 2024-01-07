import { ssr, ssrHydrationKey, escape, createComponent, isServer, getRequestEvent } from 'file:///home/logno/projects/sign-gen3/node_modules/.pnpm/solid-js@1.8.8/node_modules/solid-js/web/dist/server.js';
import { f } from './index-4c60157c.mjs';
import { onCleanup } from 'file:///home/logno/projects/sign-gen3/node_modules/.pnpm/solid-js@1.8.8/node_modules/solid-js/dist/server.js';

function u(n) {
  if (isServer) {
    const t = getRequestEvent();
    t && onCleanup(t.components.status(n));
  }
  return null;
}
const l = ["<main", "><!--$-->", "<!--/--><!--$-->", '<!--/--><h1>Page Not Found</h1><p>Visit <a href="https://start.solidjs.com" target="_blank">start.solidjs.com</a> to learn how to build SolidStart apps.</p></main>'];
function S() {
  return ssr(l, ssrHydrationKey(), escape(createComponent(f, { children: "Not Found" })), escape(createComponent(u, { code: 404 })));
}

export { S as default };
//# sourceMappingURL=_...404_.mjs.map
