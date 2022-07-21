<script>
	export let chapterLink;
	export let chapter;
</script>

<a href={chapterLink}>{chapter}</a>

<style>
	a {
		color: var(--color-black);
		max-width: 20rem;
	}

	a:hover {
		color: var(--color-cmd-grey);
	}

	a:first-child {
		padding-top: 0.5rem;
	}
</style>
