<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	// import { cn } from '$lib/utils/styleTransitionUtils';
	import {type Props, type Events } from '.';
	import Icon from '$lib/atoms/Icon.svelte'
	
	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;

	export let builders: $$Props['builders'] = [];
	export { className as class };
</script>	

<div class="submit-button">
	<div class="icon-box">
		<Icon iconSrc="/images/icons/arrow-right.svg" --icon-width="1.4rem"></Icon>
	</div>
	<ButtonPrimitive.Root
	{builders}
	class={className}
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>
</div>

<style>
	.submit-button {
		display: flex;
		align-items: center;
		position: relative;
		padding-left: var(--unit-default);
		margin-top: var(--unit-large)
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
			background: var(--color-hva-yellow-contrast);
		}
	}

	.icon-box > img {
		width: var(--unit-default);
		height: var(--unit-default);
		transform: rotate(-45deg);
	}


	.submit-button:has(button:hover) .icon-box {
		transform: scale(1.5);
	}

	@media (min-width: 170rem) {
		.icon-box > img{
			width: 2rem;
			height: 2rem;
		}
    }
</style>


