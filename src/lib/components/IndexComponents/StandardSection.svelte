<script>
	export let standardTitle;
	export let standardUID;
</script>

<section>
	<a href={standardUID}>{standardTitle}</a>
	<slot />
</section>

<style>
	section {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	section a {
		color: var(--color-black);
		font-size: 1.3rem;
		font-weight: bold;
		transition: 0.1s ease-in-out;
	}

	section a:hover {
		color: var(--color-cmd-grey);
	}
</style>
