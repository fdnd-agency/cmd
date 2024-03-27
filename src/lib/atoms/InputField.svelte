<script>
    export let inputType
    export let inputPlaceholder
    export let inputName
    export let inputId
</script>

<input type="{inputType}" placeholder="{inputPlaceholder}" name="{inputName}" id="{inputId}">

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
        outline: var(--btn-focus, var(--color-hva-pink)) dashed 2px; 
    }


</style>