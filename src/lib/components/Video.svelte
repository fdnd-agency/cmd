<script lang="ts">
	let video: HTMLVideoElement;
	export let src = '/video/example.mp4';
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video controls bind:this={video}>
	<source {src} />
</video>

<style>
	video {
		width: 60%;
		border-radius: .2rem;
	}

	@media (max-width: 55rem) {
		video {
			width: 100%;
		}
	}
</style>
