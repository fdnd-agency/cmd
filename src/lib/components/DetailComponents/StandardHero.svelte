<script>
	import * as helpers from '@prismicio/helpers';

	export let standardHeaderTitle;
	export let standardHeaderIntroduction;
</script>

<section>
	<h1>{standardHeaderTitle}</h1>
	{@html helpers.asHTML(standardHeaderIntroduction)}
</section>

<style>
	section {
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
			url('/assets/images/detail-hero-image.jpg');
        background-size: cover;
        background-position: center;
        color: var(--color-white);
        height: 15rem;
		padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
	}

    h1 {
        color: var(--color-cmd-yellow);
    }
</style>
