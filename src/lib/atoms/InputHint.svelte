<script>
    export let inputHint = ""
</script>

<p>{inputHint}</p>

<style>
    p {
        font-size: 0.8rem;
        font-weight: 400;
        font-style: italic;
        color: var(--input-hint-color, #ffffff);
        margin-top: 0.2rem;
    }
    @media (min-width: 170rem) {
        p{
            font-size: 200%;
            max-width: 100%;
        }
    }
</style>