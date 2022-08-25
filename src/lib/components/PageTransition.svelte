<script>
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: -5, duration: 250, delay: 100 }} out:fly={{ y: -5, duration: 250 }}>
	<slot />
</div>
