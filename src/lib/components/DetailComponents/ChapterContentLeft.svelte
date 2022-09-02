<script>
	import * as helpers from '@prismicio/helpers';

	export let contentLeft;

</script>

<div>
	{@html helpers.asHTML(contentLeft)}
</div>


<style>
	div {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}
</style>
