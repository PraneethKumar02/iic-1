const load = async ({ url }) => {
  return {
    url: url.pathname
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-f398ddb4.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.f5505371.js","_app/immutable/chunks/scheduler.af88fea6.js","_app/immutable/chunks/index.3c1d0bd2.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.6fb4d1a6.js","_app/immutable/chunks/singletons.c7f82657.js"];
const stylesheets = ["_app/immutable/assets/0.e3144c2a.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-2507c252.js.map
