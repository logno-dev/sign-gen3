import { createContext, createUniqueId, useContext, createRenderEffect, onCleanup } from 'file:///home/logno/projects/sign-gen3/node_modules/.pnpm/solid-js@1.8.8/node_modules/solid-js/dist/server.js';

const i = createContext(), d = (t, e, n) => (s({ tag: t, props: e, setting: n, id: createUniqueId(), get name() {
  return e.name || e.property;
} }), null);
function s(t) {
  const e = useContext(i);
  if (!e)
    throw new Error("<MetaProvider /> should be in the tree");
  createRenderEffect(() => {
    const n = e.addTag(t);
    onCleanup(() => e.removeTag(t, n));
  });
}
const f = (t) => d("title", t, { escape: true, close: true });

export { f };
//# sourceMappingURL=index-4c60157c.mjs.map
