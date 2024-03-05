<script lang="ts">

	// import { toast } from 'svelte-sonner';
	import { superForm } from 'sveltekit-superforms/client';
	import { zod } from 'sveltekit-superforms/adapters';

	import { route } from '$lib/ROUTES';
	import {
		MAX_EMAIL_LENGTH,
		MAX_NAME_LENGTH,
		MAX_PASSWORD_LENGTH,
		RegisterUserZodSchema
	} from '$lib/validations/AuthZodSchemas';

	import InputField from '$lib/atoms/inputfields/SuperValidInput.svelte';
	import SuperValidButton from '$lib/atoms/SuperValidButton.svelte';

	export let data;

	const { enhance, errors, form, message } = superForm(data.registerUserFormData, {
		resetForm: true,
		taintedMessage: null,
		validators: zod(RegisterUserZodSchema)

		// onUpdated: () => {
		// 	if (!$message) return;

		// 	const { alertType, alertText } = $message;

		// 	if (alertType === 'success') {
		// 		toast.success(alertText);
		// 	}

		// 	if (alertType === 'error') {
		// 		toast.error(alertText);
		// 	}
		// }
	});
</script>

<h1 class="mb-6 text-2xl font-bold leading-none">Register</h1>

<form method="post" use:enhance class="space-y-4" action={route('registerUser /register')}>
	<InputField
		type="text"
		name="name"
		label="Name"
		bind:value={$form.name}
		errorMessage={$errors.name}
		maxlength={MAX_NAME_LENGTH}
	/>

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