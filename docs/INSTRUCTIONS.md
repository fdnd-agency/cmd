
# Back to Static - Static Site Generation

Ontwikkel een statisch gegenereerde website voor een opdrachtgever.

## Context

Deze leertaak hoort bij sprint 17 Back to Static. Dit is een leertaak die je in een team uitvoert.

Bij de sprintplanning krijg je uitleg over hoe je statische web pagina's kan genereren met SvelteKit en wordt de opdracht uitgelegd.

Bij deze leertaak hoort voor elk teamlid 3x de deeltaak:
- [Creative coding](https://github.com/fdnd-task/back-to-static-creative-coding)

## Doel van deze opdracht

Je leert wat Static Site generation is, wat de voor- en nadelen zijn en hoe je dit kunt toepassen.

## Werkwijze

Deze opdracht gaat over de DLC fases **Analyseren**, **Bouwen** en **Integreren** 

### Analyseren

Onderzoek en bespreek binnen jouw team welke wijze van deployment voor jullie opdracht het beste past. Is dat client-side, server-side, static-site rendering of een combinatie daarvan. Noteer je overweging in de wiki.

We onderzoeken in de volgende stappen in ieder geval het voordeel van SSG ten opzichte van SSR, ongeacht of je dit later daadwerkelijk gaat gebruiken.

### Bouwen

De website die je gebouwd heb maakt tot nu toe gebruik van *server side rendering*. Elke keer dat een bezoeker van de website een pagina bezoekt wordt een request naar de server gedaan en rendered de server de betreffende pagina alvorens een response naar de browser van de eindgebruiker te sturen. Aangezien de server de data uit een API moet ophalen (via bijv. een headless cms), kan het even duren voordat de pagina gerendered is. 

Om te onderzoeken of dit efficiënter kan gaan we de website van te voren renderen zodat er na een request van een bezoeker alleen maar statische HTML, CSS en JavaScript hoeft worden teruggestuurd en we dus de *build* fase overslaan.

#### Aanpak

1. Meet van de homepage van de huidige server side gerenderde webiste de _response tijd_ en het aantal _kilobytes_ dat in de response wordt meegestuurd. Doe deze test op jouw localhost en kijk hiervoor in de _Dev Tools > Network Tab_ met een _Throttle_ van bijvoorbeeld _Slow 3G_.
2. Maak een branch aan, bijvoorbeeld _static-site_.
3. Zoek uit hoe je in het door jou gebruikte framework de website statisch gegenereerd kan worden. En pas je code aan volgens de instructies.
4. Maak op jouw localhost een *build* van de website en documenteer in je wiki de *response tijd* en het aantal *kilobytes* dat in nu de response wordt meegestuurd voor de homepage.

### Integreren

Nu de website statisch gegeneerd wordt, publiceer je de website en zorg je er voor dat bij een verandering van de content of de code de website opnieuw gebuild wordt (continuous deployment). Hiervoor maak je gebruik van GitHub Actions of zet je bijvoorbeeld Netlify in.

#### Aanpak
1. Publiceer je website met bijvoorbeeld Netlify. Nu je statische pagina's publiceert kan je ook met een GitHub action automatisch de site laten builden bij een update van de code.
2. Zoek uit hoe je na een aanpassing van de content in het headless cms, automatisch een nieuwe build kunt laten maken.

## Criteria

Focus sprint # - De focus van deze sprint ligt op het statisch genereren van een website.

Deze opdracht is done als:
- [ ] jouw code een statische website *‌build*;
- [ ] de statische website online te bekijken is;
- [ ] je het verschil in respons tijd en het het verschil in kilobytes gedocumenteerd hebt in je wiki.
- [ ] (optioneel) jouw code automatisch opnieuw *gebuild* wordt en gepubliceerd wordt naar de live site bij een push naar GitHub of na een update van de content(continuous deployment);
- [ ] maak een keuze voor de deployment van jouw site en onderbouw in je wiki waarom dit de beste optie is


