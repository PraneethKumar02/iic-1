<script lang="ts">
	import Main from '$layouts/Main.svelte';
	import Heading from '$ui/Heading.svelte';
	import poster1 from '$images/events/poster1.webp';
	import poster2 from '$images/events/poster2.webp';
	import poster3 from '$images/events/poster3.webp';
	import poster4 from '$images/events/poster4.webp';
	import poster5 from '$images/events/poster5.webp';
	import poster6 from '$images/events/poster6.webp';
	import poster7 from '$images/events/poster7.webp';
	import poster8 from '$images/events/poster8.webp';
	import poster9 from '$images/events/poster9.webp';
	import poster10 from '$images/events/poster10.webp';
	import poster11 from '$images/events/poster11.webp';

	const events = [
		{
			name: 'National Youth Day',
			date: '12-1-2023',
			description:
				'The National Youth Day or Rashtriya Yuva Divas is celebrated every year on January 12 to commemorate the birth anniversary of Swami Vivekananda, one of the greatest philosophers and spiritual leaders. Swami Vivekananda was born in Kolkata on January 12, 1863.',
			src: poster1
		},
		{
			name: 'National Pollution Control Day',
			date: '15-12-2022',
			description:
				'National Pollution Control Day is observed on December 2 every year. It commemorates those who lost their lives in the 1984 Bhopal Gas tragedy on December 2nd and 3rd. A poisonous gas known as MIC, Methyl Isocyanate, has caused many deaths. In terms of industrial pollution disasters, the Bhopal Gas Tragedy ranks among the worst.',
			src: poster2
		},
		{
			name: 'National Energy Conservation Day',
			date: '14-12-2022',
			description:
				'National Energy Conservation Day is celebrated on December 14 in India to raise awareness among people about global warming, climate change and promote ways of saving energy resources. It is indeed important to use energy wisely in order to enhance energy efficiency',
			src: poster3
		},
		{
			name: 'National StartUp Day',
			date: '16-1-2023',
			description:
				'India is known as a startup powerhouse, and government programmes like these promote innovation in all industries. Every year, January 16 is observed as National Startup Day across the nation. This announcement was made by Prime Minister Narendra Modi last year to help startup tradition spread to the grassroots level',
			src: poster4
		},
		{
			name: 'Field Trip at TANSAM:',
			date: '28-1-2023',
			description:
				"A field trip for the first year and second year UG students was organized as part of Institution's Innovation Council (IIC) at TANSAM (Tamilnadu smart and advanced manufacturing centre). A total of 21 students and one faculty member participated for this field trip. The field trip gave very good exposure to students about industry practice.",
			src: poster5
		},
		{
			name: 'Influx of AI generative Tools in the field of Entreprenuership',
			date: '6-1-2023',
			description:
				'Mr. Karthikeyan A K, Chief Executive Officer (CEO) at MaDeIT Innovation Foundation, an incubator at IIITDM Kancheepuram. During the talk, the road map of startup opportunities was discussed',
			src: poster6
		},
		{
			name: 'National Education Day',
			date: '11-11-2022',
			description:
				'A seminar was arranged on the occasion “National Education Day” to celebrate the birth anniversary of India’s first Education Minister, Maulana Abul Kalam Azad on 11/11/2022 at 10:00AM. Almost 250 students and three faculty members were present (at the hall no. H05) during the presentation on the topic by Dr Tapas Sil (Dean-Design Innovation and Incubation of IIITDM Kancheepuram).',
			src: poster7
		},
		{
			name: 'The Indian Story - Ronak Sutaria',
			date: '13-8-2022',
			description:
				'Mr. Ronak Sutaria is the Founder & CEO of Respirer living Sciences.Respirer Living Sciences is a climate science focused startup that builds low-cost and low-powered, sensor-based air quality and industrial emissions monitoring devices & ML based analytics and uses IoT and big data to provide solutions for industries, governments & communities.',
			src: poster8
		},
		{
			name: 'The Indian Story - Harish Hande',
			date: '23-7-2022',
			description:
				'Harish Hande, one among the most respected Social Entrepreneurs across the country. He Founded Selco in 1995, in the past few decades plus of operation, Selco has impacted more than a million lives in rural India.Busting the myth that the poor of this country can’t afford and maintain sustainable technologies.',
			src: poster9
		},
		{
			name: 'The Indian Story - Harish Hande',
			date: '23-7-2022',
			description:
				'Harish Hande, one among the most respected Social Entrepreneurs across the country. He Founded Selco in 1995, in the past few decades plus of operation, Selco has impacted more than a million lives in rural India.Busting the myth that the poor of this country can’t afford and maintain sustainable technologies.',
			src: poster10
		},
		{
			name: 'IIC - Hackathon',
			date: '19-11-2022',
			description:
				'The ideathon was organized on the theme of promoting sustainable development goals based on product development. The event saw the participation of 34 teams across the years with a total of 101 participants.',
			src: poster11
		}
	];
</script>

<Main>
	<Heading alignment="center">Events</Heading>
	<div class="mb-10 grid grid-cols-3 gap-5">
		{#each events as { src, description, name, date }}
			<div
				class="flex flex-col items-center justify-start rounded-lg border-[1px] border-base bg-muted text-center"
			>
				<h1 class="h-10 w-full rounded-t-lg bg-accent p-2 text-skin-inverted">{name}</h1>
				<img {src} alt={name} class="h-40" />
				<p class="mt-5 self-start pl-3 font-semibold">
					Date: <span class="font-normal text-skin-muted">{date}</span>
				</p>
				<p class="p-3 text-justify font-semibold">
					Description: <span class="font-normal text-skin-muted">{description}</span>
				</p>
				<slot />
			</div>
		{/each}
	</div>
</Main>
