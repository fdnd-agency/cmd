<script>
	export let chapterTitle;
</script>

<section class="chapter">
	<span>1.1</span>
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
		padding: 0.5rem;
		margin-bottom: 1rem;
		font-size: 1.3rem;
		max-width: 30rem;
		border: 2px solid var(--color-black);
	}

	section span {
		margin-bottom: 1rem;
		font-size: 1.3rem;
		max-width: 30rem;
		border: 2px solid var(--color-black);
		background-color: var(--color-cmd-yellow);
	}

	section div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
