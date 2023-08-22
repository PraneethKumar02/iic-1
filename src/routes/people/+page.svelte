<script>
	import Main from '$layouts/Main.svelte';
	import DrTapasSil from '$images/people/tapassil.webp';
	import DrPandiyarasan from '$images/people/pandiyarasan.webp';
	import ImageCard from '$components/ImageCard.svelte';
	import Heading from '$ui/Heading.svelte';
	import SubHeading from '$ui/SubHeading.svelte';
	import bingi from '$images/people/bingi.webp';
	import kpp from '$images/people/kpp.webp';
	import ceo from '$images/people/ceo.webp';
	import karthikc from '$images/people/karthikc.webp';
	import uttam from '$images/people/uttam.webp';
	import rohinip from '$images/people/rohinip.webp';
	import nmishra from '$images/people/nmishra.webp';
	import rampadhy from '$images/people/rampadhy.webp';
	import vssiyer from '$images/people/vssiyer.webp';
	import sudir from '$images/people/sudhir.webp';
	import MSK from '$images/people/MSK.webp';
	import NKUMAR from '$images/people/NKUMAR.webp';
	import priyanka from '$images/people/priyanka.webp';
	import SKUMARAN from '$images/people/SKUMARAN.webp';
	import gokulrajasekaran from '$images/people/gokulrajasekaran.webp';
	import EDM20D013 from '$images/people/EDM20D013.webp';
	import MFD18I024 from '$images/people/MFD18I024.webp';
	import MDM19B024 from '$images/people/MDM19B024.webp';
	import Sripaad from '$images/people/Sripaad.webp';
	import CS20B1130 from '$images/people/CS20B1130.webp';
	import ME20B1005 from '$images/people/ME20B1005.webp';
	import ME20B1006 from '$images/people/ME20B1006.webp';
	import ME20B1007 from '$images/people/ME20B1007.webp';
	import cs21b1023 from '$images/people/cs21b1023.webp';
	import me21b2004 from '$images/people/me21b2004.webp';
	const faculties = [

		{ name: 'Prof. M Sreekumar', src: MSK, designation: 'Professor,IIITDM' },
		{ name: 'Dr. Naveen Kumar', src: NKUMAR, designation: 'Associate Professor,IIITDM' },
		{ name: 'Dr. Sudhir Varadarajan', src: sudir, designation: 'Associate Professor,IIITDM' },
		{ name: 'Dr. Priyanka Kokil', src: priyanka, designation: 'Associate Professor,IIITDM' },
		{ name: 'Dr. Nachiketa Mishra', src: nmishra, designation: 'Assistant Professor,IIITDM' },
		{ name: 'Dr. K P Pradhan', src: kpp, designation: 'Assistant Professor,IIITDM' },
		{ name: 'Dr. Jayachandra Bingi', src: bingi, designation: 'Assistant Professor,IIITDM' },
		{ name: 'Dr. Kathick C', src: karthikc, designation: 'Assistant Professor,IIITDM' },
		{ name: 'Dr. Ram Prasad Padhy', src: rampadhy, designation: 'Assistant Professor,IIITDM' },
		{ name: 'Dr. Uttam Pal Mrinal', src: uttam, designation: 'Assistant Professor,IIITDM' },
		{ name: 'Dr. Rohini P', src: rohinip, designation: 'Assistant Professor,IIITDM' },
		{ name: 'Dr. Senthilkumaran K', src: SKUMARAN, designation: 'Assistant Professor,IIITDM' },
		{ name: 'Dr. VSS Iyer', src: vssiyer, designation: 'Assistant Professor,IIITDM' },
		{ name: 'Dr. Karthikeyan A K', src: ceo, designation: 'CEO,MaDeIT' },
		{ name: 'Dr. Gokul Rajasekaran', src: gokulrajasekaran, designation: 'Adjunct Faculty,IIITDM' }
	];
	const students = [
		{
			name: 'Amiya',
			src: EDM20D013,
			designation: 'EDM20D013'
		},
		{
			name: 'Gururaj Sawant',
			src: MFD18I024,
			designation: 'MFD18I024'
		},
		{
			name: 'J R Sukesh',
			src: MDM19B024,
			designation: 'MDM19B024'
		},
		{
			name: 'Sripaad Mahankali',
			src: Sripaad,
			designation: 'MFD19I001'
		},
		{
			name: 'G Praneeth Kumar',
			src: CS20B1130,
			designation: 'CS20B1130'
		},
		{
			name: 'N Naga Adithya',
			src: ME20B1005,
			designation: 'ME20B1005'
		},
		{
			name: 'Anjan Mahapatra',
			src: ME20B1006,
			designation: 'ME20B1006'
		},
		{
			name: 'Vishnuvardhan Iyengar',
			src: ME20B1007,
			designation: 'ME20B1007'
		},
		{
			name: 'SK Arian Islam',
			src: cs21b1023,
			designation: 'CS21B1023'
		},
		{
			name: 'Abinash Kumar',
			src: me21b2004,
			designation: 'ME21B2004'
		}
	];
</script>

<Main>
	<Heading alignment="center">IIC Members</Heading>
	<SubHeading>IIC President</SubHeading>
	<div class="flex w-full justify-center">
		<ImageCard
			member={{
				name: 'Dr. Tapas Sil',
				src: DrTapasSil,
				designation: 'Dean - Design, Innovation and Incubation.'
			}}
		/>
	</div>
	<SubHeading>IIC Convenor</SubHeading>
	<div class="flex w-full justify-center">
		<ImageCard
			member={{
				name: 'Dr. Pandiyarasan Veluswamy',
				src: DrPandiyarasan,
				designation: 'Assistant Professor, IIITDM'
			}}
		/>
	</div>
	<section class="my-10">
		<SubHeading>Our Faculty</SubHeading>
		<p class="my-10 text-center text-lg">
			Faculty members will work in close coordination with President and Convener to develop a
			comprehensive ecosystem of innovation and synergy in efforts to boost entrepreneurship. They
			will work as per the responsibilities assigned in council meeting.
		</p>
		<div class="flex flex-wrap justify-center gap-3">
			{#each faculties as faculty}
				<ImageCard member={faculty} />
			{/each}
		</div>
	</section>
	<section class="my-10">
		<SubHeading>Students</SubHeading>
		<p class="my-10 text-center text-lg">
			Student coordinators will act as a medium of communication between IIC and institute students.
			He/ She will understand the concept, idea and method of participation in IIC activities and
			disseminate it to all the students. He/ She will act as a volunteer for IIC programs and will
			support respective faculty coordinators.
		</p>
		<div class="flex flex-wrap justify-center gap-3">
			{#each students as student}
				<ImageCard member={student} />
			{/each}
		</div>
	</section>
</Main>
