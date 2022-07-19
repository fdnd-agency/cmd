<div>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem 1rem;
	}

	@media (min-width: 60rem) {
		div {
			flex-direction: row;
			padding: 3rem 5rem;
		}
	}
</style>
