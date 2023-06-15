<script lang="ts">
	let content: HTMLElement;
	let collapsed = true;

	export let title: string;

	function toggleCollapsable() {
		collapsed = !collapsed;
	}
</script>

<button on:click={toggleCollapsable}>
	<span class:toggle={collapsed} />
	{title}
</button>
<div class="content {!collapsed && 'open'}" style="--mh: {content?.clientHeight}px">
	<nav bind:this={content}>
		<slot />
	</nav>
</div>

<style>
	.content.open {
		max-height: var(--mh);
	}

	.content {
		max-height: 0vh;
		overflow: hidden;
		transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		position: relative;
	}

	span {
		width: 20px;
		height: 3px;
		background: var(--color-white);
		position: relative;
		transition: 0.25s transform cubic-bezier(0.16, 1, 0.3, 1);
	}

	span::after {
		content: '';
		width: 20px;
		transition: 0.25s transform cubic-bezier(0.16, 1, 0.3, 1);
		transition-delay: 0.1s;
		height: 3px;
		position: absolute;
		transform: rotate(0deg);
		background: var(--color-white);
		left: 0;
	}

	span.toggle::after {
		opacity: 1;
		transform: rotate(90deg);
	}

	button {
		cursor: pointer;
		display: flex;
		color: var(--white);
		border: none;
		padding: 0;
		margin: 0;
		font-weight: bold;
		width: 100%;
		background-color: var(--color-navy-blue);
		padding: 1.5rem;
		font-size: 1rem;

		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		align-items: center;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background-color: var(--color-navy-blue);
		padding: 0 1.5rem 1.5rem;
	}
</style>
