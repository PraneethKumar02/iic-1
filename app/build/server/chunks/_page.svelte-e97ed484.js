import { c as create_ssr_component, v as validate_component, e as each, f as escape, d as add_attribute } from './ssr-30bef10a.js';
import { M as Main, H as Heading } from './Heading-cdc79d6f.js';

const poster1 = "/_app/immutable/assets/poster1.e5f658b8.webp";
const poster2 = "/_app/immutable/assets/poster2.325f39a9.webp";
const poster3 = "/_app/immutable/assets/poster3.7171f754.webp";
const poster4 = "/_app/immutable/assets/poster4.877af274.webp";
const poster5 = "/_app/immutable/assets/poster5.01f15f1f.webp";
const poster6 = "/_app/immutable/assets/poster6.421e370e.webp";
const poster7 = "/_app/immutable/assets/poster7.4da57583.webp";
const poster8 = "/_app/immutable/assets/poster8.9a09cd6f.webp";
const poster9 = "/_app/immutable/assets/poster9.50040e2b.webp";
const poster10 = "/_app/immutable/assets/poster10.d6397837.webp";
const poster11 = "/_app/immutable/assets/poster11.d8c92b9b.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const events = [
    {
      name: "National Youth Day",
      date: "12-1-2023",
      description: "The National Youth Day or Rashtriya Yuva Divas is celebrated every year on January 12 to commemorate the birth anniversary of Swami Vivekananda, one of the greatest philosophers and spiritual leaders. Swami Vivekananda was born in Kolkata on January 12, 1863.",
      src: poster1
    },
    {
      name: "National Pollution Control Day",
      date: "15-12-2022",
      description: "National Pollution Control Day is observed on December 2 every year. It commemorates those who lost their lives in the 1984 Bhopal Gas tragedy on December 2nd and 3rd. A poisonous gas known as MIC, Methyl Isocyanate, has caused many deaths. In terms of industrial pollution disasters, the Bhopal Gas Tragedy ranks among the worst.",
      src: poster2
    },
    {
      name: "National Energy Conservation Day",
      date: "14-12-2022",
      description: "National Energy Conservation Day is celebrated on December 14 in India to raise awareness among people about global warming, climate change and promote ways of saving energy resources. It is indeed important to use energy wisely in order to enhance energy efficiency",
      src: poster3
    },
    {
      name: "National StartUp Day",
      date: "16-1-2023",
      description: "India is known as a startup powerhouse, and government programmes like these promote innovation in all industries. Every year, January 16 is observed as National Startup Day across the nation. This announcement was made by Prime Minister Narendra Modi last year to help startup tradition spread to the grassroots level",
      src: poster4
    },
    {
      name: "Field Trip at TANSAM:",
      date: "28-1-2023",
      description: "A field trip for the first year and second year UG students was organized as part of Institution's Innovation Council (IIC) at TANSAM (Tamilnadu smart and advanced manufacturing centre). A total of 21 students and one faculty member participated for this field trip. The field trip gave very good exposure to students about industry practice.",
      src: poster5
    },
    {
      name: "Influx of AI generative Tools in the field of Entreprenuership",
      date: "6-1-2023",
      description: "Mr. Karthikeyan A K, Chief Executive Officer (CEO) at MaDeIT Innovation Foundation, an incubator at IIITDM Kancheepuram. During the talk, the road map of startup opportunities was discussed",
      src: poster6
    },
    {
      name: "National Education Day",
      date: "11-11-2022",
      description: "A seminar was arranged on the occasion “National Education Day” to celebrate the birth anniversary of India’s first Education Minister, Maulana Abul Kalam Azad on 11/11/2022 at 10:00AM. Almost 250 students and three faculty members were present (at the hall no. H05) during the presentation on the topic by Dr Tapas Sil (Dean-Design Innovation and Incubation of IIITDM Kancheepuram).",
      src: poster7
    },
    {
      name: "The Indian Story - Ronak Sutaria",
      date: "13-8-2022",
      description: "Mr. Ronak Sutaria is the Founder & CEO of Respirer living Sciences.Respirer Living Sciences is a climate science focused startup that builds low-cost and low-powered, sensor-based air quality and industrial emissions monitoring devices & ML based analytics and uses IoT and big data to provide solutions for industries, governments & communities.",
      src: poster8
    },
    {
      name: "The Indian Story - Harish Hande",
      date: "23-7-2022",
      description: "Harish Hande, one among the most respected Social Entrepreneurs across the country. He Founded Selco in 1995, in the past few decades plus of operation, Selco has impacted more than a million lives in rural India.Busting the myth that the poor of this country can’t afford and maintain sustainable technologies.",
      src: poster9
    },
    {
      name: "The Indian Story - Harish Hande",
      date: "23-7-2022",
      description: "Harish Hande, one among the most respected Social Entrepreneurs across the country. He Founded Selco in 1995, in the past few decades plus of operation, Selco has impacted more than a million lives in rural India.Busting the myth that the poor of this country can’t afford and maintain sustainable technologies.",
      src: poster10
    },
    {
      name: "IIC - Hackathon",
      date: "19-11-2022",
      description: "The ideathon was organized on the theme of promoting sustainable development goals based on product development. The event saw the participation of 34 teams across the years with a total of 101 participants.",
      src: poster11
    }
  ];
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, { alignment: "center" }, {}, {
        default: () => {
          return `Events`;
        }
      })} <div class="mb-10 grid grid-cols-3 gap-5">${each(events, ({ src, description, name, date }) => {
        return `<div class="flex flex-col items-center justify-start rounded-lg border-[1px] border-base bg-muted text-center"><h1 class="h-10 w-full rounded-t-lg bg-accent p-2 text-skin-inverted">${escape(name)}</h1> <img${add_attribute("src", src, 0)}${add_attribute("alt", name, 0)} class="h-40"> <p class="mt-5 self-start pl-3 font-semibold">Date: <span class="font-normal text-skin-muted">${escape(date)}</span></p> <p class="p-3 text-justify font-semibold">Description: <span class="font-normal text-skin-muted">${escape(description)}</span></p> ${slots.default ? slots.default({}) : ``} </div>`;
      })}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e97ed484.js.map
