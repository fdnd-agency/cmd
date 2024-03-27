<script lang="ts">
	import type { PageData } from './$types';

	import { route } from '$lib/ROUTES';

	import SuperValidButton from '$lib/molecules/SuperValidButton.svelte';

	export let data: PageData;
</script>

<form method="post" action={route('logout /login')}>
    <SuperValidButton>Log uit</SuperValidButton>
</form>