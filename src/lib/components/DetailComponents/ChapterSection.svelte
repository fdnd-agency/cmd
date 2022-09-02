<script>
	export let chapterTitle;
	export let chapterNumber;
	export let chapterUID;
</script>

<section class="chapter" id={chapterUID}>
	<span>{chapterNumber}</span>
	<h2>{chapterTitle}</h2>
	<div class="chapter-content">
		<slot />
	</div>
</section>

<style>
	section {
		padding: 1rem;
		display:flex;
		flex-direction: column;
		align-items: flex-start;
	}

	section h2 {
		padding: 0.25rem;
		margin-bottom: 1rem;
		font-size: 1.3rem;
		border: 2px solid var(--color-black);
	}

	section span {
		font-size: 1.3rem;
		border: 2px solid var(--color-black);
		background-color: var(--color-cmd-yellow);
		padding:.25rem;
		margin-bottom:-2px;

	}

	div {
		grid-gap: 2rem;
	}

	@media (min-width: 45rem) {
		section {
			padding: 2rem 3rem;
		}
	}

	@media (min-width: 60rem) {
		section {
			padding: 2rem 5rem;
		}

		div {
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 2rem;
		}
	}
</style>
