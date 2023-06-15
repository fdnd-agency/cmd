import type { TagFragment, WerkvormFragment } from '$lib/graphql/generated/sdk';
import { derived, get, writable, type Writable } from 'svelte/store';

export const searchterm = writable('');
export const tag: Writable<TagFragment | undefined> = writable();

export const werkvormenStore: Writable<WerkvormFragment[]> = writable([]);

export const filteredWerkvormen = derived(
	[searchterm, tag, werkvormenStore],
	([$searchterm, $tag]) => {
		const werkvormenArr = get(werkvormenStore);
		return werkvormenArr.filter((werkvorm) => {
			const found =
				$searchterm !== ''
					? werkvorm.title.toLowerCase().includes(get(searchterm).toLowerCase())
					: true;

			const tagged =
				$tag && $tag.waarde !== '' ? werkvorm.tags.some((tag) => tag.waarde === $tag.waarde) : true;
			return found && tagged;
		});
	}
);
