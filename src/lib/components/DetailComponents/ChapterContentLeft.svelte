<script>
	export let contentLeftText;
	export let contentLeftImage;
	export let contentLeftAlt;
</script>

<div>
	<p>{#if contentLeftText}{contentLeftText}{/if}</p>
	<img src={contentLeftImage} alt={contentLeftAlt} />
</div>

<style>
	img {
		max-width: 100%;
	}

	p {
		/max-width: 30rem;
	}

	div {
		display: flex;
		flex-direction: column;
	}
</style>
