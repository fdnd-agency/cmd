<script>
	import * as helpers from '@prismicio/helpers';

	export let contentRight;
</script>

{#if contentRight.length > 0}
<div>
	{@html helpers.asHTML(contentRight)}
</div>
{/if}	

<style>
	div {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}
</style>
