import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Moon,
  Star,
  Sun,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SimpleGallery } from "../shared/simpleGallery";

export function PromoTripPage() {
  // Imágenes ilustrativas por región (mini grid por bloque)
  const regionPhotos: Record<string, string[]> = {
    sur: [
      "https://images.unsplash.com/photo-1546530967-21531b891dd4?q=80&w=1600&auto=format&fit=crop", // Machu Picchu
      "https://images.unsplash.com/photo-1596118856868-6c8ffef5ad6f?q=80&w=1600&auto=format&fit=crop", // Arequipa
      "https://images.unsplash.com/photo-1591337586885-3df747a0c474?q=80&w=1600&auto=format&fit=crop", // Lago Titicaca
    ],
    norte: [
      "https://images.unsplash.com/photo-1617166012213-d9f6d2dc3e59?q=80&w=1600&auto=format&fit=crop", // Chan Chan/Trujillo (representativa)
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop", // Playas del norte
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", // Dunas / desierto norte
    ],
    centro: [
      "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop", // Circuito del Agua (referencial nocturna)
      "https://images.unsplash.com/photo-1544988531-28cbde9f2a6e?q=80&w=1600&auto=format&fit=crop", // Paracas
      "https://images.unsplash.com/photo-1584727638161-dfbbde0fbab8?q=80&w=1600&auto=format&fit=crop", // Huacachina
    ],
  };

  const sections: Array<{
    id: string;
    title: string;
    region: string;
    color: string;
    highlights: string[];
    itinerary: string[];
  }> = [
    {
      id: "sur",
      title: "Sur",
      region: "Arequipa, Cusco, Puno",
      color: "#D6FF57",
      highlights: [
        "Tour nocturno por el Centro Histórico",
        "Ingreso a monumentos y miradores exclusivos",
        "Actividades de integración y foto grupal pro",
      ],
      itinerary: [
        "Día 1: Llegada y City Tour de bienvenida con dinámica de integración",
        "Día 2: Valle Sagrado + taller de textilería andina",
        "Día 3: Machu Picchu con guía experto y challenge fotográfico",
        "Día 4: Ruta del Sol hacia Puno (paradas culturales)",
        "Día 5: Islas Uros y Taquile + almuerzo en comunidad",
        "Noche Extra: Tour nocturno con miradores y chocolate caliente",
      ],
    },
    {
      id: "norte",
      title: "Norte",
      region: "Trujillo, Chiclayo, Piura",
      color: "#8CBF3F",
      highlights: [
        "Huacas del Sol y la Luna con taller de cerámica",
        "Dunas al atardecer + fogata y marshmallows",
        "Surf class opcional en Máncora",
      ],
      itinerary: [
        "Día 1: City Tour colonial en Trujillo + plaza iluminada",
        "Día 2: Huacas del Sol y la Luna + taller vivencial",
        "Día 3: Chan Chan y Huanchaco (caballitos de totora)",
        "Día 4: Señor de Sipán (Chiclayo) + street food tour",
        "Día 5: Máncora – clase de surf y tarde de playa",
        "Noche Extra: Tour nocturno por el malecón + party segura",
      ],
    },
    {
      id: "centro",
      title: "Centro",
      region: "Lima, Paracas, Ica",
      color: "#57FFC1",
      highlights: [
        "City Tour de murales y miradores limeños",
        "Islas Ballestas + mini laboratorio de fauna marina",
        "Buggy & sandboard en Huacachina al atardecer",
      ],
      itinerary: [
        "Día 1: City Tour de Lima alternativo (museo + miradores)",
        "Día 2: Paracas – Islas Ballestas + reserva nacional",
        "Día 3: Ica – buggies y sandboard en Huacachina",
        "Día 4: Circuito Mágico del Agua – show nocturno",
        "Día 5: Día libre con actividades opcionales (gastronómico / shopping)",
        "Noche Extra: Tour nocturno con vistas y postres limeños",
      ],
    },
  ];

  // Galería principal de Viaje de Promo (usa SimpleGallery)
  const promoGalleryImages = [
    {
      largeURL:
        "https://images.unsplash.com/photo-1546530967-21531b891dd4?q=80&w=1920&auto=format&fit=crop",
      thumbnailURL:
        "https://images.unsplash.com/photo-1546530967-21531b891dd4?q=80&w=800&auto=format&fit=crop",
      width: 1920,
      height: 1280,
      description: "Machu Picchu – Momento cumbre del Viaje de Promo",
    },
    {
      largeURL:
        "https://images.unsplash.com/photo-1591337586885-3df747a0c474?q=80&w=1920&auto=format&fit=crop",
      thumbnailURL:
        "https://images.unsplash.com/photo-1591337586885-3df747a0c474?q=80&w=800&auto=format&fit=crop",
      width: 1920,
      height: 1280,
      description: "Islas Uros – Cultura viva en el Titicaca",
    },
    {
      largeURL:
        "https://images.unsplash.com/photo-1596118856868-6c8ffef5ad6f?q=80&w=1920&auto=format&fit=crop",
      thumbnailURL:
        "https://images.unsplash.com/photo-1596118856868-6c8ffef5ad6f?q=80&w=800&auto=format&fit=crop",
      width: 1920,
      height: 1280,
      description: "Arequipa – Atardeceres y casonas coloniales",
    },
    {
      largeURL:
        "https://images.unsplash.com/photo-1617166012213-d9f6d2dc3e59?q=80&w=1920&auto=format&fit=crop",
      thumbnailURL:
        "https://images.unsplash.com/photo-1617166012213-d9f6d2dc3e59?q=80&w=800&auto=format&fit=crop",
      width: 1920,
      height: 1280,
      description: "Norte – Arqueología y adobe milenario",
    },
    {
      largeURL:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1920&auto=format&fit=crop",
      thumbnailURL:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
      width: 1920,
      height: 1280,
      description: "Playas del norte – Tarde de integración",
    },
    {
      largeURL:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop",
      thumbnailURL:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
      width: 1920,
      height: 1280,
      description: "Dunas – Aventura y sandboard",
    },
    {
      largeURL:
        "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1920&auto=format&fit=crop",
      thumbnailURL:
        "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=800&auto=format&fit=crop",
      width: 1920,
      height: 1280,
      description: "Lima nocturna – Aguas danzantes",
    },
    {
      largeURL:
        "https://images.unsplash.com/photo-1544988531-28cbde9f2a6e?q=80&w=1920&auto=format&fit=crop",
      thumbnailURL:
        "https://images.unsplash.com/photo-1544988531-28cbde9f2a6e?q=80&w=800&auto=format&fit=crop",
      width: 1920,
      height: 1280,
      description: "Paracas – Islas Ballestas",
    },
    {
      largeURL:
        "https://images.unsplash.com/photo-1584727638161-dfbbde0fbab8?q=80&w=1920&auto=format&fit=crop",
      thumbnailURL:
        "https://images.unsplash.com/photo-1584727638161-dfbbde0fbab8?q=80&w=800&auto=format&fit=crop",
      width: 1920,
      height: 1280,
      description: "Huacachina – Buggies al atardecer",
    },
    {
      largeURL:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920&auto=format&fit=crop",
      thumbnailURL:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
      width: 1920,
      height: 1280,
      description: "Andes – Caminatas y miradores",
    },
    {
      largeURL:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1920&auto=format&fit=crop",
      thumbnailURL:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop",
      width: 1920,
      height: 1280,
      description: "Amaneceres de promo",
    },
    {
      largeURL:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop",
      thumbnailURL:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
      width: 1920,
      height: 1280,
      description: "Grupo – Foto oficial del viaje",
    },
  ];

  return (
    <div style={{ backgroundColor: "#0F1513" }}>
      {/* Header */}
      <div
        className="sticky top-0 z-50 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(15, 21, 19, 0.9)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium uppercase tracking-wide">Volver</span>
          </Link>
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#galeria"
              className="text-sm font-medium tracking-wide uppercase text-white hover:text-yellow-400 transition-colors"
            >
              Galería
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold uppercase tracking-wide"
              style={{ backgroundColor: "#D6FF57", color: "#0F1513" }}
            >
              Cotizar ahora
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: "60vh" }}>
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop"
          alt="Viaje de Promoción"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(15,21,19,0.95))",
          }}
        />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wider uppercase mb-3">
              Viaje de Promo
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
              Diseñado para colegios: itinerarios seguros, experiencias
              exclusivas y momentos que se recuerdan toda la vida.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
                style={{ backgroundColor: "#1A1F1D", color: "#D6FF57" }}
              >
                <Sparkles className="h-4 w-4" /> Exclusivos
              </span>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
                style={{ backgroundColor: "#1A1F1D", color: "#57FFC1" }}
              >
                <Moon className="h-4 w-4" /> Nocturnos
              </span>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
                style={{ backgroundColor: "#1A1F1D", color: "#8CBF3F" }}
              >
                <Sun className="h-4 w-4" /> Full Day
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {sections.map((sec) => (
            <div key={sec.id}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2.5 h-8 rounded"
                  style={{ backgroundColor: sec.color }}
                ></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
                  {sec.title}{" "}
                  <span className="text-gray-400 text-lg normal-case">
                    • {sec.region}
                  </span>
                </h2>
              </div>

              {/* Mini Galería por región */}
              {regionPhotos[sec.id] && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {regionPhotos[sec.id].map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={`${sec.title} ${i + 1}`}
                      className="w-full h-36 sm:h-40 object-cover rounded-lg"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Highlights */}
                <div className="lg:col-span-1">
                  <div
                    className="p-6 rounded-xl"
                    style={{ backgroundColor: "#1A1F1D" }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide flex items-center gap-2">
                      <Star className="h-5 w-5" style={{ color: sec.color }} />{" "}
                      Imperdibles
                    </h3>
                    <ul className="space-y-3">
                      {sec.highlights.map((h, i) => (
                        <li key={i} className="text-gray-300">
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Itinerary */}
                <div className="lg:col-span-2">
                  <div
                    className="p-6 rounded-xl"
                    style={{ backgroundColor: "#1A1F1D" }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide flex items-center gap-2">
                      <Calendar
                        className="h-5 w-5"
                        style={{ color: sec.color }}
                      />{" "}
                      Itinerario sugerido (5D/4N)
                    </h3>
                    <div className="space-y-4">
                      {sec.itinerary.map((d, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm"
                            style={{
                              backgroundColor: sec.color,
                              color: "#0F1513",
                            }}
                          >
                            {i + 1}
                          </div>
                          <p className="text-gray-300">{d}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3 text-xs">
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "#1C2320", color: sec.color }}
                      >
                        <MapPin className="h-3.5 w-3.5" /> Logística y seguridad
                        24/7
                      </span>
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "#1C2320", color: sec.color }}
                      >
                        <MapPin className="h-3.5 w-3.5" /> Coordinador por grupo
                      </span>
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "#1C2320", color: sec.color }}
                      >
                        <MapPin className="h-3.5 w-3.5" /> Seguro y protocolos
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Galería principal */}
          <div id="galeria">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide">
              Galería
            </h2>
            <SimpleGallery
              galleryID="promo-gallery"
              images={promoGalleryImages}
            />
          </div>

          {/* CTA */}
          <div className="text-center">
            <div
              className="inline-block p-8 rounded-2xl"
              style={{ backgroundColor: "#1A1F1D" }}
            >
              <h3 className="text-2xl font-extrabold text-white uppercase tracking-wide mb-2">
                ¿Listos para su Viaje de Promo?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Armamos el plan perfecto para su colegio: tiempos, paradas,
                alimentación, seguridad y actividades especiales personalizadas.
              </p>
              <a
                href={`https://wa.me/51942299911?text=${encodeURIComponent(
                  "Hola, quiero cotizar un Viaje de Promo para mi colegio"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wide"
                style={{ backgroundColor: "#D6FF57", color: "#0F1513" }}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
