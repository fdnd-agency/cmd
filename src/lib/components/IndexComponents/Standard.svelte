<script>
	export let standardTitle;
	export let standardUID;
</script>

<section>
	<a href={standardUID}>{standardTitle}</a>
	<ul><slot /></ul>
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
		padding-bottom:.5rem;
		transition: 0.1s ease-in-out;
		border-bottom:5px solid var(--color-cmd-yellow);
		margin-bottom:.5rem
	}

	@media (min-width: 45rem) {
		section {
			width: 100%;
		}
	}
</style>
