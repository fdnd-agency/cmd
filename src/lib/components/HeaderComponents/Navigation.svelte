<script>
	let isActive = false;

	function openNavMenu() {
		isActive = !isActive;
	}
</script>

<nav class:active={isActive}>
	<a href="/beoogde-leerresultaten">Beoogde leerresultaten</a>
	<a href="/onderwijsleeromgeving">Onderwijsleeromgeving</a>
	<a href="/toetsing">Toetsing</a>
	<a href="/gerealiseerde-leerresultaten">Gerealiseerde toetsresultaten</a>
</nav>
<button on:click={openNavMenu} class:active={isActive}>
	<span />
	<span />
	<span />
</button>

<style>
	nav {
		display: none;
	}

	nav a {
		position: relative;
		color: var(--color-black);
	}

	nav a::before {
		content: '';
		position: absolute;
		bottom: -0.3rem;
		right: 0;
		width: 0;
		height: 2px;
		background-color: var(--color-black);
		transition: width 1s cubic-bezier(0.25, 1, 0.5, 1);
		display: none;
	}

	nav a:hover::before {
		left: 0;
		right: auto;
		width: 100%;
	}

	nav.active {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.3rem;
		font-weight: bold;
		gap: 0.8rem;
		inset: 0;
		width: 100%;
		height: 100vh;
		background-color: var(--color-cmd-yellow);
		overflow: hidden;
	}

	nav.active a {
		background-color: var(--color-cmd-yellow);
		filter: brightness(85%);
		width: 85%;
		padding: 0.5rem;
	}

	button {
		all: unset;
		display: block;
		position: relative;
		z-index: 1;
		cursor: pointer;
	}

	button span {
		display: block;
		width: 2rem;
		height: 0.2rem;
		margin-bottom: 5px;
		position: relative;
		background-color: var(--color-black);
		border-radius: 6px;
		transform-origin: 0 0;
		transition: 0.4s;
	}

	button span:last-child {
		margin: 0;
	}

	button.active span:nth-child(1) {
		transform: translate(0px, -2px) rotate(45deg);
	}

	button.active span:nth-child(2) {
		opacity: 0;
		transform: translateX(15px);
	}

	button.active span:nth-child(3) {
		transform: translate(-3px, 3px) rotate(-45deg);
	}

	@media (min-width: 60rem) {
		nav {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 1rem;
		}

		button {
			display: none;
		}

		nav a::before {
			display: block;
		}
	}
</style>
