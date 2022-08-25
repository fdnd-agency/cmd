<script>
	export let contentRightText;
	export let contentRightImage;
	export let contentRightAlt;
</script>

<div>
	<p>{contentRightText}</p>
	<img src={contentRightImage} alt={contentRightAlt} />
</div>

<style>
	img {
		max-width: 70%;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	p {
		/max-width: 30rem;
	}
</style>
