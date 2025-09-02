import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Users, Star } from "lucide-react";
import { tourData } from "../data/tourData";
import type { Tour } from "../data/tourData";
import ViewTransition from "../shared/ViewTransitionWrapper";

export function TourPackages() {
  const [activeTab, setActiveTab] = useState("cusco");

  // Filter tours by region
  const getPackagesByRegion = (region: string) => {
    const regionMap: { [key: string]: string } = {
      cusco: "Cusco",
      sur: "Sur",
      costa: "Costa",
    };
    return tourData.filter((tour) => tour.region === regionMap[region]);
  };

  const tabs = [
    { id: "cusco", label: "Cusco", subtitle: "El Corazón del Imperio" },
    { id: "sur", label: "Sur", subtitle: "Arequipa, Puno, Tacna" },
    { id: "costa", label: "Costa", subtitle: "Ica, Paracas, Huacachina" },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide uppercase">
            Paquetes
            <span className="block text-yellow-400">Turísticos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre los mejores destinos del Perú con paquetes especiales para
            grupos estudiantiles.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-800 rounded-xl p-2 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-yellow-400 text-gray-900"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                <div className="text-center">
                  <div className="text-lg">{tab.label}</div>
                  <div className="text-xs opacity-75">{tab.subtitle}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {getPackagesByRegion(activeTab).map((pkg: Tour, index: number) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <Link to={`/tour/${pkg.id}`}>
                  <ViewTransition name={`place-image-${pkg.id}`}>
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </ViewTransition>
                </Link>

                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm">
                    {pkg.price}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 text-xs">
                    <span className="bg-black/60 text-white px-2 py-1 rounded flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {pkg.duration}
                    </span>
                    <span className="bg-black/60 text-white px-2 py-1 rounded flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {pkg.group}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                  {pkg.title}
                </h3>
                <p className="text-yellow-400 text-sm font-medium mb-3">
                  {pkg.subtitle}
                </p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-2 mb-6">
                  {pkg.highlights.map((highlight: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <Star className="h-3 w-3 text-yellow-400 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <Link
                  to={`/tour/${pkg.id}`}
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-green-400 transition-colors duration-300 block text-center"
                >
                  Más Información
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-800 p-6 rounded-xl">
            <p className="text-yellow-400 font-bold text-lg uppercase mb-2">
              ¡Descuentos Especiales!
            </p>
            <p className="text-gray-300">
              Paquetes personalizados para tu grupo. Descuentos por volumen para
              promociones estudiantiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
