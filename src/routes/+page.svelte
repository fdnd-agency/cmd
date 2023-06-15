<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import WerkvormSection from '$lib/components/WerkvormSection.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import { page } from '$app/stores';
	import { tag } from '$lib/state/filter';
	import { browser } from '$app/environment';

	export let data;

	$: _tag = browser && $page.url.searchParams.get('tag');

	$: {
		const targetTag = _tag && data.tags.find((tagObj) => tagObj.waarde === _tag);
		targetTag && tag.set(targetTag);
	}
</script>

<section>
	<div class="sidebar-container">
		<Sidebar tags={data.tags} />
	</div>
	<div>
		<WerkvormSection werkvormen={data.werkvormen.werkvormen} />
	</div>
</section>

<BackToTop />

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding: 0 1.5rem;
		width: 100%;
		gap: 2rem;
	}

	div {
		width: 100%;
	}

	div:nth-child(2) {
		flex: 1;
	}

	div:first-child {
		flex: 0.5;
	}

	@media (max-width: 55rem) {
		section {
			flex-direction: column;
		}
	}
</style>
