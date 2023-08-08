import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute, e as each, f as escape } from './ssr-30bef10a.js';
import { p as page } from './stores-c8091f84.js';

const Institute = "/_app/immutable/assets/institute-logo.589b5376.webp";
const IICLogo = "/_app/immutable/assets/iic-complete-logo.231ff5ab.webp";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links } = $$props;
  let { url } = $$props;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<header class="flex h-32 items-center justify-between bg-dominant px-20 shadow-sm"><div data-svelte-h="svelte-4hjti"><img${add_attribute("src", IICLogo, 0)} alt="IIC Logo" class="h-24"></div> <nav class="flex justify-center gap-10">${each(links, ({ href, active, title }) => {
    return `<a${add_attribute("href", href, 0)} class="${"rounded-lg px-2 py-1 text-lg font-medium " + escape(
      (href === "/" ? url === "/" : url.includes(active)) ? "bg-accent text-skin-inverted" : "hover:bg-muted-secondary",
      true
    )}">${escape(title)}</a>`;
  })}</nav> <div data-svelte-h="svelte-aiqhn6"><img${add_attribute("src", Institute, 0)} alt="Institute Logo" class="h-24"></div></header>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { style = "" } = $$props;
  let { variant = "default" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  return `${variant == "default" ? `<a${add_attribute("href", href, 0)} class="${"text-skin-muted transition-all hover:scale-110 hover:text-skin-accent " + escape(style, true)}">${slots.default ? slots.default({}) : ``}</a>` : `<a${add_attribute("href", href, 0)} class="${"border-b border-dotted border-base text-skin-muted transition-all hover:scale-110 hover:text-skin-accent " + escape(style, true)}">${slots.default ? slots.default({}) : ``}</a>`}`;
});
const IIC = "/_app/immutable/assets/iic-logo.592129be.webp";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="w-full border-t border-base bg-muted py-5"><div class="flex items-end justify-center gap-10 pb-5 -sm:hidden"><div class="flex items-center gap-2">${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://www.youtube.com/channel/UCC0_90UdP8T31E4CLBhPWWA"
    },
    {},
    {
      default: () => {
        return `Youtube`;
      }
    }
  )} ${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://www.facebook.com/iiitdmkanchee"
    },
    {},
    {
      default: () => {
        return `Facebook`;
      }
    }
  )} ${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://twitter.com/iiitdm_kancheep"
    },
    {},
    {
      default: () => {
        return `Twitter`;
      }
    }
  )}</div> <a class="flex items-center gap-1 text-accent" href="/" data-svelte-h="svelte-kg60e9"><img${add_attribute("src", IIC, 0)} alt="logo" class="h-16"> <img${add_attribute("src", Institute, 0)} alt="logo" class="h-16"></a> <div class="flex flex-col items-center"><div class="flex items-center gap-2">${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://www.instagram.com/iiitdmkancheepuram/"
    },
    {},
    {
      default: () => {
        return `Instagram`;
      }
    }
  )} ${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://www.linkedin.com/school/indian-institute-of-information-technology-design-&-manufacturing-kancheepuram/"
    },
    {},
    {
      default: () => {
        return `Linkedin`;
      }
    }
  )}  ${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://www.researchgate.net/institution/Indian_Institute_of_Information_Technology_Design_Manufacturing_Kancheepuram_India"
    },
    {},
    {
      default: () => {
        return `Research-Gate`;
      }
    }
  )}</div></div></div> <a class="flex items-center gap-1 text-accent sm:hidden" href="/" data-svelte-h="svelte-gcqwd2"><img${add_attribute("src", IIC, 0)} alt="logo" class="h-16"> <img${add_attribute("src", Institute, 0)} alt="logo" class="h-16"></a> <div class="my-4 flex flex-wrap items-center justify-center gap-4 sm:hidden">${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://www.youtube.com/channel/UCC0_90UdP8T31E4CLBhPWWA"
    },
    {},
    {
      default: () => {
        return `Youtube`;
      }
    }
  )} ${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://www.facebook.com/iiitdmkanchee"
    },
    {},
    {
      default: () => {
        return `Facebook`;
      }
    }
  )} ${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://twitter.com/iiitdm_kancheep"
    },
    {},
    {
      default: () => {
        return `Twitter`;
      }
    }
  )} ${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://www.instagram.com/iiitdmkancheepuram/"
    },
    {},
    {
      default: () => {
        return `Instagram`;
      }
    }
  )} ${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://www.linkedin.com/school/indian-institute-of-information-technology-design-&-manufacturing-kancheepuram/"
    },
    {},
    {
      default: () => {
        return `Linkedin`;
      }
    }
  )} ${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://www.researchgate.net/institution/Indian_Institute_of_Information_Technology_Design_Manufacturing_Kancheepuram_India"
    },
    {},
    {
      default: () => {
        return `Research-Gate`;
      }
    }
  )}</div> <p class="text-center text-sm font-medium -2xs:text-xs" data-svelte-h="svelte-vwtfer">© 2023, Institution Innovation Council, IIITDM Kancheepuram</p> <p class="mt-2 p-2 text-center text-xs font-medium text-skin-muted" data-svelte-h="svelte-gb3b3x">Developed by <a href="https://www.linkedin.com/in/svikas45/" class="font-bold text-skin-accent">D Sai Vikas (EC20B1038)</a>
		and
		<a href="https://www.linkedin.com/in/g-praneeth-kumar-a9641622b" class="font-bold text-skin-accent">G Praneeth Kumar (CS20B1130)</a></p></footer>`;
});
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration } = $$props;
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  return `<div class="overflow-hidden">${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const links = [
    { title: "Home", href: "/", active: "/" },
    {
      title: "Forms",
      href: "/forms",
      active: "forms"
    },
    {
      title: "Events",
      href: "/events",
      active: "events"
    },
    {
      title: "Gallery",
      href: "/gallery",
      active: "gallery"
    },
    {
      title: "People",
      href: "/people",
      active: "people"
    }
  ];
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${validate_component(Header, "Header").$$render($$result, { links, url: data.url }, {}, {})} ${validate_component(Transition, "Transition").$$render($$result, { duration: 300 }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-f398ddb4.js.map
