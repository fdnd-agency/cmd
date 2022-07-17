<script>
	import StandardHero from '$lib/components/DetailComponents/StandardHero.svelte';
	import ChapterSection from '$lib/components/DetailComponents/ChapterSection.svelte';

	export let standard;
</script>

<StandardHero
	standardHeaderTitle={standard.data.title}
	standardHeaderIntroduction={standard.data.introduction}
/>
<ChapterSection/>
