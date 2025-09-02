import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  MapPin,
  Calendar,
  Shield,
} from "lucide-react";
import { tourData } from "../data/tourData";
import { SimpleGallery } from "../shared/simpleGallery";

// export function TourDetailPage() {
export function TourDetailPage() {
  const { tourId } = useParams<{ tourId: string }>();
  const tour = tourData.find((t) => t.id === tourId);

  // Mapeo de imágenes del tour al formato esperado por SimpleGallery (PhotoSwipe)
  const imagesForSimpleGallery = tour
    ? tour.gallery.map((src) => ({
        largeURL: src,
        thumbnailURL: src,
        width: 1920,
        height: 1080,
      }))
    : [];

  if (!tour) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#0F1513" }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Tour no encontrado
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-colors duration-300"
            style={{ backgroundColor: "#D6FF57", color: "#0F1513" }}
          >
            <ArrowLeft className="h-5 w-5" />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#0F1513" }}>
      {/* Header */}
      <div
        className="sticky top-0 z-50 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(15, 21, 19, 0.9)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium uppercase tracking-wide">Volver</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={tour.heroImage}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
          }}
        ></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider uppercase">
              {tour.title}
            </h1>
            <p className="text-xl text-yellow-400 font-medium uppercase tracking-wide">
              {tour.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Tour Info Bar */}
      <section className="py-8" style={{ backgroundColor: "#1C2320" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-white">
              <Clock className="h-5 w-5" style={{ color: "#D6FF57" }} />
              <span className="font-medium">{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Users className="h-5 w-5" style={{ color: "#D6FF57" }} />
              <span className="font-medium">{tour.group}</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MapPin className="h-5 w-5" style={{ color: "#D6FF57" }} />
              <span className="font-medium">{tour.region}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold" style={{ color: "#D6FF57" }}>
                {tour.price}
              </span>
              <span className="text-white font-medium">USD/pax</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wide">
                  Descripción del Tour
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {tour.fullDescription}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg"
                      style={{ backgroundColor: "#1A1F1D" }}
                    >
                      <Star
                        className="h-5 w-5 flex-shrink-0"
                        style={{ color: "#D6FF57" }}
                      />
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wide">
                  Itinerario Detallado
                </h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl"
                      style={{ backgroundColor: "#1A1F1D" }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                          style={{
                            backgroundColor: "#D6FF57",
                            color: "#0F1513",
                          }}
                        >
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                          {day.title}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {day.activities.map((activity, actIndex) => (
                          <div
                            key={actIndex}
                            className="flex items-start gap-3"
                          >
                            <Calendar
                              className="h-4 w-4 mt-1 flex-shrink-0"
                              style={{ color: "#8CBF3F" }}
                            />
                            <span className="text-gray-300">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Gallery */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wide">
                  Galería de Fotos
                </h2>
                <div className="">
                  {/* Usar SimpleGallery (PhotoSwipe) para mostrar las imágenes del tour */}
                  <SimpleGallery
                    galleryID={`gallery-${tour.id}`}
                    images={imagesForSimpleGallery}
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Booking */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div
                  className="p-8 rounded-xl"
                  style={{ backgroundColor: "#1A1F1D" }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide text-center">
                    Reserva Ahora
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div
                      className="flex justify-between items-center p-4 rounded-lg"
                      style={{ backgroundColor: "#1C2320" }}
                    >
                      <span className="text-gray-300">Precio por persona:</span>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "#D6FF57" }}
                      >
                        {tour.price} USD
                      </span>
                    </div>

                    <div
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: "#1C2320" }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Shield
                          className="h-5 w-5"
                          style={{ color: "#8CBF3F" }}
                        />
                        <span className="text-white font-medium">Incluye:</span>
                      </div>
                      <ul className="space-y-1">
                        {tour.includes.map((item, index) => (
                          <li key={index} className="text-gray-300 text-sm">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {tour.discount && (
                      <div
                        className="p-4 rounded-lg text-center"
                        style={{ backgroundColor: "#8CBF3F" }}
                      >
                        <p className="text-white font-bold uppercase">
                          {tour.discount}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <a
                      href={`https://wa.me/51942299911?text=Hola,%20me%20interesa%20el%20tour%20${encodeURIComponent(
                        tour.title
                      )}%20-%20${tour.price}%20USD`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-6 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      style={{ backgroundColor: "#D6FF57", color: "#0F1513" }}
                    >
                      WhatsApp Reserva
                    </a>

                    <a
                      href={`mailto:info@inkawalker.com?subject=Consulta%20${encodeURIComponent(
                        tour.title
                      )}&body=Hola,%20me%20interesa%20más%20información%20sobre%20el%20tour%20${encodeURIComponent(
                        tour.title
                      )}.`}
                      className="w-full py-4 px-6 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 border-2"
                      style={{
                        backgroundColor: "transparent",
                        color: "#D6FF57",
                        borderColor: "#D6FF57",
                      }}
                    >
                      Consultar por Email
                    </a>
                  </div>

                  <div
                    className="mt-6 pt-6 border-t"
                    style={{ borderColor: "#33393A" }}
                  >
                    <p className="text-center text-gray-400 text-sm">
                      ¿Tienes preguntas? Contáctanos directamente
                    </p>
                    <p className="text-center  text-white font-bold mt-2">
                      +51 942 299 911
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
