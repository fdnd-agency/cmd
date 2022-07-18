<script>
	import * as helpers from '@prismicio/helpers';

	export let introduction;
</script>

<section>
	<p>{@html helpers.asHTML(introduction)}</p>
	<img src="/assets/images/cmd-laptop.png" alt="Laptop" />
</section>

<style>
	section {
		background-color: var(--color-cmd-yellow);
		padding: 1rem;
		display: flex;
		flex-direction: column;
	}

	img {
		align-self: center;
		width: 12rem;
	}
</style>
