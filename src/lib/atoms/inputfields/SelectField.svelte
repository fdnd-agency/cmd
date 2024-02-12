<script>
	export let selectName;
	export let selectId;
	export let selectPlaceholder;
	export let options;
    export let isRequired;
</script>

<select name={selectName} id={selectId} required={isRequired}>
    <option value="" disabled>{selectPlaceholder}</option>
    {#each options as option}
        <option value={option.id}>{option.title}</option>
    {/each}
</select>

<style>
	select {
		border: solid 2px var(--border-color, #fff);
		padding: var(--unit-small) 0.8rem;
		background-color: var(--input-bg, var(--color-hva-navy));
		color: var(--input-color, #fff);
	}

	select::placeholder {
		color: rgba(255, 255, 255, 0.4);
		font-style: italic;
	}

	select:focus {
		outline: var(--btn-focus, var(--color-hva-pink)) solid 2px;
	}

	@media (min-width: 170rem) {
        select, select::placeholder{
            font-size: 130%;
            height: 150%;
        }
    }
</style>
