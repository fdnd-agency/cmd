<script>
	export let contentRightText;
	export let contentRightImage;
	export let contentRightAlt;
</script>

<p>{contentRightText}</p>
<img src={contentRightImage} alt={contentRightAlt} />

<style>
	img {
		max-width: 100%;
	}
</style>
