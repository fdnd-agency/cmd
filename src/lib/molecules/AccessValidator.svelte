<script>
    import { listValidatorClass } from '$lib/utils/tagstore.js';

    export let newValidator
    export let validatorHidden

</script>
<ul class:validator-hidden={validatorHidden} class="validator">
    {#each newValidator as newValidators}
      <li>{newValidators}</li>
    {/each}
  </ul>

  <style>
      .validator-hidden {
    display: none;
  }
  .validator {
    row-gap: var(--unit-small);
    padding: var(--unit-large) var(--unit-large);
    background: var(--color-hva-navy);
    height: 30vh;
  }
  </style>