<script>
	import Hero from '$lib/components/IndexComponents/Hero.svelte';
	import Introduction from '$lib/components/IndexComponents/Introduction.svelte';
	import Seperator from '$lib/components/Seperator.svelte';
	import StandardSection from '$lib/components/IndexComponents/StandardSection.svelte';
	import StandardChapter from '$lib/components/IndexComponents/StandardChapter.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	export let page;
	export let standards;
</script>

<PageTransition>
	<main>
		<Hero heroTitle={page.data.title} />
		<Introduction introduction={page.data?.introduction} />
		{#each standards as standard, i}
			<StandardSection
				standardUID={`/${standard?.uid}`}
				standardTitle={`${i + 1}.0 ${standard.data?.title}`}
			>
				<Seperator />
				{#each standard.data?.chapters as chapter, i}
					<StandardChapter chapterTitle={`.${i + 1} ${chapter.data?.title}`} />
				{/each}
			</StandardSection>
		{/each}
	</main>
</PageTransition>
