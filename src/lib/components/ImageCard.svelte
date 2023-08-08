<script lang="ts">
	export let member: {
		name: string;
		src: string;
		designation: string;
	};
</script>

<div
	class="flex w-64 flex-col items-center justify-start rounded border-[1px] border-base bg-dominant p-5 text-center"
>
	<img src={member.src} alt={member.name} class="h-40" />
	{#if member.name.length > 0}
		<h1 class="w-full bg-accent p-2 text-skin-inverted">{member.name}</h1>
	{/if}
	<p class="p-1 text-skin-muted">{member.designation}</p>
	<slot />
</div>
