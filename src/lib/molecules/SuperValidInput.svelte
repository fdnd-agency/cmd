<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import Icon from '$lib/atoms/Icon.svelte'

	import type { EnterKeyHintType } from '$lib/types';
	// import { cn } from '$lib/utils/styleTransitionUtils';

	let className: HTMLInputAttributes['class'] = undefined;
	export { className as class };
	export let type: HTMLInputAttributes['type'];
	export let value: string | null | undefined = '';
	export let name: string = '';
	export let label: string = '';
	export let placeholder: string = '';
	export let spellcheck: boolean = true;
	export let autocomplete: string = 'on';
	export let enterkeyhint: EnterKeyHintType = 'next';
	export let maxlength: number | undefined = undefined;
	export let errorMessage: object | undefined = undefined;
	export let inputid: string = '';
	export let iconSrc: string = '';

	$: valueLength = value?.length;
</script>

	<div class="label-container">
	<Icon {iconSrc} --icon-width="1.4rem"></Icon>

	<div>
		<label for={inputid}>{label}</label>

		{#if maxlength}
			<span>
				{valueLength}/{maxlength}
			</span>
		{/if}
	</div>
</div>
	{#if errorMessage}
		<p>{errorMessage}</p>
	{/if}

	<input
		{name}
		{...{ type }}
		dir="auto"
		bind:value
		{maxlength}
		{spellcheck}
		{placeholder}
		{autocomplete}
		{enterkeyhint}
		id={inputid}
		aria-label={label}
		class={className}
		aria-invalid={errorMessage ? 'true' : undefined}
		{...$$restProps}
	/>

<style>
	    input{
        border: solid 2px var(--border-color, #fff);
        padding: var(--unit-small) 0.8rem;
        background-color: var(--input-bg, var(--color-hva-navy));
        color: var(--input-color, #fff);
		margin-bottom: 0.3rem;

    }

    input::placeholder {
        color: rgba(255, 255, 255, 0.4);
        font-style: italic;
    }

    input:focus {
        outline: var(--btn-focus, var(--color-hva-pink)) dashed 2px; 
    }

	.label-container{
		display: flex;
		flex-flow: row wrap;
		align-items: center;
    	column-gap: 0.3rem;
    	margin-bottom: 0.3rem;
		
	}


</style>