<script>
	import Hero from '$lib/components/IndexComponents/Hero.svelte';
	import Introduction from '$lib/components/IndexComponents/Introduction.svelte';
	import * as helpers from '@prismicio/helpers';

	export let page;
	export let standards;
	console.log(standards);
</script>

<main>
	<Hero heroTitle={page.data.title} />
	<Introduction introduction={page.data?.introduction} />
	<section>
		{#each standards as standard, i}
			<a href={standard.uid}>{i + 1}.0 {standard.data?.title}</a>
			{#each standard.data?.chapters as chapter, i}
				<div>
					<p>{chapter.data?.title}</p>
				</div>
			{/each}
		{/each}
	</section>
</main>

<style>
	section {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	section a {
		color: var(--color-black);
		font-size: 1.3rem;
		font-weight: bold;
		margin: 0.5rem 0;
	}
</style>
