<script>
	export let navigationLink;
	let isActive = false;

	function showMenu() {
		isActive = !isActive;
	}
</script>

<div>
	<span on:click={showMenu}>
		Inhoudsopgave
		{#if isActive} 
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<rect x="4" y="4" width="16" height="16" rx="2" />
				<path d="M10 10l4 4m0 -4l-4 4" />
			</svg> 
		{/if}
	</span>
	<nav class:active={!isActive}>
		<ul>
			<slot />
		</ul>
	</nav>
</div>

<style>
	div {
		background-color: var(--color-cmd-yellow);
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		text-align: left;
		padding: .5rem;
		box-shadow:0 0 3px rgba(0,0,0,.15);
		display:flex;
		flex-direction:column;
		max-width:20em;
		z-index:10
	}

	span {
		font-size: .8rem;
		font-weight: bold;
		cursor: pointer;
		padding:0 .25rem
	}

	svg {
		position:absolute;
		right:.5rem;
		top:.5rem;
		stroke: var(--color-black);
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	nav.active {
		display: none;
	}

	ul {
		display:flex;
		flex-direction: column;
		margin-top: .25rem;
	}

</style>
