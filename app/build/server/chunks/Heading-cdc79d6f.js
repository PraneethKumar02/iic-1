import { c as create_ssr_component, f as escape } from './ssr-30bef10a.js';

const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "px-32" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<main class="${"mobile:px-4 " + escape(style, true)}">${slots.default ? slots.default({}) : ``}</main>`;
});
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { alignment = "left" } = $$props;
  let { color = "base" } = $$props;
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<h1 class="${"my-10 border-b-[1px] border-base pb-1 font-heading text-3xl font-medium mobile:text-2xl " + escape(color == "base" ? "text-skin-base" : "text-skin-accent", true) + " " + escape(alignment == "center" && "text-center", true)}">${slots.default ? slots.default({}) : ``}</h1>`;
});

export { Heading as H, Main as M };
//# sourceMappingURL=Heading-cdc79d6f.js.map
