<script>
	export let chapterLink;
	export let chapter;
</script>

<li>
	<a href={chapterLink}>{chapter}</a>
</li>


<style>
	li {
		margin-bottom: .25rem;
		display:flex
	}
	
	li:last-of-type {
		margin-bottom: 0;
	}

	a {
		color: var(--color-black);
		font-size: .8rem;
		padding:.25rem;
	}

	a:hover {
		background:var(--color-black);
		color:var(--color-cmd-yellow);
	}
</style>
