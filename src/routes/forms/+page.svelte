<script lang="ts">
	import Main from '$layouts/Main.svelte';
	import Heading from '$ui/Heading.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Main>
	<Heading alignment="center">Our Policies</Heading>
	<ul class="my-5 flex flex-col items-center justify-center gap-5">
		{#each Object.entries(data.forms) as [title, links]}
			<li class="h-full w-full overflow-hidden rounded border border-base bg-muted">
				<div class="h-2 w-full bg-accent" />
				<div class="p-10 -sm:p-3">
					<h1
						class="font-heading text-3xl font-medium {Array.isArray(links)
							? 'text-complementary'
							: 'text-accent'} border-b border-base -sm:text-2xl"
					>
						{title}
					</h1>
					{#if Array.isArray(links)}
						<ul class="my-5 flex flex-col gap-2">
							{#each links as { href, title }}
								<li
									class="relative rounded-lg border border-base bg-dominant p-4 shadow-sm hover:bg-muted-secondary hover:shadow-md"
								>
									<a {href} class="m-0 block h-full w-full">{title}</a>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</Main>
