<script>
	import { onMount } from 'svelte';
	import Nav from '$lib/organisms/nav.svelte';
	import { page } from '$app/stores';

	import WerkvormCard from '../lib/organisms/WerkvormCard.svelte';
	import NavFilterList from '../lib/atoms/NavFilterList.svelte';
	import FullScreenButton from '../lib/molecules/FullScreenButton.svelte';
	import IntroSection from '../lib/organisms/introSection.svelte';
	import { selectedTag } from '../lib/Utils/tagStore';

	/* ----------------------------- TRISTAN ATTEMPT ---------------------------- */
	$: filteredWorkforms = [];

	$: {
		// Check if selectedTag equals allTags or if it is a specific tag
		if ($selectedTag === 'allTags') {
			filteredWorkforms = data.workform;
		} else {
			// Get all workforms where tag id is equal to selectedTag
			filteredWorkforms = data.workform.filter((workform) =>
				workform.tags.some((tag) => tag.tag_id.id === $selectedTag)
			);
		}
	}
	/* ------------------------------- END ATTEMPT ------------------------------ */

	export let data;

	// Zoekbalk logica
	let searchInput = null;

	function searchWerkvormen(event) {
		event.preventDefault();
		const searchTerm = searchInput.value.toLowerCase();
		filteredWorkforms = data.workform.filter((werkvorm) =>
			werkvorm.title.toLowerCase().includes(searchTerm)
		);
	}

	onMount(async () => {
		document.documentElement.classList.add('javascriptEnabled');

		const filterSearchButtons = document.querySelectorAll('#filterSearch');

		filterSearchButtons.forEach((filterSearchButton) => {
			const filterMegaMenu = document.querySelector('#mega-menu');
			filterSearchButton.addEventListener('click', () => {
				filterMegaMenu.classList.toggle('visible');
			});
		});

		searchInput = document.getElementById('search-werkvormen');

		// Voeg submit event listener toe voor het tonen van resultaten bij het indienen van het formulier
		searchInput.form.addEventListener('submit', searchWerkvormen);

		return () => {
			// Verwijder event listeners bij het opruimen van het component
			searchInput.form.removeEventListener('submit', searchWerkvormen);
		};
	});
</script>

<svelte:head>
	<title>Platform Grote Thema's</title>
</svelte:head>

<main>
	<IntroSection />

	<Nav></Nav>

	<NavFilterList {data} {searchInput} />
	<!-- als selectedtags niet op alletags staat dan wordt er weergeven hoeveel werkvormen er zijn gevonden -->
	<section class="gevonden-werkvormen">
		{#if $selectedTag !== 'allTags'}
			<!-- als er 1 werkvorm terugkomt -->
			{#if filteredWorkforms.length === 1}
				<p>Er is 1 gevonden werkvorm</p>
			{:else}
				<!-- wanneer er meerdere werkvormen terugkomen -->
				<p>Er zijn {filteredWorkforms.length} gevonden werkvormen</p>
			{/if}
		{/if}
	</section>

	<section class="werkvormen" id="custom-view">
		<!-- Check if filteredWorkforms array contains more than 1 object -->
		{#if filteredWorkforms.length > 0}
			{#each filteredWorkforms as workform}
				<WerkvormCard {workform} />
			{/each}
		{:else}
			<p>Geen werkvormen gevonden</p>
		{/if}
	</section>
</main>

<FullScreenButton />

<style>
	main {
		padding: var(--unit-default);
	}
	.gevonden-werkvormen {
		margin: 2rem auto;
	}

	.werkvormen {
		display: flex;
		flex-flow: row wrap;
		gap: var(--unit-large);
		margin: var(--unit-large) auto 0;
    	padding-bottom: 5rem;
	}

	#custom-view {
		transition: var(--animation-default) ease-in-out;
	}

	@media (min-width: 46rem) {
		.werkvormen {
			width: 42rem;
			margin: var(--unit-large) auto 0;
			padding-bottom: 5rem;
		}
	}

	@media (min-width: 700px) {
		main {
			padding: 0 var(--unit-large);
		}
	}

	@media (min-width: 70rem) {
		.werkvormen {
			width: 64rem;
		}
	}
</style>
