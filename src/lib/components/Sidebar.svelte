<script lang="ts">
	import Collapsable from './Collapsable.svelte';
	import SearchIcon from '$lib/icons/search.svg?component';
	import { onderwerpen, focus, doel, fase } from '$lib/data/categories';
	import { searchterm, tag } from '../state/filter';
	import { page } from '$app/stores';
	import CrossIcon from '$lib/icons/cross.svg?component';
	import { goto } from '$app/navigation';
	import type { TagFragment } from '$lib/graphql/generated/sdk';
	import Tag from './Tag.svelte';

	export let tags: TagFragment[];

	function handleSearch(e: KeyboardEvent) {
		const value = (e.target as HTMLInputElement).value;
		searchterm.set(value);
	}
</script>

<aside>
	<h2>Zoeken</h2>
	<div class="input-container">
		<SearchIcon class="search-icon" />
		<input on:keyup={handleSearch} type="search" placeholder="Zoek op werkvormen en thema's" />
	</div>
	{#if $tag}
		<button
			style:--tag-color={$tag.kleur?.hex}
			on:click={() => {
				goto('/');
				tag.set(undefined);
			}}>{$tag.titel} <CrossIcon /></button
		>
	{/if}
	<h2>Sorteren op categorie</h2>
	<div class="tags">
		{#each tags as tag}
			<Tag color={tag.kleur?.hex} link="/?tag={tag.waarde}" title={tag.titel} />
		{/each}
	</div>
</aside>

<style>
	h2 {
		font-size: 2rem;
	}

	input {
		all: unset;
		background-color: var(--color-white);
		color: var(--color-navy-blue);
		width: 100%;
		height: 100%;
		padding: 0;
	}

	.input-container {
		background-color: var(--color-white);
		color: var(--color-navy-blue);
		padding: 0.5rem 1rem;
		margin-bottom: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	a {
		color: var(--color-white);
		text-decoration: none;
	}

	button {
		all: unset;
		font-weight: 700;
		padding: 0.75rem 1rem;
		transition: 100ms background-color ease-out;
		background-color: var(--tag-color);
		color: var(--color-white);
		margin-bottom: 1rem;
		cursor: pointer;
		border: 2px solid var(--tag-color);

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	button:hover {
		background-color: transparent;
		color: var(--tag-color);
		border: 2px solid var(--tag-color);
	}

	@media (max-width: 55rem) {
		h2 {
			font-size: 1.5rem;
		}
	}

	.tags {
		display: flex;
		gap: 0.5rem;
	}
</style>
