<script lang="ts">
	import type { WerkvormFragment } from '$lib/graphql/generated/sdk';
	import { filteredWerkvormen, searchterm, werkvormenStore } from '../state/filter';
	import Tag from './Tag.svelte';
	import Werkvorm from './Werkvorm.svelte';

	export let werkvormen: WerkvormFragment[];
	werkvormenStore.set(werkvormen);
</script>

<section>
	<h2>Werkvormen</h2>
	<div>
		{#if !$filteredWerkvormen.length && !$searchterm}
			<p>Er zijn nog geen bestaande werkvormen</p>
		{:else if !$filteredWerkvormen.length && $searchterm}
			<p>Er zijn geen werkvormen gevonden met de zoekterm: <span>{$searchterm}</span></p>
		{:else}
			{#each $filteredWerkvormen as werkvorm}
				<Werkvorm
					title={werkvorm.title}
					description={werkvorm.beschrijving}
					link="/{werkvorm.link}"
					image={werkvorm.thumbnail.url}
				>
					{#each werkvorm.tags as tag}
						<Tag title={tag.titel} link="/?tag={tag.waarde}" color={tag.kleur?.hex} />
					{/each}
				</Werkvorm>
			{/each}
		{/if}
	</div>
</section>

<style>
	h2 {
		font-size: 2rem;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	span {
		color: var(--color-hva-red);
		text-decoration: underline;
	}

	@media (max-width: 55rem) {
		section {
			padding-bottom: 2rem;
		}
	}
</style>
