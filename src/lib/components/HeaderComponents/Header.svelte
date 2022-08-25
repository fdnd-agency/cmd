<script>
	import Navigation from '$lib/components/HeaderComponents/Navigation.svelte';
</script>

<header>
	<a href="/" sveltekit:prefetch>CMD Mid Term</a>
	<Navigation />
</header>

<style>
	a {
		position: relative;
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--color-black);
		z-index: 1;
	}

	header {
		background-color: var(--color-cmd-yellow);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
	}
</style>
