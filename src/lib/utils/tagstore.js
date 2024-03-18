// tagstore.js
import { writable } from 'svelte/store';

// default tag
const initialTag = 'allTags';

// default tag opgeslagen in selectedtag
export const selectedTag = writable(initialTag);

// functie om de tag aan te passen
export const setTag = (tag) => {
	selectedTag.set(tag);
};

// check of het werkt.
selectedTag.subscribe((value) => {
	console.log('Selected Tag:', value);
});


export const listValidatorClass = writable('validator-hidden');

listValidatorClass.subscribe((value) => {
	console.log('Selected class:', value);
});
