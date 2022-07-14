<script>
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<header>
	<h1>CMD Mid-term</h1>
	<Navigation />
</header>

<style>
	h1 {
		position: relative;
		font-size: 1.5rem;
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
