<script>
    export let linkHref
    export let linkText
</script>

<div class="submit-button">
    <div class="icon-box">
        <img src="/images/icons/arrow-right.svg" alt="">
    </div>
    <a href={linkHref}>{linkText}</a>
</div>

<style>
    .submit-button {
        display: flex;
        align-items: center;
        position: relative;
        padding-left: var(--unit-default);
        margin-top: var(--unit-large);
    }

    .icon-box {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0rem;
        background: var(--color-hva-pink, #F25379);
        padding: var(--unit-small);
        aspect-ratio: 1/1;
        transform: rotate(45deg);
        transition: transform var(--animation-quick) ease-in-out;
    }

    .icon-box > img {
        width: var(--unit-default);
        height: var(--unit-default);
        transform: rotate(-45deg);
    }

    a {
        padding: 0.9rem 1.8rem 0.9rem 2.3rem;
        border: none;
        background-color: var(--btn-color, #1E1649);
        color: var(--color-white, #ffffff);
        font-size: 0.9rem;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        cursor: pointer;
    }

    a:hover{
        background-color: var(--btn-hover-bg, #362e61);
    }

    .submit-button:has(a:hover) .icon-box {
        transform: scale(1.5);
    }

    a:focus {
        outline: var(--btn-focus, #F25379) solid 2px;
    }
</style>