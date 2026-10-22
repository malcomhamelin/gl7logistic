# GL7 Logistic – site vitrine

Site de présentation de GL7 Logistic (achat, vente, réparation et rachat de palettes bois d'occasion, Champlan 91 / Orly 94).
Pas de vente en ligne : le site présente les produits et pousse avant tout à **appeler**, ou à laisser son numéro pour être rappelé.

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
| Adresse d'envoi du formulaire de rappel | `src/config.ts` (`forms`) |
| Articles de la rubrique Conseils | `src/content/conseils/*.md` |
| Catalogue de palettes (textes, caractéristiques, états) | `src/data/palettes.ts` |
| Pages locales (Essonne, Val-de-Marne, IDF) | `src/data/zones.ts` |
| Couleurs, typographie, boutons | `src/styles/global.css` |
| Logo | `src/components/Logo.astro`, `public/favicon.svg` |

Ajouter une palette ou une zone dans les fichiers de `src/data/` crée automatiquement sa page.

## Formulaire « Être rappelé »

Un seul formulaire court, présent sur `/contact` et `/rachat-palettes` : type de demande (acheter / vendre), nom,
téléphone de rappel, e-mail facultatif et demande en texte libre (quantités approximatives, commune…).
L'objet de l'e-mail reçu indique le type de demande et le nom, ex. « Rappel demandé – Vendre des palettes – Dupont ».

Envoi via [Formspree](https://formspree.io) (gratuit jusqu'à 50 envois/mois) :

1. Créer un formulaire sur Formspree, avec l'adresse e-mail de réception.
2. Copier l'URL fournie (`https://formspree.io/f/xxxx`) dans `forms.contact` de `src/config.ts`.

Tant que l'URL est vide, l'envoi ouvre la messagerie du visiteur avec la demande pré-remplie.

## Publier un article (rubrique Conseils)

Créer un fichier `src/content/conseils/mon-article.md` (le nom du fichier devient l'URL `/conseils/mon-article`) :

```md
---
title: "Titre de l'article"
description: "Résumé de 150 caractères environ, affiché dans Google."
pubDate: 2026-11-15
---

Texte en Markdown, avec des sous-titres `## …` et des liens vers les pages du site.
```

Ajouter `draft: true` pour préparer un article sans le publier. Rebuild et redéploiement automatiques si le site est
relié au dépôt Git (Netlify, Vercel…).

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
- [ ] Valider la zone desservie et le délai de rappel annoncé (24 h ouvrées)
- [ ] Relire les 3 articles de la rubrique Conseils (contenu technique à valider par l'équipe)
- [ ] Remplacer le texte « Notre histoire » (`src/pages/a-propos.astro`)
- [ ] Ajouter de vraies photos (dépôt, stock, camions) en complément des illustrations
- [ ] Nom de domaine définitif

## SEO

Déjà en place dans le code : titres et descriptions par page, URL lisibles, sitemap (`/sitemap-index.xml`),
balises canoniques, données structurées (LocalBusiness, fil d'Ariane, FAQ, articles), pages locales par département,
maillage interne, site statique très rapide, compatible mobile.

À faire au lancement :

- [ ] Créer une fiche **Google Business Profile** pour Champlan, puis pour Orly (catégorie « Fournisseur de palettes »)
- [ ] Nom, adresse, téléphone **strictement identiques** partout : site, fiches Google, PagesJaunes, annuaires
- [ ] Déclarer le site dans **Google Search Console** et **Bing Webmaster Tools**, envoyer le sitemap
- [ ] Inscription dans les annuaires : PagesJaunes, Kompass, HelloPro, Europages, annuaires locaux (CCI Essonne…)
- [ ] Photos réelles sur le site et sur les fiches Google (dépôt, stock, camions, équipe)

Ensuite, en continu :

- [ ] Demander un **avis Google** aux clients satisfaits (lien direct à envoyer par SMS ou e-mail)
- [ ] Répondre à tous les avis
- [ ] Publier un article par mois environ dans la rubrique Conseils, et une actualité/photo par semaine sur la fiche Google
- [ ] Suivre les requêtes et les positions dans Search Console tous les mois
