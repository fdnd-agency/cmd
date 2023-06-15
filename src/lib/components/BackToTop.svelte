<script lang="ts">
	import { scale } from 'svelte/transition';
	import ArrowIcon from '$lib/icons/arrow.svg?component';
	let y: number;
</script>

<svelte:window bind:scrollY={y} />
{#if y >= 80}
	<button
		transition:scale|local
		on:click={() => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}}><ArrowIcon /></button
	>
{/if}

<style>
	button {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		transform: rotate(-90deg);
		background-color: var(--color-navy-blue);
		padding: 1rem;
		border-radius: 50%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border: 1px solid var(--color-navy-blue);
		transition: 100ms background-color ease-out;
	}

	button:hover {
		background-color: transparent;
	}
</style>
