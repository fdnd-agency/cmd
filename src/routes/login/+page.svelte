<script lang="ts">
	// import { toast } from 'svelte-sonner';
	import { superForm } from 'sveltekit-superforms/client';
	import { zod } from 'sveltekit-superforms/adapters';

	import {
		MAX_EMAIL_LENGTH,
		MAX_PASSWORD_LENGTH,
		UserLoginZodSchema
	} from '$lib/validations/AuthZodSchemas';

	import InputField from '$lib/atoms/inputfields/SuperValidInput.svelte';
	import SuperValidButton from '$lib/atoms/SuperValidButton.svelte';

	import { route } from '$lib/ROUTES';
	import type { PageData } from './$types';

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

<h1>Login</h1>

<form method="post" use:enhance action={route('logInUser /login')}>
	<InputField
		type="email"
		name="email"
		label="Email"
		bind:value={$form.email}
		errorMessage={$errors.email}
		maxlength={MAX_EMAIL_LENGTH}
	/>

	<InputField
		type="password"
		name="password"
		label="Password"
		bind:value={$form.password}
		errorMessage={$errors.password}
		maxlength={MAX_PASSWORD_LENGTH}
	/>

	<SuperValidButton></SuperValidButton>
</form>