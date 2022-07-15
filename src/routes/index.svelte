<script>
	import * as helpers from '@prismicio/helpers';
	export let page;
	export let standards;
	console.log(page);
</script>

<main>
	<section>
		<!-- <h2>{page.data?.title}</h2> -->
		<h2>{page.data.title}</h2>
		{@html helpers.asHTML(page.data?.introduction)}
	</section>
</main>
