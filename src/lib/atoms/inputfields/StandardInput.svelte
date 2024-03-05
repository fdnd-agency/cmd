<script>
    
    export let inputType = "text"
    export let inputPlaceholder = "placeholder"
    export let inputName = ""
    export let inputId = ""
    export let isRequired = false


</script>

<input type="{inputType}" placeholder="{inputPlaceholder}" name="{inputName}" id="{inputId}" required={isRequired || false}>
<span></span>

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

    input:user-invalid {
        border: 2px solid red;
        animation: shake 0.2s ease-in-out 0s 2;
    }

    span::before{
        content: " ";
    }
    
    input:user-invalid + span::before {
        content: "✖";
        color: red;
    }

    @media (min-width: 170rem) {
        input, input::placeholder{
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
		input:user-invalid {
        animation: none;
    }
    }
</style>