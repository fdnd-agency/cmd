<script>
	import ChapterSection from '$lib/components/DetailComponents/ChapterSection.svelte';
	import ChapterContentLeft from '$lib/components/DetailComponents/ChapterContentLeft.svelte';
	import ChapterContentRight from '$lib/components/DetailComponents/ChapterContentRight.svelte';
	import StandardHero from '$lib/components/DetailComponents/StandardHero.svelte';

	export let standard;

	console.log(standard);
</script>

{#if standard && Object.keys(standard).length}
	<StandardHero
		standardHeaderTitle={standard.data.title}
		standardHeaderIntroduction={standard.data.introduction}
	/>
	{#each standard.data?.chapters as chapter}
		<ChapterSection chapterTitle={chapter.data.title}>
			{#each chapter.data?.contentleft as contentleft}
				<ChapterContentLeft contentLeftText={contentleft.text} contentLeftImage={contentleft.url} />
			{/each}
			{#each chapter.data?.contentright as contentright}
				<ChapterContentRight
					contentRightText={contentright.text}
					contentRightImage={contentright.url}
				/>
			{/each}
		</ChapterSection>
	{/each}
{/if}
