<script lang="ts">
	import type { PageData } from './$types';

	import { route } from '$lib/ROUTES';

	import SuperValidButton from '$lib/atoms/SuperValidButton.svelte';

	export let data: PageData;
</script>

<form method="post" action={route('logout /login')}>
    <SuperValidButton>Logout</SuperValidButton>
</form>