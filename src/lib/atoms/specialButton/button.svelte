<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	// import { cn } from '$lib/utils/styleTransitionUtils';
	import {type Props, type Events } from '.';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;

	export let builders: $$Props['builders'] = [];
	export { className as class };
</script>

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