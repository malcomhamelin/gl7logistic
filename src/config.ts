// Informations de l'entreprise, utilisées partout sur le site.
// Les valeurs marquées TODO sont provisoires et doivent être complétées avant la mise en ligne.

export const company = {
  name: 'GL7 Logistic',
  legalName: 'GL7 LOGISTIC',
  legalForm: 'SAS',
  siren: '852 952 142',
  siret: '852 952 142 00028',
  vat: 'FR27852952142',
  rcs: 'RCS Évry',
  capital: 'TODO', // capital social, ex. "1 000 €"
  director: 'Malcom Hamelin',
  founded: 2019,

  phone: '01 XX XX XX XX', // TODO
  phoneHref: 'tel:+33100000000', // TODO
  email: 'contact@gl7logistic.fr', // TODO: adresse réelle
  hours: [
    // TODO: horaires réels
    { days: 'Lundi – Vendredi', time: '8h00 – 17h00' },
    { days: 'Samedi – Dimanche', time: 'Fermé' },
  ],
  responseTime: '24 h ouvrées', // délai de réponse annoncé sur les devis

  depots: [
    {
      name: 'Dépôt de Champlan',
      role: 'Siège social',
      street: '1 rue du Chemin Blanc',
      postalCode: '91160',
      city: 'Champlan',
      department: 'Essonne',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1+rue+du+Chemin+Blanc+91160+Champlan',
    },
    {
      name: "Dépôt d'Orly",
      role: 'Établissement secondaire',
      street: '', // TODO: adresse exacte
      postalCode: '94310',
      city: 'Orly',
      department: 'Val-de-Marne',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Orly+94310',
    },
  ],

  host: {
    // TODO: hébergeur réel (obligatoire dans les mentions légales)
    name: 'Netlify, Inc.',
    address: '512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis',
  },
};

// Adresse d'envoi des formulaires (Formspree ou équivalent compatible).
// Créer un formulaire sur https://formspree.io et coller ici l'URL fournie, ex. "https://formspree.io/f/abcdwxyz".
// Tant que c'est vide, les formulaires affichent un message et proposent l'e-mail à la place.
export const forms = {
  quote: '',
  buyback: '',
};
