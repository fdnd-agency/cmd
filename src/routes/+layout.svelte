<script>
	import Header from '$lib/organisms/Header.svelte';
	import Footer from '$lib/organisms/Footer.svelte';
	import { page } from '$app/stores';
</script>

<!-- Geef de url naam door voor gebruik in de header -->
<Header path={$page.url.pathname} />

<slot />

<Footer />
