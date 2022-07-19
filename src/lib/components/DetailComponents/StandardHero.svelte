<script>
	import * as helpers from '@prismicio/helpers';

	export let standardHeaderTitle;
	export let standardHeaderIntroduction;
	export let standardNumber;
</script>

<section>
	<h1>{`${standardNumber}.0`} {standardHeaderTitle}</h1>
	<div>{@html helpers.asHTML(standardHeaderIntroduction)}</div>
</section>

<style>
	section {
		background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
			url('/assets/images/detail-hero-image.jpg');
		background-size: cover;
		background-position: center;
		height: 15rem;
		color: var(--color-white);
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h1 {
		color: var(--color-cmd-yellow);
		font-style: normal;
	}

	div {
		max-width: 50rem;
	}

	@media (min-width: 60rem) {
		section {
			height: 20rem;
			padding: 3rem 5rem;
		}
		h1 {
			font-size: 2.5rem;
		}

		div {
			font-size: 1.2rem;
		}
	}
</style>
