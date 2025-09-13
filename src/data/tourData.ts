export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  group: string;
  region: string;
  image: string;
  heroImage: string;
  highlights: string[];
  description: string;
  fullDescription: string;
  itinerary: {
    title: string;
    activities: string[];
  }[];
  includes: string[];
  gallery: string[];
  discount?: string;
}

export const tourData: Tour[] = [
  // Cusco Tours
  {
    id: "machu-picchu-full-day",
    title: "Machu Picchu Full Day",
    subtitle: "¡La Maravilla en un Día!",
    price: "$250",
    duration: "1 Día",
    group: "Mín. 10 pax",
    region: "Cusco",
    image: "/images/machupicchu-uno.jpeg",
    heroImage: "/images/machupicchu-hero.jpg",
    highlights: [
      "Tren panorámico",
      "Guía bilingüe",
      "Transporte incluido",
      "Descuento 10% grupos",
    ],
    description:
      "Viaje express desde Cusco a Machu Picchu con tren panorámico y guía experto.",
    fullDescription:
      "Descubre la majestuosa ciudadela de Machu Picchu en un día completo lleno de historia y aventura. Este tour express te llevará desde Cusco hasta la Ciudad Perdida de los Incas a través de un viaje en tren panorámico que te permitirá disfrutar de los impresionantes paisajes del Valle Sagrado. Con nuestro guía experto bilingüe, explorarás los misterios y secretos de esta maravilla del mundo mientras aprendes sobre la fascinante cultura inca.",
    itinerary: [
      {
        title: "Día 1 - Machu Picchu",
        activities: [
          "04:00 AM - Recojo en hotel y traslado a estación de tren",
          "06:00 AM - Viaje en tren panorámico a Aguas Calientes",
          "08:30 AM - Llegada y traslado en bus a Machu Picchu",
          "09:00 AM - Tour guiado por la ciudadela (2 horas)",
          "11:00 AM - Tiempo libre para explorar y tomar fotos",
          "13:00 PM - Almuerzo en Aguas Calientes (no incluido)",
          "15:30 PM - Retorno en tren a Cusco",
          "21:00 PM - Llegada aproximada a Cusco",
        ],
      },
    ],
    includes: [
      "Transporte hotel-estación-hotel",
      "Boletos de tren ida y vuelta",
      "Bus Aguas Calientes - Machu Picchu",
      "Entrada a Machu Picchu",
      "Guía profesional bilingüe",
      "Asistencia durante todo el tour",
    ],
    gallery: [
      "/images/machupicchu-uno.jpeg",
      "/images/machupicchu/gallery/1.jpg",
      "/images/machupicchu/gallery/2.jpg",
      "/images/machupicchu/gallery/3.jpg",
      "/images/machupicchu/gallery/4.jpeg",
      "/images/machupicchu/gallery/5.jpeg",
      "/images/machupicchu/gallery/6.jpeg",
      "/images/machupicchu/gallery/7.jpeg",
    ],
    discount: "Descuento 10% para grupos de promoción",
  },
  {
    id: "machu-picchu-2d1n",
    title: "Machu Picchu 2D/1N",
    subtitle: "¡Aventura Extendida!",
    price: "$350",
    duration: "2D/1N",
    group: "Mín. 10 pax",
    region: "Cusco",
    image: "/images/machupicchu-2.jpg",
    heroImage:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    highlights: [
      "Valle Sagrado",
      "Hotel 3*",
      "Comidas incluidas",
      "Aguas termales +$20",
    ],
    description:
      "Incluye Valle Sagrado + noche en Aguas Calientes para explorar más.",
    fullDescription:
      "Vive una experiencia completa de 2 días explorando tanto el Valle Sagrado como Machu Picchu. Este tour extendido te permite disfrutar con calma de los principales atractivos incas, incluyendo una noche de descanso en Aguas Calientes para estar más cerca de la ciudadela. Perfecto para grupos que desean una experiencia más relajada y completa.",
    itinerary: [
      {
        title: "Día 1 - Valle Sagrado",
        activities: [
          "08:00 AM - Recojo en hotel",
          "09:30 AM - Visita al mercado de Pisac",
          "11:00 AM - Exploración de las ruinas de Pisac",
          "13:00 PM - Almuerzo buffet en Urubamba",
          "15:00 PM - Visita a Ollantaytambo",
          "17:30 PM - Tren a Aguas Calientes",
          "19:00 PM - Check-in hotel y cena",
        ],
      },
      {
        title: "Día 2 - Machu Picchu",
        activities: [
          "05:30 AM - Desayuno en hotel",
          "06:00 AM - Bus a Machu Picchu",
          "06:30 AM - Tour guiado al amanecer",
          "09:00 AM - Tiempo libre para explorar",
          "12:00 PM - Retorno a Aguas Calientes",
          "14:30 PM - Tren de retorno a Cusco",
          "19:00 PM - Llegada a Cusco",
        ],
      },
    ],
    includes: [
      "Transporte completo",
      "Hotel 3* en Aguas Calientes",
      "Todas las entradas",
      "Guía profesional",
      "Desayuno y almuerzo día 1",
      "Desayuno día 2",
    ],
    gallery: [
      "/images/chinchero.jpg",
      "/images/pisac.jpg",
      "/images/camino-inca.jpg",
      "/images/machupicchu.jpg",
      "/images/oso-machupicchu.jpg",
    ],
  },
  {
    id: "valle-sagrado-vip",
    title: "Super Valle Sagrado VIP",
    subtitle: "¡Cultura y Naturaleza!",
    price: "$50",
    duration: "1 Día",
    group: "Grupos",
    region: "Cusco",
    image:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    heroImage:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    highlights: [
      "Pisac, Ollantaytambo",
      "Almuerzo VIP",
      "Transporte premium",
      "Kit estudiantil",
    ],
    description:
      "Tour premium por el Valle Sagrado con actividades interactivas.",
    fullDescription:
      "Experimenta el Valle Sagrado como nunca antes con nuestro tour VIP diseñado especialmente para grupos estudiantiles. Este tour premium incluye visitas a los sitios arqueológicos más importantes, actividades interactivas de aprendizaje, y un almuerzo buffet de primera calidad. Perfecto para grupos que buscan una experiencia educativa y cultural completa.",
    itinerary: [
      {
        title: "Día 1 - Valle Sagrado VIP",
        activities: [
          "08:00 AM - Recojo en transporte VIP",
          "09:00 AM - Mirador de Taray",
          "10:00 AM - Mercado y ruinas de Pisac",
          "12:00 PM - Taller de textiles tradicionales",
          "13:30 PM - Almuerzo buffet VIP en Urubamba",
          "15:00 PM - Fortaleza de Ollantaytambo",
          "16:30 PM - Visita a Chinchero",
          "18:00 PM - Retorno a Cusco",
        ],
      },
    ],
    includes: [
      "Transporte VIP con aire acondicionado",
      "Guía especializado en turismo educativo",
      "Almuerzo buffet premium",
      "Todas las entradas",
      "Kit estudiantil con material educativo",
      "Actividades interactivas",
    ],
    gallery: [
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    ],
  },
  {
    id: "montana-7-colores-humantay",
    title: "Montaña 7 Colores + Humantay",
    subtitle: "¡Aventura Natural!",
    price: "$120",
    duration: "2 Días",
    group: "Aventureros",
    region: "Cusco",
    image:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    heroImage:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    highlights: [
      "Montaña Vinicunca",
      "Laguna Humantay",
      "City Tour Cusco",
      "Desayunos incluidos",
    ],
    description:
      "Caminatas moderadas para grupos aventureros con colores y lagunas mágicas.",
    fullDescription:
      "Embárcate en una aventura de 2 días que combina dos de los destinos naturales más espectaculares de Cusco. La famosa Montaña de 7 Colores (Vinicunca) te sorprenderá con sus formaciones geológicas únicas, mientras que la Laguna Humantay te cautivará con sus aguas turquesas rodeadas de picos nevados. Incluye un city tour por Cusco para completar tu experiencia cultural.",
    itinerary: [
      {
        title: "Día 1 - Montaña de 7 Colores",
        activities: [
          "04:30 AM - Recojo y viaje a Cusipata",
          "07:00 AM - Desayuno en ruta",
          "08:30 AM - Inicio de caminata (1.5 horas)",
          "10:00 AM - Llegada a Vinicunca",
          "11:30 AM - Tiempo para fotos y exploración",
          "12:30 PM - Retorno (1 hora)",
          "14:00 PM - Almuerzo en Cusipata",
          "17:00 PM - Llegada a Cusco",
        ],
      },
      {
        title: "Día 2 - Laguna Humantay + City Tour",
        activities: [
          "05:00 AM - Recojo y viaje a Mollepata",
          "07:30 AM - Desayuno",
          "08:30 AM - Caminata a Laguna Humantay (1.5 horas)",
          "10:00 AM - Tiempo en la laguna",
          "12:00 PM - Retorno y almuerzo",
          "15:00 PM - City Tour Cusco: Qorikancha, Catedral",
          "17:00 PM - Sacsayhuamán",
          "18:30 PM - Fin del tour",
        ],
      },
    ],
    includes: [
      "Transporte completo",
      "Guía especializado en trekking",
      "Desayunos ambos días",
      "Almuerzo día 1",
      "Entradas a todos los sitios",
      "Bastones de trekking",
    ],
    gallery: [
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    ],
  },
  // Sur Tours
  {
    id: "arequipa-clasica",
    title: "Arequipa Clásica",
    subtitle: "¡La Ciudad Blanca!",
    price: "$200",
    duration: "3D/2N",
    group: "Grupos",
    region: "Sur",
    image:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    heroImage:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    highlights: [
      "Volcanes",
      "Conventos",
      "Cañón del Colca opcional",
      "Gastronomía",
    ],
    description: "Vuelos desde Cusco, tours guiados por la ciudad blanca.",
    fullDescription:
      "Descubre la majestuosa Arequipa, conocida como la Ciudad Blanca por su arquitectura colonial construida en sillar volcánico. Este tour de 3 días te llevará por los principales atractivos de la ciudad, incluyendo el famoso Monasterio de Santa Catalina, la Plaza de Armas y los miradores con vistas a los volcanes Misti, Chachani y Pichu Pichu.",
    itinerary: [
      {
        title: "Día 1 - Llegada y City Tour",
        activities: [
          "Vuelo Cusco - Arequipa",
          "Recepción en aeropuerto",
          "Check-in hotel",
          "City Tour: Plaza de Armas, Catedral",
          "Monasterio de Santa Catalina",
          "Mirador de Yanahuara",
        ],
      },
      {
        title: "Día 2 - Volcanes y Campiña",
        activities: [
          "Tour a la campiña arequipeña",
          "Molino de Sabandia",
          "Mansión del Fundador",
          "Mirador de volcanes",
          "Almuerzo típico",
          "Tarde libre",
        ],
      },
      {
        title: "Día 3 - Retorno",
        activities: [
          "Desayuno",
          "Tiempo libre",
          "Traslado al aeropuerto",
          "Vuelo de retorno a Cusco",
        ],
      },
    ],
    includes: [
      "Vuelos Cusco-Arequipa-Cusco",
      "Hotel 3* con desayuno",
      "Todos los traslados",
      "Tours con guía",
      "Entradas incluidas",
    ],
    gallery: [
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    ],
  },
  {
    id: "puno-titicaca",
    title: "Puno y Lago Titicaca",
    subtitle: "¡Cultura Aymara!",
    price: "$150",
    duration: "2D/1N",
    group: "Cultural",
    region: "Sur",
    image:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    heroImage:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    highlights: [
      "Islas Uros",
      "Taquile",
      "Danzas folklóricas",
      "Almuerzos incluidos",
    ],
    description: "Islas flotantes y folklore con traslados y bote incluidos.",
    fullDescription:
      "Explora el místico Lago Titicaca, el lago navegable más alto del mundo. Visita las famosas islas flotantes de los Uros, construidas completamente de totora, y la isla de Taquile, donde conocerás las tradiciones textiles ancestrales y disfrutarás de espectáculos de danzas folklóricas.",
    itinerary: [
      {
        title: "Día 1 - Islas Uros y Taquile",
        activities: [
          "Traslado terrestre Cusco-Puno",
          "Almuerzo en ruta",
          "Llegada y embarque",
          "Visita Islas Uros",
          "Navegación a Taquile",
          "Cena y alojamiento",
        ],
      },
      {
        title: "Día 2 - Taquile y Retorno",
        activities: [
          "Desayuno con vista al lago",
          "Exploración de Taquile",
          "Almuerzo típico",
          "Show folklórico",
          "Retorno a Puno",
          "Viaje de regreso a Cusco",
        ],
      },
    ],
    includes: [
      "Transporte Cusco-Puno-Cusco",
      "Hotel con vista al lago",
      "Todas las comidas",
      "Bote y entradas",
      "Guía especializado",
      "Show folklórico",
    ],
    gallery: [
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    ],
  },
  {
    id: "moquegua-ilo",
    title: "Moquegua e Ilo",
    subtitle: "¡Vinos y Playas!",
    price: "$120",
    duration: "2D/1N",
    group: "Relax",
    region: "Sur",
    image:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    heroImage:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    highlights: ["Tour bodegas", "Playa en Ilo", "Degustaciones", "Historia"],
    description: "Viñedos, historia y mar con catas incluidas.",
    fullDescription:
      "Combina cultura, historia y relajación en este tour que te lleva desde los viñedos de Moquegua hasta las hermosas playas de Ilo. Conoce la tradición vitivinícola de la región, explora sitios históricos y disfruta del mar peruano en un ambiente relajado perfecto para grupos.",
    itinerary: [
      {
        title: "Día 1 - Moquegua Histórica",
        activities: [
          "Traslado desde Cusco",
          "City tour Moquegua",
          "Visita a bodegas tradicionales",
          "Degustación de vinos y piscos",
          "Almuerzo típico",
          "Check-in hotel",
        ],
      },
      {
        title: "Día 2 - Ilo y Playas",
        activities: [
          "Desayuno",
          "Traslado a Ilo",
          "Tour por el puerto",
          "Tiempo libre en playa",
          "Almuerzo marino",
          "Retorno",
        ],
      },
    ],
    includes: [
      "Transporte completo",
      "Hotel con desayuno",
      "Tours guiados",
      "Degustaciones",
      "Almuerzo día 1",
      "Almuerzo marino día 2",
    ],
    gallery: [
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    ],
  },
  // Costa Tours
  {
    id: "paracas-ballestas",
    title: "Paracas e Islas Ballestas",
    subtitle: "¡Fauna Marina!",
    price: "$60",
    duration: "1 Día",
    group: "Naturaleza",
    region: "Costa",
    image:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    heroImage:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    highlights: [
      "Leones marinos",
      "Pingüinos",
      "Bote tour",
      "Reserva nacional",
    ],
    description: "Bote tour y reserva nacional desde Ica.",
    fullDescription:
      'Descubre la increíble biodiversidad marina del Perú en las Islas Ballestas, conocidas como las "Galápagos peruanas". Observa de cerca leones marinos, pingüinos de Humboldt, pelícanos y una gran variedad de aves marinas en su hábitat natural. Incluye visita a la Reserva Nacional de Paracas.',
    itinerary: [
      {
        title: "Día 1 - Paracas e Islas Ballestas",
        activities: [
          "07:00 AM - Traslado desde Ica",
          "08:00 AM - Embarque en Paracas",
          "08:30 AM - Navegación a Islas Ballestas",
          "09:00 AM - Observación de fauna marina",
          "11:00 AM - Retorno al puerto",
          "12:00 PM - Visita Reserva Nacional Paracas",
          "14:00 PM - Almuerzo (no incluido)",
          "16:00 PM - Retorno a Ica",
        ],
      },
    ],
    includes: [
      "Transporte Ica-Paracas-Ica",
      "Bote tour a Islas Ballestas",
      "Entrada a Reserva Nacional",
      "Guía naturalista",
      "Chaleco salvavidas",
      "Binoculares para observación",
    ],
    gallery: [
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    ],
  },
  {
    id: "huacachina-oasis",
    title: "Huacachina Oasis",
    subtitle: "¡Dunas y Sandboard!",
    price: "$40",
    duration: "½ Día",
    group: "Aventura",
    region: "Costa",
    image:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    heroImage:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    highlights: ["Buggy", "Sandboard", "Equipo incluido", "Instructor"],
    description: "Adrenalina en el desierto con buggy y sandboard.",
    fullDescription:
      "Vive una experiencia llena de adrenalina en el único oasis natural de América del Sur. Disfruta de emocionantes paseos en buggy por las dunas de arena y aprende sandboard con instructores expertos. Perfecto para grupos jóvenes que buscan aventura y diversión en el desierto de Ica.",
    itinerary: [
      {
        title: "Tarde - Aventura en Huacachina",
        activities: [
          "14:00 PM - Llegada al oasis",
          "14:30 PM - Briefing de seguridad",
          "15:00 PM - Paseo en buggy por dunas",
          "16:00 PM - Clase de sandboard",
          "17:00 PM - Práctica libre",
          "18:00 PM - Atardecer en las dunas",
          "18:30 PM - Retorno al oasis",
        ],
      },
    ],
    includes: [
      "Transporte al oasis",
      "Buggy 4x4 compartido",
      "Equipo de sandboard",
      "Instructor certificado",
      "Gafas de protección",
      "Seguro de accidentes",
    ],
    gallery: [
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    ],
  },
  {
    id: "ica-vinedos",
    title: "Ica Viñedos",
    subtitle: "¡Pisco y Historia!",
    price: "$35",
    duration: "1 Día",
    group: "Cultural",
    region: "Costa",
    image:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    heroImage:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    highlights: ["Tour bodegas", "Museos", "Degustaciones", "Ciudad"],
    description: "Catas y museos con transporte incluido.",
    fullDescription:
      "Conoce la cuna del pisco peruano en un tour cultural por las bodegas tradicionales de Ica. Aprende sobre el proceso de elaboración del pisco y vinos, visita museos históricos y disfruta de degustaciones guiadas. Incluye recorrido por el centro histórico de Ica.",
    itinerary: [
      {
        title: "Día 1 - Ica Cultural",
        activities: [
          "09:00 AM - City tour Ica",
          "10:00 AM - Museo Regional de Ica",
          "11:30 AM - Bodega tradicional El Catador",
          "12:30 PM - Degustación de piscos",
          "14:00 PM - Almuerzo típico (no incluido)",
          "15:30 PM - Bodega Vista Alegre",
          "16:30 PM - Proceso de elaboración",
          "17:30 PM - Fin del tour",
        ],
      },
    ],
    includes: [
      "Transporte durante el tour",
      "Guía especializado",
      "Entradas a museos",
      "Visita a 2 bodegas",
      "Degustaciones incluidas",
      "Material educativo",
    ],
    gallery: [
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    ],
  },
];
