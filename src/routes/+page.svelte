<script>
	import Main from '$layouts/Main.svelte';
	import Heading from '$ui/Heading.svelte';
	import Motto from '$images/motto.webp';
	import Marquee from '$components/Marquee.svelte';

	const goals = [
		{
			title: 'Hold activities',
			description: 'To conduct various innovation and entrepreneurship-related activities'
		},
		{
			title: 'Promote Innovation',
			description: 'Identify and reward innovations and share success stories'
		},
		{
			title: 'Organize workshops',
			description:
				'Organize periodic workshops, seminars, interactions with entrepreneurs, investors and professionals'
		},
		{
			title: 'Build Network',
			description:
				'Develop a network with peers and national entrepreneurship development organizations like EDII-TN, Startup India and etc.'
		},
		{
			title: 'Organize Hackathons',
			description:
				'Organize Hackathons, Idea Competitions and Mini-Challenges with the involvement of industries'
		}
	];
</script>

<section class="relative h-[calc(100vh-theme(spacing.32))] w-screen">
	<div class="absolute inset-0 h-full w-full bg-[url('/poster.webp')] bg-cover bg-fixed" />
	<div
		class="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-10 bg-black/50 text-center text-skin-inverted"
	>
		<h1 class="font-heading text-5xl font-medium">Innovate @ IIITDM</h1>
		<p class="mx-40 text-lg">
			The Institute Innovation Council (IIC, setup in 2018) comprising student and faculty members
			organizes MIC- and self-driven events to create awareness and encourage students to
			participate in competitions such as the Smart India Hackathon, Toycathon, Mars Rover, AUV and
			SAE. IIC also encourages faculty to develop as Innovation Ambassadors.
		</p>
	</div>
</section>
<div class="bg-accent py-2 text-center font-semibold text-skin-inverted">
	<h2>Upcoming events will be updated here.</h2>
</div>
<Main>
	<section class="mb-10 text-justify text-lg">
		<Heading>Institution Innovation Council</Heading>
		<p class="mb-5">
			Innovation Activities at IIITDM Kancheepuram is organized by the Institute Innovation Council.
			The Institute Innovation Council (IIC, setup in 2018) comprising student and faculty members
			organizes MIC- and self-driven events to create awareness, conduct various innovation and
			entrepreneurship related activities, and to systematically foster the culture of innovation in
			IIITDM Kancheepuram.
		</p>
		<p>
			The IIC website serves as a platform to engage in various innovation and
			entrepreneurship-related activities within our institution. Its primary role is to create an
			environment that nurtures innovation and supports the development of start-ups. Some of the
			key functions of the IIC website are engaging the student body in Innovation and
			Entrepreneurship Activities, Intellectual Property Rights (IPR), Project Handling and
			Management and etc.
		</p>
	</section>
	<section>
		<img src={Motto} alt="motto" class="m-auto h-[500px]" />
	</section>
	<section class="relative my-10 rounded border bg-muted shadow-md">
		<div class="h-full w-full overflow-hidden rounded">
			<div class="h-2 w-full bg-accent" />
			<div class="p-10 -sm:p-3">
				<h1 class="font-heading text-3xl font-medium text-accent -sm:text-2xl">Goals</h1>
				<ul class="my-5 flex flex-col gap-2 border-l border-base pl-5 -sm:border-l-0 -sm:pl-0">
					{#each goals as { title, description }}
						<li class="relative rounded-lg border border-base bg-dominant p-4 shadow-sm">
							<span
								class="absolute -left-7 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-accent -sm:hidden"
							>
								<span class="h-2 w-2 rounded-full bg-muted" />
							</span>
							<h2 class="text-lg font-medium">{title}</h2>
							<p class="mt-2 text-skin-muted">{description}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>
</Main>
