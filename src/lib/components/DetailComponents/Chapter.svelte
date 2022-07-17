<script>
	import * as helpers from '@prismicio/helpers';

	export let chapterTitle;
	export let chapterContentLeft;
	export let chapterContentRight;
</script>

<h2>{chapterTitle}</h2>
{@html helpers.asHTML(chapterContentLeft)}
{@html helpers.asHTML(chapterContentRight)}
