<script>
	export let buttonText;
</script>

<button>{buttonText}</button>

<style>
	button {
		all: unset;
		background-color: var(--color-black);
		color: var(--color-white);
		padding: 1rem 2rem;
		font-weight: bold;
		text-align: center;
	}

	button:hover {
		cursor: pointer;
		background-color: var(--color-cmd-yellow);
		color: var(--color-black);
	}
</style>
