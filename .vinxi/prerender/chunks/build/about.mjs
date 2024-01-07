import { ssr, ssrHydrationKey, escape, createComponent } from 'file:///home/logno/projects/sign-gen3/node_modules/.pnpm/solid-js@1.8.8/node_modules/solid-js/web/dist/server.js';
import { f } from './index-4c60157c.mjs';
import { createResource } from 'file:///home/logno/projects/sign-gen3/node_modules/.pnpm/solid-js@1.8.8/node_modules/solid-js/dist/server.js';
import { createClient } from 'file:///home/logno/projects/sign-gen3/node_modules/.pnpm/@libsql+client@0.4.0-pre.7/node_modules/@libsql/client/lib-esm/web.js';

const a = createClient({ url: "libsql://sign-gen-logno-dev.turso.io", authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDI0LTAxLTA3VDAwOjU5OjM5LjUyMzMwMzIxNFoiLCJpZCI6IjhiYTQ3YWNjLWFjZjItMTFlZS04NDljLWRlNTQ3NWY0NjQ5ZiJ9.DiCFOAfLGWPsqScN3moZrzaZzcekxlA_kXvq_hTXb7_R8JR475PQxgIjxGbdflepkDH4oYOduqGu9Sj3ccFyBQ" });
async function l() {
  return (await a.execute("select * from test")).rows[0][1];
}
const u = ["<main", "><!--$-->", "<!--/--><h1>About</h1><pre>", "</pre></main>"];
function I() {
  const [e] = createResource({}, l);
  return ssr(u, ssrHydrationKey(), escape(createComponent(f, { children: "About" })), escape(JSON.stringify(e(), null, 2)));
}

export { I as default };
//# sourceMappingURL=about.mjs.map
