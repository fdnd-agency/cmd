<script>
	export let btnType;
	export let btnText;
</script>

<div class="submit-button">
	<div class="icon-box">
		<img src="/images/icons/arrow-right.svg" alt="" />
	</div>
	<button type={btnType}>{btnText}</button>
</div>

<style>
	.submit-button {
		display: flex;
		align-items: center;
		position: relative;
		padding-left: var(--unit-default);
	}

	.icon-box {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 0rem;
		padding: var(--unit-small);
		aspect-ratio: 1/1;
		transform: rotate(45deg);
		transition: transform var(--animation-quick) ease-in-out;

		/* Enhanced kleur binnen @supports */
		@supports (--css: variables) {
			background: var(--color-hva-pink-enhanced);
		}
	}

	.icon-box > img {
		width: var(--unit-default);
		height: var(--unit-default);
		transform: rotate(-45deg);
	}

	button {
		padding: 0.9rem 1.8rem 0.9rem 2.3rem;
		border: none;
		background-color: var(--btn-color, #1e1649);
		color: var(--color-white, #ffffff);
		font-size: 0.9rem;
		font-weight: 600;
		font-family: 'Open Sans', sans-serif;
		cursor: pointer;
	}

	button:hover {
		background-color: var(--btn-hover-bg, #362e61);
	}

	.submit-button:has(button:hover) .icon-box {
		transform: scale(1.5);
	}

	button:focus {
		outline: var(--btn-focus, #f25379) solid 2px;
	}
</style>
