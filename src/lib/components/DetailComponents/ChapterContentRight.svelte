<script>
	import * as helpers from '@prismicio/helpers';

	export let contentRight;
</script>

<div>
	{@html helpers.asHTML(contentRight)}
</div>	

<style>
	div {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}
</style>
