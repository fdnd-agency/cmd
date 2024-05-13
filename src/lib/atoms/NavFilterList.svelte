<script>
	export let searchInput;
	export let data;
	import { setTag, selectedTag } from '$lib/utils/tagstore.js';
	import { onMount } from 'svelte';
	let allTags = data.tag;
	let isActive = false;


	// functie om de geklikte tag mee af te handelen
	function handleTagClick(tagID) {
		setTag(tagID);
		isActive = !isActive;
	}	
	onMount(async () => {
		let searcherinput = document.querySelector("#search-werkvormen");
		let focusinput = document.querySelector("#reset-search");
		let buttonviewer = document.querySelectorAll(".button-tags");
		let dropdownviewer = document.querySelectorAll(".sub-select");
		focusinput.style.visibility = "hidden";

		searcherinput.addEventListener("input", () =>{
			if (searcherinput.value){
			focusinput.style.visibility = "visible";
		}
		else{
			focusinput.style.visibility = "hidden";

		}
		})

		for(let i = 0; i < buttonviewer.length; i++){
			buttonviewer[i].addEventListener("click", () =>{
				dropdownviewer[i].classList.toggle("hidden")
			})
		}
		
	});
	function checkColor(){};
</script>

<div class="dropdown" id="mega-menu">
	<form method="get" action="/">
		<fieldset>
			<div class="search-group">
			<input name="q" type="search" id="search-werkvormen" bind:this={searchInput} />
			<label for="search-werkvormen" hidden>Zoek een werkvorm</label>
			<input type="reset" value="x" alt="Clear the search form" id="reset-search">
		</div>
			<button bind:this={searchInput} type="submit">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-search"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
					/><path d="M21 21l-6 -6" /></svg
				>
				Zoeken
			</button>
		</fieldset>
	</form>
	<ul class="header-tags">
		<li class="all-tags"><button
			class:selected-tag={selectedTag === data.tag}
			class:active-tag={$selectedTag === 'allTags'}
			on:click={() => selectedTag.set('allTags')}>Alle tags</button
			>
		</li>
		{#each data.tag as tag}
		<li class="button-grouper">	
				<button
				class:selected-tag={selectedTag === tag.title}
				class:active-tag={$selectedTag === tag.id}
				class="button-tags"
				style="border: 2px solid {tag.color};"
				on:click={() => handleTagClick(tag.id)}
				>
				{tag.title}
				</button>
			<div class="sub-select hidden">
				{#each data.sub_tag as sub}
				{#if tag.sub_tag && tag.sub_tag.includes(sub.id)}
				<label>
					<input type="checkbox" name="check_test">
					<span style="--text-color: {sub.color}">{sub.title}</span>
				</label>
			{/if}
			{/each}
			</div>
		</li>	
		{/each}
	</ul>
</div>

<style>
	.dropdown {
		background-color: var(--color-hva-blue-secundary);
		box-shadow: 8px 8px #1e1649;
		height: fit-content;
		margin: var(--unit-default) 0 0 0;
		padding: var(--unit-small);
		width: 100%;

		/* Enhanced kleur binnen @supports */
		@supports (--css: variables) {
			background-color: var(--color-hva-blue-secundary-enhanced);
		}
	}
	.search-group{
		position: relative;
	}
	/* Zoekbalk */
	form {
		width: 100%;
		height: auto;
		display: block;
		padding: var(--unit-default);
	}

	form fieldset {
		width: fit-content;
		display: flex;
		gap: var(--unit-small);
		border: unset;
		margin: auto;
		align-items: center;
	}

	form input:nth-of-type(1),
	form button {
		padding: var(--unit-micro) var(--unit-small);
		border-radius: var(--unit-micro);
		background-color: var(--color-hva-blue-secundary);

		/* Enhanced kleur binnen @supports */
		@supports (--css: variables) {
			background-color: var(--color-hva-blue-secundary-enhanced);
		}
	}

	form input:nth-of-type(1) {
		width: 50vw;
		height: auto;
		border: 2px solid var(--color-white);
		background-color: #f5f5f512;
		color: var(--color-white);
	}


	form input:nth-of-type(2){
		visibility: visible;
		position: absolute;
		right: 0.2rem;
		top: 0.3rem;
		border: 1px solid grey;
		border-radius: 5em;
		appearance: none;
		padding: 3px;
		color: white;
		background-color: grey;
		width: 1.25em;
    	height: 1.25em;
    	line-height: 0.1rem;
		cursor: pointer;
	}

	form button {
		color: var(--color-white);
		background-color: #593bff;
		font-size: var(--unit-default);
		border: 2px solid transparent;
		position: relative;
		transition: var(--animation-default) ease-in-out;
		display: flex;
		align-items: center;
		gap: var(--unit-small);
	}

	form button:hover {
		background-color: var(--color-hva-pink);

		/* Enhanced kleur binnen @supports */
		@supports (--css: variables) {
			background: var(--color-hva-pink-enhanced);
		}
	}

	form button:focus {
		border: 2px solid var(--color-hva-pink);

		/* Enhanced kleur binnen @supports */
		@supports (--css: variables) {
			border: 2px solid var(--color-hva-pink-enhanced);
		}
	}

	form button::before {
		border-radius: var(--unit-micro);
		content: '';
		height: 100%;
		left: 0;
		mix-blend-mode: color-burn;
		position: absolute;
		top: 0;
		width: 100%;
	}

	/* FILTER */
	.header-tags {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.header-tags button {
		font-size: var(--unit-default);
		background-color: transparent;
		padding: 0.3rem var(--unit-small) 0.3rem var(--unit-small);
		color: var(--color-white);
		margin: var(--unit-small) var(--unit-small);
	}

	.header-tags .active-tag {
		background-color: var(--color-hva-pink);
		transition: 0.3s ease-in-out;
		@supports (--css: variables) {
			background: var(--color-hva-pink-enhanced);
		}
	}

	input[type=search]::-webkit-search-cancel-button {
		display: none;
	}
	
	.button-grouper, .all-tags{
		display: flex;
		flex-flow: column wrap;
		align-content: center;
		justify-content: center;
		position: relative;
	}
	
	.sub-select{
		background-color: var(--color-hva-blue-secundary);
		border-radius: 5px;
		color: white;
		display: flex;
		flex-flow: column wrap;
		position: absolute;
		top: 3em;
		left: 0;
    	right: 0;
    	margin-left: auto;
    	margin-right: auto;
    	width: max-content;
		padding: 10px;
		z-index: 3;
		box-shadow: 8px 8px #1e1649;
		visibility: visible;
	}

	.hidden{
		visibility: hidden;
	}
	.sub-select > label > span{
		border: 2px solid var(--text-color);
		font-family: 'Open Sans', sans-serif;
		padding: 0.2rem var(--unit-small);
	}

	.sub-select > label{
		padding: 5px 0px 5px 0px;
		margin: 5px 0px 5px 0px;
	}

	@media (max-width: 75rem) {

		ul li{
			width: 80%;
		}
		
		ul button{
			width: 100%;
		}

		.sub-select{
			width: auto;
		}
	}
</style>
