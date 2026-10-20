// Catalogue des palettes présentées sur le site.
// TODO: valider avec l'équipe les modèles réellement proposés, les choix disponibles et les caractéristiques.

export type Grade = 'Neuve' | '1er choix' | '2e choix' | 'Reconditionnée';

export interface Palette {
  slug: string;
  name: string;
  short: string;
  /** Dimensions en mm : longueur × largeur × hauteur */
  dimensions: { length: number; width: number; height: number };
  grades: Grade[];
  /** Type d'illustration */
  build: 'block' | 'light';
  featured: boolean;
  description: string[];
  specs: { label: string; value: string }[];
  uses: string[];
}

export const palettes: Palette[] = [
  {
    slug: 'palette-europe-80x120',
    name: 'Palette Europe 80×120',
    short: 'Le standard de la logistique, EPAL ou non EPAL, en neuf ou en occasion.',
    dimensions: { length: 1200, width: 800, height: 144 },
    grades: ['Neuve', '1er choix', '2e choix', 'Reconditionnée'],
    build: 'block',
    featured: true,
    description: [
      "La palette Europe 80×120 est le format de référence en Europe : elle circule entre entrepôts, transporteurs et grande distribution. Quatre entrées, neuf dés, elle se manipule au transpalette comme au chariot élévateur.",
      "Nous proposons des palettes EPAL marquées, des palettes Europe non marquées, et des palettes d'occasion triées selon leur état : 1er choix (bois clair, très bon état), 2e choix (bois plus foncé, état correct) ou reconditionnées après réparation.",
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
    grades: ['Neuve', '1er choix', 'Reconditionnée'],
    build: 'block',
    featured: true,
    description: [
      "La demi-palette 60×80 reprend la construction de la palette Europe sur une surface réduite de moitié. Elle est très utilisée en grande distribution pour la mise en avant en magasin et pour les livraisons de petites quantités.",
    ],
    specs: [
      { label: 'Dimensions', value: '800 × 600 × 144 mm' },
      { label: 'Entrées', value: '4 entrées' },
      { label: 'Charge dynamique', value: "jusqu'à 500 kg (EPAL)" },
      { label: 'Marquage', value: 'EPAL ou sans marquage' },
    ],
    uses: ['Mise en rayon', 'PLV et présentoirs', 'Petites livraisons'],
  },
  {
    slug: 'palette-100x120',
    name: 'Palette 100×120',
    short: 'Format industriel pour les charges lourdes et volumineuses.',
    dimensions: { length: 1200, width: 1000, height: 144 },
    grades: ['Neuve', '1er choix', '2e choix', 'Reconditionnée'],
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
    uses: ['Industrie', 'Boissons', 'Matériaux de construction', 'Export'],
  },
  {
    slug: 'palette-legere',
    name: 'Palette légère (perdue)',
    short: 'Palette économique à usage unique, idéale pour les envois sans retour.',
    dimensions: { length: 1200, width: 800, height: 120 },
    grades: ['Neuve', 'Reconditionnée'],
    build: 'light',
    featured: true,
    description: [
      "La palette légère, dite « perdue », est conçue pour un seul trajet. Plus légère et moins chère qu'une palette Europe, elle convient aux expéditions sans retour de palette et aux charges modérées.",
    ],
    specs: [
      { label: 'Formats courants', value: '80×120, 100×120' },
      { label: 'Usage', value: 'Un seul trajet' },
      { label: 'Charge', value: 'légère à moyenne, selon modèle' },
    ],
    uses: ['Envois sans retour', 'E-commerce', 'Charges légères'],
  },
  {
    slug: 'palette-sur-mesure',
    name: 'Palettes hors standard',
    short: 'Formats spéciaux et hors-cote : 110×110, 114×114, 120×120 et autres.',
    dimensions: { length: 1140, width: 1140, height: 144 },
    grades: ['Neuve', '1er choix', '2e choix'],
    build: 'block',
    featured: false,
    description: [
      "Vous utilisez un format particulier ? Nous trouvons ou faisons réaliser des palettes aux dimensions de vos produits : formats carrés, palettes renforcées, palettes à semelles, etc.",
      "Indiquez-nous les dimensions, la charge et les quantités : nous vous proposons la solution la plus adaptée, en neuf ou en occasion.",
    ],
    specs: [
      { label: 'Formats', value: '110×110, 114×114, 120×120, sur demande' },
      { label: 'Délai', value: 'selon format et quantité' },
    ],
    uses: ['Produits aux dimensions spécifiques', 'Industrie', 'BTP'],
  },
  {
    slug: 'palette-nimp15',
    name: 'Palette traitée NIMP 15',
    short: "Palettes traitées thermiquement (HT) pour l'export hors Union européenne.",
    dimensions: { length: 1200, width: 800, height: 144 },
    grades: ['Neuve', 'Reconditionnée'],
    build: 'block',
    featured: false,
    description: [
      "Pour exporter hors de l'Union européenne, les emballages en bois doivent respecter la norme internationale NIMP 15 (ISPM 15) : le bois est traité thermiquement et la palette porte le marquage officiel.",
      "Nous fournissons des palettes traitées dans les principaux formats, en neuf ou en occasion déjà marquée.",
    ],
    specs: [
      { label: 'Traitement', value: 'Thermique (HT)' },
      { label: 'Marquage', value: 'Logo IPPC / NIMP 15' },
      { label: 'Formats', value: '80×120, 100×120, autres sur demande' },
    ],
    uses: ['Export hors UE', 'Transport maritime', 'Fret aérien'],
  },
];

export const gradeInfo: Record<Grade, string> = {
  Neuve: 'Palette sortie de fabrication, bois clair.',
  '1er choix': "Palette d'occasion en très bon état, bois clair et propre.",
  '2e choix': "Palette d'occasion en bon état, bois plus foncé. Le meilleur rapport qualité-prix.",
  Reconditionnée: "Palette d'occasion réparée dans nos ateliers, avec remplacement des éléments abîmés.",
};
