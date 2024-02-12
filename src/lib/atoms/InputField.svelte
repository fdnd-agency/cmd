<script>
    export let inputType
    export let inputPlaceholder
    export let inputName
    export let inputId
</script>

<input type="{inputType}" placeholder="{inputPlaceholder}" name="{inputName}" id="{inputId}">

<style>
    input{
        border: solid 2px var(--border-color, #ffffff);
        padding: var(--unit-small) 0.8rem;
        background-color: var(--input-bg, #1E1649);
        color: var(--input-color, #ffffff);
        font-size: 200%;

    }

    input::placeholder {
        color: rgba(255, 255, 255, 0.4);
        font-style: italic;
    }

    input:focus {
        outline: var(--btn-focus, #F25379) solid 2px;
    }

    @media (min-width: 170rem) {
        input, input::placeholder{
            font-size: 200%;
        }
    }
</style>