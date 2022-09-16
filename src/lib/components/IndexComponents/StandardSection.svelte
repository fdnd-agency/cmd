<div>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem 3rem;
	}

	@media (min-width: 45rem) {
		div {
			display:grid;
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
