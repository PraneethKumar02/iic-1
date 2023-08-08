import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, f as escape } from './ssr-30bef10a.js';
import { M as Main, H as Heading } from './Heading-cdc79d6f.js';

const DrTapasSil = "/_app/immutable/assets/tapassil.b94b2fc0.webp";
const DrPandiyarasan = "/_app/immutable/assets/pandiyarasan.49933525.webp";
const ImageCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { member } = $$props;
  if ($$props.member === void 0 && $$bindings.member && member !== void 0)
    $$bindings.member(member);
  return `<div class="flex w-64 flex-col items-center justify-start rounded border-[1px] border-base bg-dominant p-5 text-center"><img${add_attribute("src", member.src, 0)}${add_attribute("alt", member.name, 0)} class="h-40"> ${member.name.length > 0 ? `<h1 class="w-full bg-accent p-2 text-skin-inverted">${escape(member.name)}</h1>` : ``} <p class="p-1 text-skin-muted">${escape(member.designation)}</p> ${slots.default ? slots.default({}) : ``}</div>`;
});
const SubHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { alignment = "center" } = $$props;
  let { color = "complementary" } = $$props;
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<h1 class="${"my-5 " + escape(alignment == "center" ? "text-center" : "text-left", true) + " text-2xl font-medium " + escape(color == "accent" && "text-skin-accent", true) + " " + escape(color == "complementary" && "text-complementary", true) + " " + escape(color == "default" && "text-skin-base", true)}">${slots.default ? slots.default({}) : ``}</h1>`;
});
const bingi = "/_app/immutable/assets/bingi.f880ea9f.webp";
const kpp = "/_app/immutable/assets/kpp.5a4746e9.webp";
const ceo = "data:image/webp;base64,UklGRoYDAABXRUJQVlA4IHoDAACwNgCdASpoAWgBPlEokkajoqGhIvlYQHAKCWlu4XVRG/NR+64xzgDaS51ddsGVnl2CsTT4oWd6+qnxQs719VPihZ3r6qfFCzvX1U+KFnevqp8ULO9fVT4oWd6+qnxQs719VPihZ3r6qfCaAV+8T7hA8av1vBxAd6+qnwgv48K5F+tjmsLMhxFqh10u1U+KFneSriDcmxgZOm9Ni7kvR8ULO9fVKAxFsKHN0Dv645GyOe9fVT4oNeztwq53lOf1hHnBxAd6+APbzXr6pTAdQHaaptOOUhLoSL4gOzO1WTzcymqnxQbPM6hmgdpoDj/AtTjIKptVPhPmt/6Ea8q5npUNuUjIKptVPhBJmmoTDEBmRTSxqcHEB3r6bp/If0Hd5BPsWelX96+qnxQs7MdZ2phacfECnrnevqp8TVBGMjnvzvz9BUw1PWuAgAHevqp8I8j/fX+X3ZBQQVfyONsF6kFU2qmBVe87X/tBGz6PKaqZQsXc3tmKIJgDhbKA5lL+ARvmbtY1+2Jg+ZTVT4marHqhBPDLgXoZ4aE/bU7qzsgqm1U+KGTKRLoqsk31gXLOM0i99VPihZ3r6qYrGXkAAAD+/4vB+lmAAAAIa4+UJmyP/LbhO+B3o1CZxjhLgFtK/351PJVVV6SoBRxIVk6AMq5i/aLNXk5tp4KoV/LThWrx7ipnuG26aqdxJLUDfcy/RyJjZ07ADQNu8RUu2vl8S712anMy5xY8cFsuen5GbTe1DNPdBKG3szQvbYKdMz572zx54rdgTmm+CKeReGdWaA7Mc2iKH5mpc/H9pHrMWwJ/AVWZY7Pn8wgrm4iWQ2SC94+FVOlLb3ykTH2RAzJyUesSupvZJDruLSEhPKwcvzwQq/aPWg7BIbCaJTtA0qF9P8wTKXqrpgZ2evacDIPQzL3tRzRwzSb/5Ux900/Yaa5XI3alTwkSHcy43lW7u2+ngJC34KLtp6RwaekcsRQZqO0ur7mokxfpnIIxlJH/h1Y/Suw2t/42sETIrOUhEszwo8WqJmQxXZv/C3Hp0KuTSczPdsWwa8yVp77s/j9Kk5fSjpJcqbi1hPyGdHDSer3/V2NBMazIul55VEoNUkAePpJzh1HB/+lMGioW3ceQUDT0sgcHV/+gsrk8H9Oo1twhQFTOOm5HqJEVTI21DjY0PMGEHBEMuO+gEAAAAA==";
const karthikc = "/_app/immutable/assets/karthikc.cdcf9da4.webp";
const uttam = "/_app/immutable/assets/uttam.48b1945b.webp";
const rohinip = "/_app/immutable/assets/rohinip.b98ad50a.webp";
const nmishra = "/_app/immutable/assets/nmishra.96f39981.webp";
const rampadhy = "/_app/immutable/assets/rampadhy.bb95447a.webp";
const vssiyer = "/_app/immutable/assets/vssiyer.f01113be.webp";
const sudir = "/_app/immutable/assets/sudhir.c5c08def.webp";
const MSK = "/_app/immutable/assets/MSK.fd4a45fa.webp";
const NKUMAR = "data:image/webp;base64,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";
const priyanka = "/_app/immutable/assets/priyanka.c0da38d1.webp";
const SKUMARAN = "/_app/immutable/assets/SKUMARAN.50e03ca8.webp";
const gokulrajasekaran = "/_app/immutable/assets/gokulrajasekaran.c087303b.webp";
const EDM20D013 = "/_app/immutable/assets/EDM20D013.e8deb3a6.webp";
const MFD18I024 = "/_app/immutable/assets/MFD18I024.85464e7e.webp";
const MDM19B024 = "/_app/immutable/assets/MDM19B024.17ec943f.webp";
const Sripaad = "/_app/immutable/assets/Sripaad.830c4826.webp";
const CS20B1130 = "/_app/immutable/assets/CS20B1130.d88eb212.webp";
const ME20B1005 = "/_app/immutable/assets/ME20B1005.91c6f0ec.webp";
const ME20B1006 = "/_app/immutable/assets/ME20B1006.3455caf4.webp";
const ME20B1007 = "/_app/immutable/assets/ME20B1007.c5fb3d5d.webp";
const cs21b1023 = "/_app/immutable/assets/cs21b1023.8cd2fe92.webp";
const me21b2004 = "/_app/immutable/assets/me21b2004.903e5bc1.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const faculties = [
    {
      name: "Dr. Jayachandra Bingi",
      src: bingi,
      designation: "Assistant Professor,IIITDM"
    },
    {
      name: "Dr. K P Pradhan",
      src: kpp,
      designation: "Assistant Professor,IIITDM"
    },
    {
      name: "Dr. Karthikeyan A K",
      src: ceo,
      designation: "CEO,MaDeIT"
    },
    {
      name: "Dr. Kathick C",
      src: karthikc,
      designation: "Assistant Professor,IIITDM"
    },
    {
      name: "Dr. Uttam Pal Mrinal",
      src: uttam,
      designation: "Assistant Professor,IIITDM"
    },
    {
      name: "Dr. Rohini P",
      src: rohinip,
      designation: "Assistant Professor,IIITDM"
    },
    {
      name: "Dr. Nachiketa Mishra",
      src: nmishra,
      designation: "Assistant Professor,IIITDM"
    },
    {
      name: "Dr. Ram Prasad Padhy",
      src: rampadhy,
      designation: "Assistant Professor,IIITDM"
    },
    {
      name: "Dr. VSS Iyer",
      src: vssiyer,
      designation: "Assistant Professor,IIITDM"
    },
    {
      name: "Dr. Sudhir Varadarajan",
      src: sudir,
      designation: "Associate Professor,IIITDM"
    },
    {
      name: "Prof. M Sreekumar",
      src: MSK,
      designation: "Professor,IIITDM"
    },
    {
      name: "Dr. Naveen Kumar",
      src: NKUMAR,
      designation: "Associate Professor,IIITDM"
    },
    {
      name: "Dr. Priyanka Kokil",
      src: priyanka,
      designation: "Associate Professor,IIITDM"
    },
    {
      name: "Dr. Senthilkumaran K",
      src: SKUMARAN,
      designation: "Assistant Professor,IIITDM"
    },
    {
      name: "Dr. Gokul Rajasekaran",
      src: gokulrajasekaran,
      designation: "Adjunct Faculty,IIITDM"
    }
  ];
  const students = [
    {
      name: "Amiya",
      src: EDM20D013,
      designation: "EDM20D013"
    },
    {
      name: "Gururaj Sawant",
      src: MFD18I024,
      designation: "MFD18I024"
    },
    {
      name: "J R Sukesh",
      src: MDM19B024,
      designation: "MDM19B024"
    },
    {
      name: "Sripaad Mahankali",
      src: Sripaad,
      designation: "MFD19I001"
    },
    {
      name: "G Praneeth Kumar",
      src: CS20B1130,
      designation: "CS20B1130"
    },
    {
      name: "N Naga Adithya",
      src: ME20B1005,
      designation: "ME20B1005"
    },
    {
      name: "Anjan Mahapatra",
      src: ME20B1006,
      designation: "ME20B1006"
    },
    {
      name: "Vishnuvardhan Iyengar",
      src: ME20B1007,
      designation: "ME20B1007"
    },
    {
      name: "SK Arian Islam",
      src: cs21b1023,
      designation: "CS21B1023"
    },
    {
      name: "Abinash Kumar",
      src: me21b2004,
      designation: "ME21B2004"
    }
  ];
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, { alignment: "center" }, {}, {
        default: () => {
          return `IIC Members`;
        }
      })} ${validate_component(SubHeading, "SubHeading").$$render($$result, {}, {}, {
        default: () => {
          return `IIC President`;
        }
      })} <div class="flex w-full justify-center">${validate_component(ImageCard, "ImageCard").$$render(
        $$result,
        {
          member: {
            name: "Dr. Tapas Sil",
            src: DrTapasSil,
            designation: "Dean - Design, Innovation and Incubation."
          }
        },
        {},
        {}
      )}</div> ${validate_component(SubHeading, "SubHeading").$$render($$result, {}, {}, {
        default: () => {
          return `IIC Convenor`;
        }
      })} <div class="flex w-full justify-center">${validate_component(ImageCard, "ImageCard").$$render(
        $$result,
        {
          member: {
            name: "Dr. Pandiyarasan Veluswamy",
            src: DrPandiyarasan,
            designation: "Assistant Professor, IIITDM"
          }
        },
        {},
        {}
      )}</div> <section class="my-10">${validate_component(SubHeading, "SubHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Our Faculty`;
        }
      })} <p class="my-10 text-center text-lg" data-svelte-h="svelte-10u5ltt">Faculty members will work in close coordination with President and Convener to develop a
			comprehensive ecosystem of innovation and synergy in efforts to boost entrepreneurship. They
			will work as per the responsibilities assigned in council meeting.</p> <div class="flex flex-wrap justify-center gap-3">${each(faculties, (faculty) => {
        return `${validate_component(ImageCard, "ImageCard").$$render($$result, { member: faculty }, {}, {})}`;
      })}</div></section> <section class="my-10">${validate_component(SubHeading, "SubHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Students`;
        }
      })} <p class="my-10 text-center text-lg" data-svelte-h="svelte-1dpgt2s">Student coordinators will act as a medium of communication between IIC and institute students.
			He/ She will understand the concept, idea and method of participation in IIC activities and
			disseminate it to all the students. He/ She will act as a volunteer for IIC programs and will
			support respective faculty coordinators.</p> <div class="flex flex-wrap justify-center gap-3">${each(students, (student) => {
        return `${validate_component(ImageCard, "ImageCard").$$render($$result, { member: student }, {}, {})}`;
      })}</div></section>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-de5d3b1f.js.map
