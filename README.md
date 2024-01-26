# 🖥️ Platform Grote Thema's 

Deze repository is de release candidate voor de opleiding CMD van de HvA. 

<img width="1440" alt="Scherm­afbeelding 2024-01-24 om 15 17 57" src="https://github.com/Tristandemuijnck/lets-jam-webapplicatie/assets/89298385/caf3f792-213a-49b9-9b57-7d03e100512f">

## 📚 Inhoudsopgave

* 📝 Beschrijving
* 🎮 Gebruik
* 🎨 Kenmerken
* ⚙️ Installatie
* 🔗 Bronnen
* 💎 Licentie

# 📝 Beschrijving

Voor de opleiding Communication and Multimedia design (CMD) vroeg men om een platform waar ze werkvormen kunnen uploaden. 

# 🎮 Gebruik

De meeste gebruikers van dit platform zijn de docenten van CMD. Zij kunnen door middel van het upload formulier een werkvorm uploaden met bijhorende content als een video, beschrijvende tekst en faculteit waar de opleiding onder valt. Het was primair voor CMD ontworpen maar is voorbereid op het gebruik voor andere opleidngen van andere faculteiten.

# 🎨 Kenmerken

Dit platform is gebouwd met onder andere: `html`, `css`, `javascript` en het framework `Sveltekit`

# ⚙️ Installatie 
## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## .Env bestand
Dit project maakt gebruik van een .env bestand om onze omgeving te koppelen aan ons gekozen headless cms Directus. Hier vandaan haalt het project de benodigde data vandaan. De opmaak van het .env bestand ziet er alsvolgt uit:

```
DIRECTUS_KEY = "[...]"
```

Neem contact op voor meer informatie en toegang.

# 🔗 Bronnen

[Enhanced colours](https://oklch.com/)

[Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)

# 💎 Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
