// Pages locales « Palettes en <département> ». Chaque page a un texte propre pour le référencement.
// TODO: confirmer la zone réellement desservie (livraison et enlèvement).

export interface Zone {
  slug: string;
  name: string;
  code: string;
  intro: string;
  towns: string[];
  depot?: string;
}

export const zones: Zone[] = [
  {
    slug: 'essonne',
    name: 'Essonne',
    code: '91',
    depot: 'Champlan',
    intro:
      "Notre dépôt principal est à Champlan, au cœur du nord de l'Essonne, à deux pas de l'A6, de l'A10 et de la N20. Nous livrons et enlevons des palettes rapidement dans tout le département, des zones d'activités de Massy et Courtabœuf jusqu'à Évry et Corbeil.",
    towns: ['Champlan', 'Massy', 'Longjumeau', 'Chilly-Mazarin', 'Palaiseau', 'Les Ulis', 'Wissous', 'Morangis', 'Savigny-sur-Orge', 'Évry-Courcouronnes', 'Corbeil-Essonnes', 'Étampes'],
  },
  {
    slug: 'val-de-marne',
    name: 'Val-de-Marne',
    code: '94',
    depot: 'Orly',
    intro:
      "Notre dépôt d'Orly nous place à côté de Rungis, de l'aéroport et des grandes plateformes logistiques du Val-de-Marne. Nous servons les entrepôts, commerces et industriels du département en palettes neuves et d'occasion, et nous rachetons leurs palettes inutilisées.",
    towns: ['Orly', 'Rungis', 'Thiais', 'Chevilly-Larue', 'Choisy-le-Roi', 'Villeneuve-le-Roi', 'Vitry-sur-Seine', 'Ivry-sur-Seine', 'Créteil', 'Bonneuil-sur-Marne', 'Valenton', 'Sucy-en-Brie'],
  },
  {
    slug: 'ile-de-france',
    name: 'Paris et Île-de-France',
    code: 'IDF',
    intro:
      "Depuis nos deux dépôts au sud de Paris, nous intervenons dans toute l'Île-de-France : Paris, Hauts-de-Seine, Seine-Saint-Denis, Seine-et-Marne, Yvelines et Val-d'Oise. Contactez-nous pour connaître les conditions de livraison et d'enlèvement près de chez vous.",
    towns: ['Paris', 'Hauts-de-Seine (92)', 'Seine-Saint-Denis (93)', 'Seine-et-Marne (77)', 'Yvelines (78)', "Val-d'Oise (95)"],
  },
];
