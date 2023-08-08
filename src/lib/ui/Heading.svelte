<script lang="ts">
	export let alignment: 'center' | 'left' = 'left';
	export let color: 'accent' | 'base' = 'base';
</script>

<h1
	class="my-10 border-b-[1px] border-base pb-1 font-heading text-3xl font-medium mobile:text-2xl {color ==
	'base'
		? 'text-skin-base'
		: 'text-skin-accent'} {alignment == 'center' && 'text-center'}"
>
	<slot><!-- optional fallback --></slot>
</h1>
