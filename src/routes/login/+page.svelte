<script>
  export let form; // to get the form returned message
</script>

<form method="POST" action="?/login">
  <div class="form-control w-full max-w-xs">
    <label for="email">
      <span>Email</span>
    </label>
    <input type="email" name="email" />
  </div>
  <div>
    <button> Login </button>
  </div>
  {#if form?.message}
    <span>{form?.message}</span>
  {/if}
</form>
