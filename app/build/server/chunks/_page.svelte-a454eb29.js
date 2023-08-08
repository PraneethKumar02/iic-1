import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, f as escape } from './ssr-30bef10a.js';
import { M as Main, H as Heading } from './Heading-cdc79d6f.js';

const img1 = "/_app/immutable/assets/1.466ca08d.webp";
const img2 = "/_app/immutable/assets/2.0e069bae.webp";
const img3 = "/_app/immutable/assets/3.c0819e73.webp";
const img4 = "/_app/immutable/assets/4.d1271880.webp";
const img5 = "/_app/immutable/assets/5.e982059b.webp";
const img6 = "/_app/immutable/assets/6.00ef6961.webp";
const img7 = "/_app/immutable/assets/7.c90c64e4.webp";
const img8 = "/_app/immutable/assets/8.14b796de.webp";
const img9 = "/_app/immutable/assets/9.90b7b6e6.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, { alignment: "center" }, {}, {
        default: () => {
          return `Gallery`;
        }
      })} <div class="my-10 grid grid-cols-3 gap-3 -sm:grid-cols-2 -xs:grid-cols-1">${each(imgs, (img, index) => {
        return `<img${add_attribute("src", img, 0)} alt="${"events " + escape(index, true)}" class="h-full max-h-[250px] w-full object-cover">`;
      })}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a454eb29.js.map
