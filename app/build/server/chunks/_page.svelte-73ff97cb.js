import { c as create_ssr_component, v as validate_component, e as each, f as escape, d as add_attribute } from './ssr-30bef10a.js';
import { M as Main, H as Heading } from './Heading-cdc79d6f.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, { alignment: "center" }, {}, {
        default: () => {
          return `Our Policies`;
        }
      })} <ul class="my-5 flex flex-col items-center justify-center gap-5">${each(Object.entries(data.forms), ([title, links]) => {
        return `<li class="h-full w-full overflow-hidden rounded border border-base bg-muted"><div class="h-2 w-full bg-accent"></div> <div class="p-10 -sm:p-3"><h1 class="${"font-heading text-3xl font-medium " + escape(
          Array.isArray(links) ? "text-complementary" : "text-accent",
          true
        ) + " border-b border-base -sm:text-2xl"}">${escape(title)}</h1> ${Array.isArray(links) ? `<ul class="my-5 flex flex-col gap-2">${each(links, ({ href, title: title2 }) => {
          return `<li class="relative rounded-lg border border-base bg-dominant p-4 shadow-sm hover:bg-muted-secondary hover:shadow-md"><a${add_attribute("href", href, 0)} class="m-0 block h-full w-full">${escape(title2)}</a> </li>`;
        })} </ul>` : ``}</div> </li>`;
      })}</ul>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-73ff97cb.js.map
