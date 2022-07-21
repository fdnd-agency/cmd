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
		display: flex;
		flex-direction: column;
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

	@media (min-width: 60rem) {
		section {
			width: 100%;
		}
	}
</style>
