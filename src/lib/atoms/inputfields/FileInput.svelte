<script>
    export let inputType = "text"
    export let inputPlaceholder = ""
    export let inputName = ""
    export let inputId = ""
    export let isRequired = false
    export let accepted = "image/*,video/*"
    export let hasMultiple = false
</script>

<input type="{inputType}" placeholder="{inputPlaceholder}" name="{inputName}" id="{inputId}" required={isRequired} accept={accepted} multiple={hasMultiple}>

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
        outline: var(--btn-focus, var(--color-hva-pink)) solid 2px;
    }
</style>