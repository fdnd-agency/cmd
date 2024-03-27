<script lang="ts">
	import Button from '$lib/molecules/specialButton/button.svelte';

	export let disabled: boolean = false;
	export let formaction: string | null = null;
	export let showSpinner: boolean | null = null;
	export let className: string = '';
</script>

<Button
	{disabled}
	{formaction}
	type="submit"
	aria-disabled={disabled}
	class={className}
>
	{#if showSpinner === null ? disabled : showSpinner}
		<iconify-icon icon="eos-icons:bubble-loading"></iconify-icon>
	{/if}

	<span>
		<slot>Submit</slot>
	</span>
</Button>

