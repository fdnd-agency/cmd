<script>
	import * as helpers from '@prismicio/helpers';

	export let introduction;
	export let introductionTitle;
</script>

<section>
	<div class="content">
		<h2>{introductionTitle}</h2>
		{@html helpers.asHTML(introduction)}
	</div>
	<img src="/assets/images/cmd-laptop.png" alt="Laptop" />
</section>

<style>
	section {
		background-color: var(--color-cmd-yellow);
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
	}

	img {
		align-self: center;
		width: 12rem;
	}

	@media (min-width: 40rem) {
		section {
			flex-direction: row;
			align-items: center;
			justify-content: center;
			padding: 3rem;
			gap: 1rem;
		}
	}

	@media (min-width: 60rem) {
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
