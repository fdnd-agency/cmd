<script>
	import * as helpers from '@prismicio/helpers';

	export let introduction;
	export let introductionTitle;
</script>

<section>
	<div>
		<h2>{introductionTitle}</h2>
		<p>{@html helpers.asHTML(introduction)}</p>
	</div>
	<img src="/assets/images/cmd-laptop.png" alt="Laptop" />
</section>

<style>
	section {
		background-color: var(--color-cmd-yellow);
		padding: 1rem;
		display: flex;
		flex-direction: column;
	}

	img {
		align-self: center;
		width: 12rem;
	}

	p {
		max-width: 30rem;
	}

	@media (min-width: 60rem) {
		section {
			flex-direction: row;
			align-items: center;
			justify-content: center;
			padding: 3rem 0;
			gap: 1rem;
		}

		img {
			width: 18rem;
		}

		h2 {
			font-size: 2rem;
			padding-bottom: 1rem;
		}

		p {
			font-size: 1.2rem;
		}
	}
</style>
