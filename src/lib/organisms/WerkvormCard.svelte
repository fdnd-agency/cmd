<script>
	export let workform
</script>

<article>
	<ul>
		{#if workform.tags.length > 0}
			{#each workform.tags as tag}
				<li style="border-color: {tag.tag_id.color};">{tag.tag_id.title}</li>
			{/each}
		{:else}
			<li style="border-color: white">Geen tags</li>
		{/if}
	</ul>

	<img src={"https://platform-big-themes.directus.app/assets/" + workform.thumbnail.id} alt="" width={workform.thumbnail.width} height={workform.thumbnail.height} />
	<div>
		<div>
			<h2>{workform.title}</h2>
			{#if workform.shortDescription}
				<p>{workform.shortDescription}</p>
			{:else}
				<p>Geen beschrijving beschikbaar.</p>
			{/if}
		</div>
		<a href={workform.link}><img src="images/icons/arrow-right.svg" alt="" />Bekijk werkvorm</a>
	</div>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		row-gap: var(--unit-default);
		background-color: var(--color-hva-blue-secundary);
		box-shadow: 8px 8px #1e1649;
        min-width: 20rem;
		max-width: 20rem;
		padding: 0.8rem;
	}

	article > img {
		height: 10rem;
		width: 100%;
		object-fit: cover;
		object-position: center;
		transition: all ease-in-out var(--animation-quick);
	}

	article:hover a {
		transform: translateX(0.8rem);
	}

	article > div {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
	}

	h2 {
		font-size: 1.4rem;
		font-weight: 700;
		margin-bottom: var(--unit-small);
	}

	p {
		font-size: var(--unit-default);
		font-weight: 400;
		margin-bottom: 0.9rem;
	}

	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: var(--unit-small);
		margin-left: var(--unit-small);
		margin-bottom: 0.8rem;
		text-decoration: underline;
		font-weight: 600;
		font-size: var(--unit-default);
		transition: all ease-in-out var(--animation-quick);
	}

	a:focus {
		outline: solid 2px var(--color-hva-pink);
	}

	a > img {
		height: var(--unit-default);
		width: var(--unit-default);
	}

	ul {
		display: flex;
		align-items: center;
		flex-flow: row wrap;
		list-style: none;
		column-gap: var(--unit-small);
		text-transform: capitalize;
		position: relative;
		transition: all ease-out var(--animation-quick);
		gap: var(--unit-small);
	}

	li {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem var(--unit-small);
		border: solid 2px;
		border-radius: 0;
		font-size: 0.8rem;
		font-weight: 500;
	}
</style>
