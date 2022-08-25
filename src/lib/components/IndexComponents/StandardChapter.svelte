<script>
	export let standardUID;
	export let chapterUID;
	export let chapterTitle;
</script>

<li><a href="{standardUID}{chapterUID}">{chapterTitle}</a></li>

<style>
	a {
		padding: 0.5rem 0;
		color:var(--color-black);
		max-width:20em;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
