<script lang="ts">
  // import { toast } from 'svelte-sonner';
  import { superForm } from "sveltekit-superforms/client";
  import { zod } from "sveltekit-superforms/adapters";

  import {
    MAX_EMAIL_LENGTH,
    MAX_PASSWORD_LENGTH,
    UserLoginZodSchema,
  } from "$lib/validations/AuthZodSchemas";

  import InputField from "$lib/molecules/SuperValidInput.svelte";
  import SuperValidButton from "$lib/molecules/SuperValidButton.svelte";
  import LinkButton from "$lib/atoms/LinkButton.svelte";

  import { route } from "$lib/ROUTES";
  import type { PageData } from "./$types";

  export let data: PageData;

  const { enhance, form, errors, message } = superForm(data.userLoginFormData, {
    resetForm: true,
    taintedMessage: null,
    validators: zod(UserLoginZodSchema),

    // onUpdated: () => {
    // 	if (!$message) return;

    // 	const { alertType, alertText } = $message;

    // 	if (alertType === 'error') {
    // 		toast.error(alertText);
    // 	}
    // }
  });
</script>

<main>


  <form method="post" use:enhance action={route("logInUser /login")}>
	<section>
		<h1>Login</h1>
    <InputField
      type="email"
      name="email"
      label="Email"
      bind:value={$form.email}
      errorMessage={$errors.email}
      maxlength={MAX_EMAIL_LENGTH}
	  inputid="emailId"
	  iconSrc="/images/icons/email.svg"
    />

    <InputField
      type="password"
      name="password"
      label="Password"
      bind:value={$form.password}
      errorMessage={$errors.password}
      maxlength={MAX_PASSWORD_LENGTH}
	  inputid="passwordId"
	  iconSrc="/images/icons/password.svg"
    />
</section>

<div class="button-grouper">
	<LinkButton
	linkHref="/register"
    linkText="Registreer"
	></LinkButton>
	<SuperValidButton
	>Login</SuperValidButton>
</div>

  </form>

</main>

<style>

	.button-grouper{
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}
	main{
		display: flex;
		justify-content: center;
		align-content: center;
	}
  section {
    display: flex;
    flex-direction: column;
    padding: var(--unit-large);
    background: var(--form-bg, #1e1649);
    row-gap: 0.3rem;
    width: 20em;
	
  }

</style>
