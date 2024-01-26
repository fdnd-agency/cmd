<script>
	export let iconSrc
</script>

<div class="icon">
	<img src={iconSrc} alt="" />
</div>

<style>
	.icon {
		width: var(--icon-width, 0.8rem);
		height: auto;
		display: flex;
		align-items: center;
	}

	img {
		width: 100%;
		height: 100%;
	}
</style>
