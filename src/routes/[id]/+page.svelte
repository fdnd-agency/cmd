<script>
	import FullScreenButton from '$lib/molecules/FullScreenButton.svelte';

	export let data;
	let workform = data.workform[0];
</script>

<svelte:head>
	<title>{workform.title} · Platform Grote Thema's</title>
</svelte:head>

<main>
	<section>
		<div class="upload-button">
			<div class="icon-box">
				<img src="/images/icons/upload.svg" alt="Upload icon" />
			</div>
			<a href="/upload"
				>Ben jij docent en wil je zelf een werkvorm uploaden? Klik dan hier om je aan te melden.</a
			>
		</div>

		<header>
			<h1>{workform.title}</h1>
			{#if workform.shortDescription}
				<p>{workform.shortDescription}</p>
			{:else}
				<p>Geen beschrijving beschikbaar.</p>
			{/if}
		</header>

		<!-- svelte-ignore a11y-media-has-caption -->
		<!-- Check if a video is available, else display the thumbnail. -->
		{#if workform.video == null}
			<img
				class="thumbnail"
				src={'https://platform-big-themes.directus.app/assets/' + workform.thumbnail.id}
				alt="Thumbnail"
			/>
		{:else}
			<video
				controls
				poster={'https://platform-big-themes.directus.app/assets/' + workform.thumbnail.id}
                width="480" height="480"
			>
				<source
					src={'https://platform-big-themes.directus.app/assets/' + workform.video.id}
					type="video/mp4"
                    loading="lazy"
				/>

			</video>
		{/if}

		<article class="content">
			<div class="description">
				<h2>Beschrijving</h2>
				<p>{workform.description}</p>
			</div>
			<div class="faculty">
				<h3>Faculteit/Opleiding</h3>
				{#if workform.course}
					<p>{workform.course.faculty} - {workform.course.title}</p>
				{:else}
					<p>Geen faculteit/opleiding beschikbaar.</p>
				{/if}
			</div>
			<div class="contactperson">
				<h3>Contactpersoon</h3>
				{#if workform.contact}
					<a class="mail-to-link" href="mailto:{workform.contact.email}">
						<p>{workform.contact.email}</p>
					</a>
				{:else}
					<p>Geen contactpersoon beschikbaar.</p>
				{/if}
			</div>

			<div class="tags">
				<h2>Tags</h2>
				<div class="tag-list">
					{#if workform.tags.length > 0}
						{#each workform.tags as tag}
							<div class="single-tag" style="border-color: {tag.tag_id.color};">
								<p>{tag.tag_id.title}</p>
							</div>
						{/each}
					{:else}
						<p class="single-tag">Geen tags beschikbaar.</p>
					{/if}
				</div>
			</div>

			<div>
				<div class="action-buttons">
					<div class="action-button">
						<div class="icon-box">
							<svg
								width="22"
								height="23"
								viewBox="0 0 22 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0.862464 12.2897C0.269712 11.711 0.25835 10.7613 0.837086 10.1685L10.2681 0.50906C10.8469 -0.0836926 11.7966 -0.0950548 12.3893 0.483682C12.9821 1.06242 12.9934 2.0121 12.4147 2.60485L5.51348 9.6732L19.9823 9.50009C20.8106 9.49018 21.4902 10.1537 21.5001 10.982C21.51 11.8104 20.8465 12.49 20.0181 12.4999L5.54937 12.673L12.6177 19.5742C13.2105 20.1529 13.2218 21.1026 12.6431 21.6954C12.0644 22.2881 11.1147 22.2995 10.5219 21.7207L0.862464 12.2897Z"
									fill="white"
								/>
							</svg>
						</div>
						<a href="/">Terug naar overzicht</a>
					</div>
				</div>
			</div>
		</article>
	</section>
</main>

<FullScreenButton />

<style>
	* {
		color: white;
		margin: 0;
	}

	main {
		display: flex;
		flex-direction: column;
		padding: 0 var(--unit-default) 8rem;
	}

	section {
        width: fit-content;
        margin: var(--unit-default) auto;
		gap: var(--unit-large);
	}

	.workform-visual {
		width: 100%;
		height: auto;
		aspect-ratio: 1/1;
		transform: rotate(0deg);
	}

	.upload-button,
	.action-button {
		display: flex;
		align-items: center;
		position: relative;
		margin: 0;
		max-width: 27rem;
	}

	.icon-box {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 0rem;
		background: var(--color-hva-pink);
		/* Enhanced kleur binnen @supports */
		@supports (--css: variables) {
			background: var(--color-hva-pink-enhanced);
		}
		padding: var(--unit-small);
		aspect-ratio: 1/1;
		transform: rotate(45deg);
		transition: transform var(--animation-quick) ease-in-out;
	}

	.icon-box > svg,
	img {
		width: var(--unit-default);
		height: var(--unit-default);
		aspect-ratio: 1/1;
		transform: rotate(-45deg);
	}

	a {
		padding: 0.9rem 1.8rem 0.9rem 3rem;
		border: none;
		background-color: unset;
		color: var(--color-white);
		font-size: 0.9rem;
		font-weight: 600;
		font-family: 'Open Sans', sans-serif;
		cursor: pointer;
	}

	a.mail-to-link {
		padding: 0;
	}

	a:hover {
		background-color: unset;
	}

	a.mail-to-link:hover {
		opacity: 0.7;
	}

	header {
		display: flex;
		flex-direction: column;
		gap: var(--unit-small);
	}

	header h1 {
		font-size: 1.4rem;
		font-weight: 700;
	}

	header p {
		font-size: var(--unit-default);
		font-weight: 400;
	}

	video {
		width: 100%;
		border-radius: 5px;
		max-width: 28rem;
        grid-area: videoplayer;
	}

	img {
		width: 100%;
		border-radius: 5px;
		max-width: 28rem;
	}

	.thumbnail {
		width: 100%;
		height: initial;
		aspect-ratio: initial;
		transform: initial;
	}

	/* Layout content werkvorm */
	article.content {
		display: grid;
		grid-template:"a" 1fr;
        gap: var(--unit-default);
	}

	article.content {
		margin-bottom: var(--unit-default);
        grid-template-areas:"a"
                            "b"
                            "c"
                            "d";
	}

	/* Grid area definitie */
	.description {
		grid-area: a;
	}

    .faculty {
        grid-area: b;
    }

    .contactperson {
        grid-area: c;
    }

    .tags {
        grid-area: d;
    }

    .description h2 {
		font-size: 1.3rem;
	}

	.tag-list {
		display: flex;
		align-items: center;
		flex-flow: row wrap;
		list-style: none;
		column-gap: var(--unit-small);
		text-transform: capitalize;
		position: relative;
		transition: all ease-out var(--animation-quick);
		gap: var(--unit-small);
		margin-top: 0.5rem;
	}

	.single-tag {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem var(--unit-small);
		border: solid 2px;
		border-radius: 0;
		font-size: 0.8rem;
		font-weight: 500;
	}

	@media (min-width: 700px) {
		main {
			padding: 0 3rem 8rem;
		}

        article.content {
            grid-template-areas:"a c"
                                "b d";
        }
	}

	@media (min-width: 1024px) {
        header {
            grid-area: werkvorm-title;
        }

        header h1 {
			font-size: 1.8rem;
		}

		video {
			max-width: 40rem;
		}

        section {
            display: grid;
            grid-template-areas:
            "werkvorm-title uploadbutton"
            "videoplayer werkvorm-content";
            grid-auto-columns: 3fr 2fr;
            margin: 0 auto;
            gap: 1.5rem;
        }

		article.content {
			grid-template:
                "a"
                "b"
                "c"
                "d"
            ;
            grid-area: werkvorm-content;
		}

		.description {
			max-width: 35rem;
		}

        .upload-button {
            grid-area: uploadbutton;
        }
	}
</style>
