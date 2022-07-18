<script>
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: -5, duration: 500, delay: 500 }} out:fly={{ y: -5, duration: 500 }}>
	<slot />
</div>
