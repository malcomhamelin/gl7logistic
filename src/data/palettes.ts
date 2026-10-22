// Catalogue des palettes présentées sur le site (uniquement de l'occasion).
// TODO: valider avec l'équipe les modèles proposés, les choix disponibles et les caractéristiques.

/** Gabarit de l'illustration (voir src/components/PalletArt.astro) */
export type Build = 'euro' | 'block' | 'light' | 'half';

// Pharma, 1er choix et 2e choix : classement réservé aux palettes Europe. Les autres formats sont reconditionnés.
export type Grade = 'Pharma' | '1er choix' | '2e choix' | 'Reconditionnée';

export interface Palette {
  slug: string;
  name: string;
  short: string;
  /** Dimensions en mm : longueur × largeur × hauteur */
  dimensions: { length: number; width: number; height: number };
  grades: Grade[];
  /** Type d'illustration */
  build: Build;
  featured: boolean;
  description: string[];
  specs: { label: string; value: string }[];
  uses: string[];
}

export const palettes: Palette[] = [
  {
    slug: 'palette-europe-80x120',
    name: 'Palette Europe 80×120',
    short: "Le standard de la logistique, EPAL ou non marquée, triée selon son état.",
    dimensions: { length: 1200, width: 800, height: 144 },
    grades: ['Pharma', '1er choix', '2e choix'],
    build: 'euro',
    featured: true,
    description: [
      "La palette Europe 80×120 est le format de référence en Europe : elle circule entre entrepôts, transporteurs et grande distribution. Quatre entrées, neuf dés, elle se manipule au transpalette comme au chariot élévateur.",
      "Nous proposons des palettes Europe d'occasion, EPAL marquées ou non marquées, triées selon leur état : Pharma (1er choix d'une propreté irréprochable), 1er choix (bois clair, très bon état) ou 2e choix (bois plus foncé, état correct).",
    ],
    specs: [
      { label: 'Dimensions', value: '1200 × 800 × 144 mm' },
      { label: 'Entrées', value: '4 entrées' },
      { label: 'Construction', value: '9 dés, 3 semelles, 5 planches de dessus' },
      { label: 'Charge dynamique', value: "jusqu'à 1 500 kg (EPAL)" },
      { label: 'Marquage', value: 'EPAL / EUR ou sans marquage' },
    ],
    uses: ['Logistique et entreposage', 'Grande distribution', 'Transport routier', 'Stockage en rack'],
  },
  {
    slug: 'demi-palette-60x80',
    name: 'Demi-palette 60×80',
    short: 'Format compact pour la mise en rayon, les petites charges et les PLV.',
    dimensions: { length: 800, width: 600, height: 144 },
    grades: ['Reconditionnée'],
    build: 'half',
    featured: true,
    description: [
      "La demi-palette 60×80 est construite comme une palette légère coupée en deux, avec les planches dans le sens de la largeur. Compacte, elle est très utilisée en grande distribution pour la mise en avant en magasin et pour les livraisons de petites quantités.",
    ],
    specs: [
      { label: 'Dimensions', value: '800 × 600 × 144 mm' },
      { label: 'Entrées', value: '4 entrées' },
      { label: 'Construction', value: 'légère, planches dans le sens de la largeur' },
      { label: 'Charge', value: 'légère à moyenne, selon modèle' },
    ],
    uses: ['Mise en rayon', 'PLV et présentoirs', 'Petites livraisons'],
  },
  {
    slug: 'palette-100x120',
    name: 'Palette 100×120',
    short: 'Format industriel pour les charges lourdes et volumineuses.',
    dimensions: { length: 1200, width: 1000, height: 144 },
    grades: ['Reconditionnée'],
    build: 'block',
    featured: true,
    description: [
      "Plus large que la palette Europe, la palette 100×120 est privilégiée dans l'industrie, la chimie, les boissons et les matériaux de construction, partout où les charges sont lourdes ou encombrantes.",
    ],
    specs: [
      { label: 'Dimensions', value: '1200 × 1000 mm' },
      { label: 'Entrées', value: '4 entrées' },
      { label: 'Charge', value: 'selon modèle, nous consulter' },
    ],
    uses: ['Industrie', 'Boissons', 'Matériaux de construction'],
  },
  {
    slug: 'palette-legere',
    name: 'Palette légère (perdue)',
    short: 'Palette économique, idéale pour les envois sans retour de palette.',
    dimensions: { length: 1200, width: 800, height: 120 },
    grades: ['Reconditionnée'],
    build: 'light',
    featured: true,
    description: [
      "La palette légère, dite « perdue », est conçue pour un trajet sans retour. Plus légère et moins chère qu'une palette Europe, elle convient aux expéditions où la palette ne revient pas et aux charges modérées.",
    ],
    specs: [
      { label: 'Formats courants', value: '80×120, 100×120' },
      { label: 'Usage', value: 'Envois sans retour' },
      { label: 'Charge', value: 'légère à moyenne, selon modèle' },
    ],
    uses: ['Envois sans retour', 'E-commerce', 'Charges légères'],
  },
  {
    slug: 'palette-hors-standard',
    name: 'Palettes hors standard',
    short: 'Formats spéciaux et hors-cote : 110×110, 114×114, 120×120 et autres.',
    dimensions: { length: 1140, width: 1140, height: 144 },
    grades: ['Reconditionnée'],
    build: 'block',
    featured: false,
    description: [
      "Vous utilisez un format particulier ? Nous récupérons régulièrement des palettes hors standard : formats carrés, palettes renforcées, palettes à semelles, etc.",
      "Appelez-nous avec les dimensions et les quantités dont vous avez besoin : nous vous disons ce que nous avons en stock ou ce que nous pouvons trouver.",
    ],
    specs: [
      { label: 'Formats', value: '110×110, 114×114, 120×120, autres' },
      { label: 'Disponibilité', value: 'selon arrivages, nous consulter' },
    ],
    uses: ['Produits aux dimensions spécifiques', 'Industrie', 'BTP'],
  },
];

export const gradeInfo: Record<Grade, string> = {
  Pharma:
    "Le haut de gamme du 1er choix : palette Europe très propre, bois très clair, sans tache ni trace. Pour les secteurs les plus exigeants, comme l'industrie pharmaceutique.",
  '1er choix': 'Palette Europe en très bon état, bois clair et propre.',
  '2e choix': 'Palette Europe en bon état, bois plus foncé. Le meilleur rapport qualité-prix.',
  Reconditionnée:
    'Pour les autres formats : palette contrôlée et réparée dans nos ateliers, avec remplacement des éléments abîmés.',
};
