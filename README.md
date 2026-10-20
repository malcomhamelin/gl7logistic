# GL7 Logistic – site vitrine

Site de présentation de GL7 Logistic (achat, vente, réparation et rachat de palettes bois, Champlan 91 / Orly 94).
Pas de vente en ligne : le site présente les produits et génère des demandes de devis et des propositions de rachat.

Site statique construit avec [Astro](https://astro.build), sans base de données ni back-office.

## Démarrer

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # génère le site dans dist/
npm run preview   # sert dist/ en local
```

Node 22.22 ou plus récent requis.

## Où modifier quoi

| Quoi | Fichier |
|---|---|
| Téléphone, e-mail, horaires, adresses, mentions légales | `src/config.ts` |
| Adresse d'envoi des formulaires | `src/config.ts` (`forms`) |
| Catalogue de palettes (textes, caractéristiques, états) | `src/data/palettes.ts` |
| Pages locales (Essonne, Val-de-Marne, IDF) | `src/data/zones.ts` |
| Couleurs, typographie, boutons | `src/styles/global.css` |
| Logo | `src/components/Logo.astro`, `public/favicon.svg` |

Ajouter une palette ou une zone dans les fichiers de `src/data/` crée automatiquement sa page.

## Formulaires

Les formulaires de devis (`/devis`) et de rachat (`/rachat-palettes`) envoient leurs données à un service externe.
Recommandé : [Formspree](https://formspree.io) (gratuit jusqu'à 50 envois/mois).

1. Créer deux formulaires sur Formspree, avec l'adresse e-mail de réception.
2. Copier les URL fournies (`https://formspree.io/f/xxxx`) dans `forms.quote` et `forms.buyback` de `src/config.ts`.

Tant que ces URL sont vides, l'envoi ouvre la messagerie du visiteur avec la demande pré-remplie.

## Mise en ligne

N'importe quel hébergeur de site statique convient (Netlify, Vercel, Cloudflare Pages, OVH…) :
commande de build `npm run build`, dossier publié `dist`.

Penser à mettre à jour le domaine dans `astro.config.mjs` (`site`) et `public/robots.txt`,
ainsi que l'hébergeur dans `src/config.ts` (mentions légales).

## À compléter avant la mise en ligne

Rechercher `TODO` dans le code. En résumé :

- [ ] Téléphone, e-mail, horaires réels (`src/config.ts`)
- [ ] Adresse exacte du dépôt d'Orly
- [ ] Capital social et hébergeur (mentions légales)
- [ ] Valider le catalogue : modèles réellement vendus, états disponibles, caractéristiques
- [ ] Valider la zone desservie et le délai de réponse annoncé (24 h ouvrées)
- [ ] Remplacer le texte « Notre histoire » (`src/pages/a-propos.astro`)
- [ ] Ajouter de vraies photos (dépôt, stock, camions) en complément des illustrations
- [ ] Nom de domaine définitif
- [ ] Après la mise en ligne : fiches Google Business Profile pour Champlan et Orly, déclaration du sitemap dans Google Search Console
