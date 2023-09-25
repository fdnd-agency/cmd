<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import Video from '$lib/components/Video.svelte';
	import PaperclipIcon from '$lib/icons/paperclip.svg?component';

	export let data;
</script>

<section>
	<div>
		<h3>Contactpersoon</h3>
		{#each data.contactpersonen as contactpersoon}
			<p>Naam: {contactpersoon.voornaam} {contactpersoon.achternaam}</p>
			<p>Email: <a href="mailto:{contactpersoon.email}">{contactpersoon.email}</a></p>
		{/each}
		<h3>Faculteit/opleiding</h3>
		<span>{data.opleiding?.faculteit?.titel} - {data.opleiding?.titel}</span>
		{#if data.materialen.length}
			<h3>Download materialen</h3>
			{#each data.materialen as materiaal, i}
				<a href={materiaal.url} class="material" target="_blank" rel="noopener noreferrer" download
					><PaperclipIcon />Materiaal #{i}</a
				>
			{/each}
		{/if}
		<h3>Korte beschrijving</h3>
		<p>{data.beschrijving}</p>
		<div class="tags">
			{#each data.tags as tag}
				<Tag title={tag.titel} link="/?tag={tag.waarde}" color={tag.kleur?.hex} />
			{/each}
		</div>
	</div>
	<Video src={data.video?.url} />
</section>

<style>
	section {
		padding: 2rem 2rem;
		display: flex;
		justify-content: space-between;
	}

	h3 {
		font-size: 1.5rem;
	}

	.material {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	p {
		max-width: 30rem;
	}

	.tags {
		display: flex;
		gap: 0.3rem;
	}

	@media (max-width: 55rem) {
		section {
			flex-direction: column;
			gap: 2rem;
		}
	}
</style>
