// Image slugs map 1:1 to public/images/<slug>-<width>.{avif,webp}.
// See src/lib/image-manifest.json for the source manifest and scripts/optimize-images.mjs.
export const HERO_SLUG = "hero-nucleo-ascendente";
export const PORTRAIT_SLUG = "nora-portrait";

export const WHATSAPP_NUMBER = "+54 11 6633 5877";
export const WHATSAPP_URL =
  "https://wa.me/5491166335877?text=" +
  encodeURIComponent(
    "Hola Nora, me gustaría iniciar una conversación sobre tu obra.",
  );
export const INSTAGRAM_URL = "https://www.instagram.com/noraescultura/";

export type Artwork = {
  number: string;
  slug: string;
  title: string;
  year: string;
  medium: { es: string; en: string };
  narrative: { es: string; en: string };
  featured?: boolean;
  hero?: boolean;
};

export const ARTWORKS: Artwork[] = [
  {
    number: "Nº 01",
    slug: "estratos-del-silencio",
    title: "Estratos del Silencio",
    year: "2024",
    medium: { es: "Cerámica, esmaltes y oxidaciones", en: "Ceramic, glazes and oxidations" },
    narrative: {
      es: "Una obra donde la materia se pliega y se abre en capas, dejando aparecer vacíos, ritmos y resonancias interiores.\n\nEstratos del Silencio propone una pausa: una forma de contemplar lo orgánico, lo sutil y lo esencial.",
      en: "A work where matter folds and opens in layers, revealing voids, rhythms and inner resonances.\n\nEstratos del Silencio proposes a pause: a way of contemplating the organic, the subtle and the essential.",
    },
  },
  {
    number: "Nº 02",
    slug: "eje-de-la-materia",
    title: "Eje de la Materia",
    year: "2024",
    medium: { es: "Cerámica, alta temperatura", en: "Ceramic, high-fire" },
    narrative: {
      es: "Una escultura de impulso vertical, donde la forma parece crecer desde adentro.\n\nEje de la Materia explora tensión, equilibrio y expansión en un gesto escultórico que une fuerza y sensibilidad.",
      en: "A sculpture of vertical impulse, where form seems to grow from within.\n\nEje de la Materia explores tension, balance and expansion in a sculptural gesture that unites strength and sensitivity.",
    },
  },
  {
    number: "Nº 03",
    slug: "orbita-mineral",
    title: "Órbita Mineral",
    year: "2024",
    medium: { es: "Cerámica, superficies oxidadas", en: "Ceramic, oxidised surfaces" },
    narrative: {
      es: "Superficies oxidadas, curvas abiertas y vacíos que dialogan con la luz.\n\nÓrbita Mineral reúne peso, movimiento y textura en una pieza de carácter terrestre y presencia intensa.",
      en: "Oxidised surfaces, open curves and voids that converse with light.\n\nÓrbita Mineral brings together weight, movement and texture in a piece of earthly character and intense presence.",
    },
    featured: true,
  },
  {
    number: "Nº 04",
    slug: "nucleo-ascendente",
    title: "Núcleo Ascendente",
    year: "2024",
    medium: { es: "Cerámica modelada a mano", en: "Hand-modelled ceramic" },
    narrative: {
      es: "Volúmenes curvos y cavidades en equilibrio construyen una presencia que asciende con naturalidad.\n\nNúcleo Ascendente habla de origen, transformación y una energía que busca elevarse.",
      en: "Curved volumes and cavities in balance build a presence that rises naturally.\n\nNúcleo Ascendente speaks of origin, transformation and an energy seeking to rise.",
    },
    hero: true,
  },
  {
    number: "Nº 05",
    slug: "jardin-interior",
    title: "Jardín Interior",
    year: "2023",
    medium: { es: "Cerámica, pliegues y cuencos", en: "Ceramic, folds and bowls" },
    narrative: {
      es: "Una proliferación de pliegues y cuencos cerámicos que sugiere una floración íntima, abundante y meditativa.\n\nJardín Interior invita a habitar un universo sensible donde la materia se vuelve refugio.",
      en: "A proliferation of ceramic folds and bowls suggesting an intimate, abundant and meditative bloom.\n\nJardín Interior invites you to inhabit a sensitive universe where matter becomes refuge.",
    },
  },
  {
    number: "Nº 06",
    slug: "arquitectura-del-vacio",
    title: "Arquitectura del Vacío",
    year: "2023",
    medium: { es: "Cerámica, planos ondulantes", en: "Ceramic, undulating planes" },
    narrative: {
      es: "Planos ondulantes, cavidades y aperturas internas construyen una geografía sensible.\n\nArquitectura del Vacío propone una relación entre materia y espacio, donde lo escultórico también se vuelve habitable.",
      en: "Undulating planes, cavities and internal openings build a sensitive geography.\n\nArquitectura del Vacío proposes a relationship between matter and space, where the sculptural also becomes inhabitable.",
    },
  },
];

