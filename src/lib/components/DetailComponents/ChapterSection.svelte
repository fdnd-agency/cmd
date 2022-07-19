<script>
	export let chapterTitle;
	export let chapterNumber;
</script>

<section class="chapter">
	<span>{chapterNumber}</span>
	<h2>{chapterTitle}</h2>
	<div>
		<slot />
	</div>
</section>

<style>
	section {
		padding: 1rem;
	}

	section h2 {
		padding: 0.5rem 0;
		margin-bottom: 1rem;
		font-size: 1.3rem;
		border: 2px solid var(--color-black);
		max-width: 30rem;
	}

	section span {
		margin-bottom: 1rem;
		font-size: 1.3rem;
		max-width: 30rem;
		border: 2px solid var(--color-black);
		background-color: var(--color-cmd-yellow);
	}

	@media (min-width: 60rem) {
		section {
			padding: 2rem 5rem;
		}

		div {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
