# Apple Lescoach

Interactieve lescoach voor de cursus **CVO LBC Apple Classes – iPhone & iPad 1**.

## Betrouwbare bron

Deze GitHub-repository is voortaan de bronversie van Apple Lescoach. Publiceer niet rechtstreeks vanuit tijdelijke `/mnt/data`-paden.

## Structuur

- `index.html` – startpagina en navigatie
- `styles.css` – vormgeving
- `theme1.js` t/m `theme4.js` – lesinhoud per thema
- `theme5-*`, `theme6-*`, `theme7-*` – opgesplitste lesmodules voor betrouwbare updates
- `runtime.js` – algemene lescoachlogica
- `vercel.json` – Vercel-configuratie

De knop **Vraag het aan de AI-lescoach** opent de GPT **CVO LBC Apple Classes iPhone 1** in een nieuw tabblad.

## Vercel koppelen

Koppel in het bestaande Vercel-project `apple-lescoach` deze GitHub-repository als Git Repository en gebruik branch `main`. Daarna wordt iedere wijziging op `main` automatisch opnieuw gedeployed door Vercel.

De bestaande productiealias kan zo behouden blijven:

`apple-lescoach-apple-classes.vercel.app`
