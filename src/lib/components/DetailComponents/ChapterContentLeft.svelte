<script>
	export let contentLeftText;
	export let contentLeftImage;
	export let contentLeftAlt;
</script>

<p>{contentLeftText}</p>
<img src={contentLeftImage} alt={contentLeftAlt} />

<style>
	img {
		max-width: 100%;
	}
</style>