export type Lang = "es" | "en";

export const COPY = {
  nav: {
    obra: { es: "Obra", en: "Work" },
    estudio: { es: "Estudio", en: "Studio" },
    trayectoria: { es: "Trayectoria", en: "Career" },
    contacto: { es: "Contacto", en: "Contact" },
  },
  hero: {
    eyebrow: { es: "Escultura cerámica contemporánea", en: "Contemporary ceramic sculpture" },
    caption: { es: "Núcleo Ascendente · Cerámica, 2024", en: "Núcleo Ascendente · Ceramic, 2024" },
    scroll: { es: "Recorrer la exposición", en: "Enter the exhibition" },
  },
  studio: {
    label: { es: "Quién soy", en: "Who I am" },
    title: { es: "Nora Bystrowicz", en: "Nora Bystrowicz" },
    body: {
      es: "Mi nombre es Nora Bystrowicz. Vivo y trabajo en Buenos Aires, donde llevo más de quince años explorando la cerámica como un lenguaje de la materia y del gesto.\n\nMi obra nace de una escucha lenta: el barro propone, y yo respondo. Me interesa el momento en que una forma deja de ser tierra y comienza a sostener una presencia propia, capaz de habitar el espacio con una calma terrestre.\n\nCada pieza es para mí un pequeño territorio interior: vacíos, pliegues y aperturas donde la luz también es material.",
      en: "My name is Nora Bystrowicz. I live and work in Buenos Aires, where for more than fifteen years I have been exploring ceramics as a language of matter and gesture.\n\nMy work is born of a slow listening: clay proposes, and I respond. I am drawn to the moment when a form ceases to be earth and begins to hold its own presence, able to inhabit space with an earthly calm.\n\nEach piece is, for me, a small interior territory: voids, folds and openings where light is also a material.",
    },
    signature: { es: "— Nora", en: "— Nora" },
  },
  statement: {
    label: { es: "Declaración artística", en: "Artistic statement" },
    body: {
      es: "Trabajo la cerámica como una forma de pensar el espacio. Lo que busco no es la representación, sino la presencia: una materia silenciosa que respira, sostiene y a veces se abre.\n\nMis obras se sitúan en el cruce entre lo orgánico y lo construido, entre el peso de la tierra y la ligereza de un gesto.",
      en: "I work with ceramics as a way of thinking about space. What I seek is not representation but presence: a silent matter that breathes, sustains and sometimes opens.\n\nMy works inhabit the crossing between the organic and the built, between the weight of earth and the lightness of a gesture.",
    },
  },
  process: {
    label: { es: "Proceso y materialidad", en: "Process & materiality" },
    title: { es: "El barro, el gesto, el fuego.", en: "Clay, gesture, fire." },
    body: {
      es: "Empiezo siempre con la mano abierta sobre la arcilla húmeda. La temperatura, la respiración, el peso del cuerpo: todo entra en la pieza antes de que la pieza exista.\n\nLuego viene la espera. El secado lento, las grietas que conviene escuchar, los esmaltes que cambian su voz dentro del horno. El fuego no es un final: es otro autor.\n\nLo que queda — una textura oxidada, un pliegue que retiene la luz, una cavidad que respira — es la memoria de ese diálogo.",
      en: "I always begin with an open hand on damp clay. Temperature, breath, the weight of the body: everything enters the piece before the piece exists.\n\nThen comes the waiting. The slow drying, the cracks worth listening to, the glazes that change their voice inside the kiln. Fire is not an ending: it is another author.\n\nWhat remains — an oxidised texture, a fold that holds the light, a breathing cavity — is the memory of that dialogue.",
    },
  },
  featured: {
    label: { es: "Obra destacada", en: "Featured work" },
    cta: { es: "Consultar la obra", en: "Inquire about this work" },
  },
  exhibition: {
    label: { es: "Exhibición", en: "Exhibition" },
    title: { es: "Una selección curada de obras recientes.", en: "A curated selection of recent works." },
    expand: { es: "Leer más", en: "Read more" },
    collapse: { es: "Cerrar", en: "Close" },
    inquire: { es: "Solicitar información", en: "Request information" },
  },
  highlights: {
    label: { es: "Trayectoria seleccionada", en: "Selected career highlights" },
    items: {
      es: [
        "Más de 15 años de práctica escultórica continua",
        "Exhibida en el Centro Cultural Borges, Buenos Aires",
        "Miembro de la Asociación Argentina de Escultores",
        "Exposiciones individuales y colectivas en Argentina",
      ],
      en: [
        "Over 15 years of continuous sculptural practice",
        "Exhibited at Centro Cultural Borges, Buenos Aires",
        "Member of the Asociación Argentina de Escultores",
        "Solo and group exhibitions across Argentina",
      ],
    },
  },
  timeline: {
    label: { es: "Trayectoria y formación", en: "Career & training" },
    items: [
      { year: "2024", es: "Nueva serie de obra reciente · Buenos Aires", en: "New series of recent work · Buenos Aires" },
      { year: "2022", es: "Exposición colectiva, Centro Cultural Borges", en: "Group exhibition, Centro Cultural Borges" },
      { year: "2019", es: "Asociación Argentina de Escultores · Miembro activo", en: "Asociación Argentina de Escultores · Active member" },
      { year: "2015", es: "Estudios y residencias en cerámica contemporánea", en: "Studies and residencies in contemporary ceramics" },
      { year: "2010", es: "Inicio del trabajo escultórico continuo", en: "Beginning of continuous sculptural work" },
    ],
  },
  exhibitions: {
    label: { es: "Exposiciones", en: "Exhibitions" },
    past: { es: "Exposiciones pasadas", en: "Past exhibitions" },
    upcoming: { es: "Próximas exposiciones", en: "Upcoming" },
    pastItems: [
      { es: "Centro Cultural Borges, Buenos Aires · Colectiva", en: "Centro Cultural Borges, Buenos Aires · Group" },
      { es: "Asociación Argentina de Escultores · Muestra anual", en: "Asociación Argentina de Escultores · Annual show" },
      { es: "Galerías independientes, Buenos Aires", en: "Independent galleries, Buenos Aires" },
    ],
    upcomingText: {
      es: "Próximas fechas en preparación. Consultas a través de WhatsApp.",
      en: "Upcoming dates in preparation. Inquiries via WhatsApp.",
    },
  },
  pensamiento: {
    label: { es: "Pensamiento", en: "Thought" },
    quote: {
      es: "“La cerámica no se domina: se acompaña. Cada pieza es un acuerdo entre el barro, el fuego y una pregunta que no termina de cerrarse.”",
      en: "“Ceramics is not mastered: it is accompanied. Each piece is an agreement between clay, fire and a question that never quite closes.”",
    },
    attribution: { es: "— Nora Bystrowicz", en: "— Nora Bystrowicz" },
  },
  contact: {
    label: { es: "Contacto", en: "Contact" },
    title: { es: "Iniciar conversación.", en: "Begin a conversation." },
    body: {
      es: "Recibo consultas de coleccionistas, curadores, galerías, arquitectos, diseñadores de interiores e instituciones culturales.\n\nCada obra puede ser conversada en persona o a distancia. La forma más directa es WhatsApp.",
      en: "I welcome inquiries from collectors, curators, galleries, architects, interior designers and cultural institutions.\n\nEach work can be discussed in person or remotely. The most direct way is WhatsApp.",
    },
    cta: { es: "Iniciar conversación por WhatsApp", en: "Begin a conversation on WhatsApp" },
  },
  footer: {
    tagline: { es: "Escultura cerámica contemporánea · Buenos Aires", en: "Contemporary ceramic sculpture · Buenos Aires" },
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  },
};
