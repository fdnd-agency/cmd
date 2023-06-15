<script lang="ts">
	import { page } from '$app/stores';

	// TODO: Betere manier doen
	$: werkvormTitle = $page.url.pathname
		.replace('/', '')
		.replace('werkvorm-', '')
		.split('-')
		.join(' ');
</script>

<header>
	<div>
		<a href="/" data-sveltekit-preload-data="hover">
			<img src="/assets/images/logo.svg" alt="Hogeschool van Amsterdam" />
		</a>
		<nav>
			<a href="https://www.hva.nl/" target="_blank" rel="noopener noreferrer">HvA</a> / Informatie /
			<a href="/">Werkvormen & thema's</a>
		</nav>
		<h1>
			{$page.url.pathname === '/'
				? "Werkvormen & Thema's"
				: werkvormTitle[0].toUpperCase() + werkvormTitle.slice(1, werkvormTitle.length)}
		</h1>
		<p>
			Hier vind je alle werkvormen en thema’s die je kunt bekijken en materiaal van kan downloaden.
		</p>
	</div>
	<img src="/assets/images/hva-triangle.svg" alt="" class="graphic" />
</header>

<style>
	header > div {
		padding: 2rem 2rem 0;
	}
	img:first-child {
		max-width: 10rem;
	}

	a {
		text-decoration: none !important;
	}

	div {
		padding: 2rem;
	}

	nav {
		padding: 1rem 0;
	}

	h1 {
		font-size: 4rem;
		max-width: 45rem;
		line-height: 1.3em;
		padding: 0;
		margin: 0;
	}

	p {
		max-width: 30rem;
	}

	a {
		text-decoration: underline;
	}

	.graphic {
		position: absolute;
		top: 0rem;
		z-index: -1;
		max-width: 70%;
	}

	@media (max-width: 55rem) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
