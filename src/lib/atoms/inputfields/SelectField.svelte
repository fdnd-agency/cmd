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
<span></span>

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
		outline: var(--btn-focus, var(--color-hva-pink)) dashed 2px;
	}

    select:user-invalid {
        border: 2px solid red;
        animation: shake 0.2s ease-in-out 0s 2;   
    }

    select::before{
        content: " ";
    }
    
    select:user-invalid + span::before {
        content: "✖";
        color: red;
    }

    @media (min-width: 170rem) {
        select, select::placeholder{
            font-size: var(--input-font-large);
            height: var(--input-height-large);
        }
    }

    @keyframes shake {
        0% { margin-left: 0rem; }
        25% { margin-left: 0.5rem; }
        75% { margin-right: -0.5rem; }
        100% { margin-left: 0rem; }
    }

	@media (prefers-reduced-motion) {
		select:user-invalid {
        animation: none;
    }
    }
</style>
