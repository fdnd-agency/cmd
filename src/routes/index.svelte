<script>
	import Hero from '$lib/components/IndexComponents/Hero.svelte';
	import Introduction from '$lib/components/IndexComponents/Introduction.svelte';
	import Seperator from '$lib/components/Seperator.svelte';

	export let page;
	export let standards;
</script>

<main>
	<Hero heroTitle={page.data.title} />
	<Introduction introduction={page.data?.introduction} />
	<section>
		{#each standards as standard, i}
			<a href={standard.uid}>{i + 1}.0 {standard.data?.title}</a>
			<Seperator />
			{#each standard.data?.chapters as chapter, i}
				<div>
					<p>.{i + 1} {chapter.data?.title}</p>
				</div>
			{/each}
		{/each}
	</section>
</main>

<style>
	section {
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	section a {
		color: var(--color-black);
		font-size: 1.3rem;
		font-weight: bold;
		margin-top: 1rem;
	}
</style>
