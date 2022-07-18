<script>
	export let chapterTitle;
</script>

<section class="chapter">
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
		font-size: 1.1rem;
		padding: 0.5rem 0;
	}

	section div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
