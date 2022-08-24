<script>
	import Button from './..lib/components/Button.svelte';
</script>

<div>
	<Button buttonText="Midterm" />
	<Button buttonText="Curriculum 2022-2024" />
</div>

<style>
	div {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (min-width: 60rem) {
		div {
			width: 20rem;
		}
	}
</style>
