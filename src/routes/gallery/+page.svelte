<script>
	import Main from '$layouts/Main.svelte';
	import Heading from '$ui/Heading.svelte';
	import img1 from '$images/gallery/1.webp';
	import img2 from '$images/gallery/2.webp';
	import img3 from '$images/gallery/3.webp';
	import img4 from '$images/gallery/4.webp';
	import img5 from '$images/gallery/5.webp';
	import img6 from '$images/gallery/6.webp';
	import img7 from '$images/gallery/7.webp';
	import img8 from '$images/gallery/8.webp';
	import img9 from '$images/gallery/9.webp';

	const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
</script>

<Main>
	<Heading alignment="center">Gallery</Heading>
	<div class="my-10 grid grid-cols-3 gap-3 -sm:grid-cols-2 -xs:grid-cols-1">
		{#each imgs as img, index}
			<img src={img} alt="events {index}" class="h-full max-h-[250px] w-full object-cover" />
		{/each}
	</div>
</Main>
