<script>
    export let inputType = "text"
    export let inputPlaceholder = "placeholder"
    export let inputName = ""
    export let inputId = ""
    export let isRequired = false
    export let maxLength
</script>

<input type="{inputType}" placeholder="{inputPlaceholder}" name="{inputName}" id="{inputId}" required={isRequired || false} maxlength={maxLength || ''}>

<style>
    input{
        border: solid 2px var(--border-color, #fff);
        padding: var(--unit-small) 0.8rem;
        background-color: var(--input-bg, var(--color-hva-navy));
        color: var(--input-color, #fff);
    }

    input::placeholder {
        color: rgba(255, 255, 255, 0.4);
        font-style: italic;
    }

    input:focus {
        outline: var(--btn-focus, --color-hva-pink) solid 2px;
    }

    @media (min-width: 170rem) {
        input, input::placeholder{
            font-size: 130%;
            height: 150%;
        }
    }
</style>