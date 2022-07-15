<script>
	export let heroTitle;
</script>

<section>
	<h2>{heroTitle}</h2>
	
</section>

<style>

	section:first-child {
		background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
			url('/assets/images/hero-image.jpg');
		background-size: cover;
		background-position: center;
		height: 15rem;
		color: var(--color-white);
		padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
	}
</style>
