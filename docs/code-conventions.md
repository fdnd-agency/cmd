# Code conventies

## Inhoudsopgave
* Inleiding
* HTML
* CSS
* Javascript
* VS code
 
## Inleiding
Om het samenwerken makkelijker te maken, gebruiken we code conventies. Zo komt onze code goed overeen.
 
## Tech-stack
Voor dit project maken we gebruik van het framework SvelteKit en het headless CMS Hygraph. We kiezen hiervoor omdat onze opdrachtgever deze techstack wilt en omdat wij als studenten zijn begonnen met deze techstack.
 
## HTML
In HTML schrijven we in semantische html om zo de toegankelijkheid. Zo vermijden het gebruik van `<div>` en weten screenreaders wat ze moeten voorlezen.
 
```html
<main>
	<Nav {data} />
	<NavFilterList {data} {filteredWerkvormen} {searchInput} {searchWerkvormen} />

	<!-- <LoginOutButton /> -->

	<section class="werkvormen" id="custom-view">
		{#each filteredWerkvormen as workform}
			<WerkvormCard {workform} {data} />
		{/each}
	</section>
</main>
```
 
Voorbeelden van semantische html zijn: header, aside, main, footer, details, section etc.
 
### Prettier
Om het inspringen van HTML zo netjes mogelijk te maken, gebruiken we de extensie Prettier. Elk teamlid heeft deze extensie. Verder gebruiken we ook een plugin van Prettier die ervoor zorgt dat de CSS gesorteerd wordt.

[Plugin for CSS Ordering](https://github.com/Siilwyn/prettier-plugin-css-order)
 
## CSS
In CSS hanteren we de meeste conventies. Omdat SvelteKit de mogelijkheid biedt om in de componenten scoped css te stoppen, proberen we zoveel mogelijk de selector aan te spreken. Als het niet anders kan, schrijven we een duidelijke naam. Bijvoorbeeld:
 
```css
header nav ul li {
    ...
}
 
#customView {
    ...
}
 
.grid-overview {
    ...
}
```
 
### Custom properties
We maken gebruik van custom properties voor onder meer: Animatie, Kleur, Eenheden en eventueel schaduw. De custom properties schrijven we als volgt:
 
**--unit-default**: **waarde**;
 
## Javascript
 
In Javascript maken we gebruik van camelCasing. Zo schrijven we de naam aan elkaar en is het eerste woord met een kleine letter en het tweede woord met een hoofdletter. Omdat we de theorie van Progressive Enhancement willen aanhouden bouwen we zoveel mogelijk functionaliteit in HTML en CSS.
 
De volgorde in javascript die we hanteren is: 
* Het importeren en definiëren van objecten d.m.v. variabelen
* Het event aangeven (aanklikken, hoveren)
* Functies aangeven

## VS Code
We hanteren de volgende regels in het algemeen voor het coderen in VS Code:
 
- Tabbing spacing staat op 4 spaces
- Gebruik maken van semi-colons is optioneel, maar wel per bestand. Maak een keuze in gebruik semi-colons per bestand.
- Comments schrijven bij nieuwe stukjes code. Bij functies: beschrijf wat de functie doet in 1 line en schrijf regelmatig comments als er iets wordt toegevoegd aan de functie. Bij nieuwe section html: Beschrijf wat de section inhoud, kort en bondig.

# Integreren
Alle commits die via Github Desktop worden gepushed, worden door middel van een emoji verduidelijkt. We hanteren het Gitmoji systeem die op een overzicht duidelijk weergeeft wat de commit inhoud. Zo houden we binnen het team een consistente lijn aan.

[Bekijk de site van Gitmoji](https://gitmoji.dev/)

De website wordt gehost met Vercel. Verder maken wij gebruik van commits om functies toe te voegen aan de codebase en mergen wij branches als er een nieuwe functie klaar is voor productie. 

Ontwikkelaars die code gereed hebben maken een pull request aan die door een ander teamlead word gecontroleerd en gemerged.

Mergen wordt samen gedaan en wordt gereviewed door 2 personen.

# Testen
Om de website te testen maken wij gebruik van een usertest die wij op verschillende devices uitvoeren. (Lees: Desktop, Tablet & Mobile). Ook testen we op verschillende browsers. (Firefox, chrome, safari) Verder hebben wij tijdens een meeting met de opdrachtgever ook een testsessie waar de opdrachtgever de website kan testen en feedback kan geven.
