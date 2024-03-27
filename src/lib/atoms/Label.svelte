<script>
    export let labelFor
    export let labelText
</script>

<label for="{labelFor}">{labelText}</label>

<style>
    label {
        font-size: var(--unit-default);
        font-weight: 600;
        color: var(--label-color, #ffffff);
    }

    @media (min-width: 170rem) {
        label{
            font-size: 200%;
        }
    }
</style>