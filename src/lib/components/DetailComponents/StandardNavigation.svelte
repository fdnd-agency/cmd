<script>
	export let navigationLink;
	let isActive = true;

	function showMenu() {
		isActive = !isActive;
	}
</script>

<div>
	<span on:click={showMenu}>Menu</span>
	<nav class:active={isActive}>
		<slot />
		<a href={`${navigationLink}/#`}>Back To Top</a>
	</nav>
</div>

<style>
	div {
		background-color: var(--color-cmd-yellow);
		position: fixed;
		bottom: 2rem;
		right: 1rem;
		border-radius: 0.5rem;
		text-align: right;
		padding: 1rem;
	}

	span {
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
	}

	span:hover {
		color: var(--color-cmd-grey);
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	nav.active {
		display: none;
	}

	nav a {
		font-weight: bold;
		color: var(--color-black);
		transition: 0.3 ease-in-out;
	}

	nav a:hover {
		color: var(--color-cmd-grey);
	}
</style>
