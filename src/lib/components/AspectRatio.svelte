<script lang="ts">
	export let ratio = 1 / 1;

	const aspect = (1 / ratio) * 100;
</script>

<div style="--aspect: {aspect}%">
	<slot />
</div>

<style>
	div {
		position: relative;
	}

	div::after {
		content: '';
		height: 0;
		display: block;
		padding-bottom: var(--aspect);
	}

	div:global(> video),
	div:global(> img) {
		object-fit: cover;
	}

	div:global(> :not(style)) {
		overflow: hidden;
		position: absolute;
		inset: 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>
