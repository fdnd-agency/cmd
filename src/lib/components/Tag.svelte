<script lang="ts">
	export let link: string;
	export let title: string;
	export let color: string;
</script>

<a href={link} style={`border-color: ${color}; --hover-color: ${color}`}><span>{title}</span></a>

<style>
	a {
		border: 2px solid;
		font-weight: 700;
		padding: 0.25rem 1rem;
		transition: 100ms background-color ease-out;
	}

	:hover {
		background-color: var(--hover-color);
	}
</style>
