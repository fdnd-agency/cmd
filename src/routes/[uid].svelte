<script>
	import ChapterSection from '$lib/components/DetailComponents/ChapterSection.svelte';
	import ChapterContentLeft from '$lib/components/DetailComponents/ChapterContentLeft.svelte';
	import ChapterContentRight from '$lib/components/DetailComponents/ChapterContentRight.svelte';
	import StandardHero from '$lib/components/DetailComponents/StandardHero.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import StandardNavigation from '$lib/components/DetailComponents/StandardNavigation.svelte';
	import StandardNavigationLink from '$lib/components/DetailComponents/StandardNavigationLink.svelte';

	export let standard;
</script>

<PageTransition>
	{#if standard && Object.keys(standard).length}
		<StandardHero
			standardHeaderTitle={standard.data.title}
			standardHeaderIntroduction={standard.data.introduction}
			standardNumber={standard.data.standardnumber}
		/>
		{#each standard.data?.chapters as chapter, i}
			<ChapterSection
				chapterTitle={chapter?.data.title}
				chapterNumber={`${standard?.data.standardnumber}.${i + 1}`}
				chapterUID={chapter?.uid}
			>
				<ChapterContentLeft
					contentLeft={chapter?.data.contentleft}
				/>
				
				<ChapterContentRight
					contentRight={chapter?.data.contentright}
				/>
				
			</ChapterSection>
		{/each}
		<StandardNavigation 
			navigationLink={standard.uid}
			standardHeaderTitle={standard.data.title}
		>
			{#each standard.data.chapters as chapter}
				<StandardNavigationLink
					chapterLink={`${standard.uid}/#${chapter?.uid}`}
					chapter={chapter?.data.title}
				/>
			{/each}
		</StandardNavigation>
	{/if}
</PageTransition>
