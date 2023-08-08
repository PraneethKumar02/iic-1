<script lang="ts">
	import '../app.postcss';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import Transition from '$components/Transition.svelte';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	const links = [
		{
			title: 'Home',
			href: '/',
			active: '/'
		},
		{
			title: 'Forms',
			href: '/forms',
			active: 'forms'
		},
		{
			title: 'Events',
			href: '/events',
			active: 'events'
		},
		{
			title: 'Gallery',
			href: '/gallery',
			active: 'gallery'
		},
		{
			title: 'People',
			href: '/people',
			active: 'people'
		}
	];
	export let data: LayoutData;
</script>

{#key $page.data.url}
	<Header {links} url={data.url} />
{/key}
{#key data.url}
	<Transition duration={300}>
		<slot><!-- optional fallback --></slot>
	</Transition>
{/key}
<Footer />
