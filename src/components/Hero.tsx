import { MapPin, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/machupicchu-hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider uppercase">
          Viajes de Promoción
          <span className="block text-yellow-400">Inolvidables</span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
          Empresa formal registrada en SUNAT y Transportes. Especialistas en
          viajes de promoción, pasantías y grupos locales, nacionales e
          internacionales.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-white">
            <MapPin className="h-5 w-5 text-yellow-400" />
            <span className="font-medium">Cusco, Perú</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Phone className="h-5 w-5 text-yellow-400" />
            <span className="font-bold">+51 942 299 911</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 mt-6 mb-8 sm:mt-4 sm:mb-0 px-4 sm:px-0">
          <button className="bg-yellow-400 text-gray-900 px-3 py-2 sm:px-5 sm:py-2.5 md:px-8 md:py-4 rounded text-xs sm:text-sm md:text-base leading-tight font-semibold md:font-bold normal-case md:uppercase tracking-normal sm:tracking-wide hover:bg-yellow-300 transition-all duration-300 md:transform md:hover:scale-105">
            Ver Paquetes
          </button>
          <button className="bg-gray-800 text-white px-3 py-2 sm:px-5 sm:py-2.5 md:px-8 md:py-4 rounded text-xs sm:text-sm md:text-base leading-tight font-semibold md:font-bold normal-case md:uppercase tracking-normal sm:tracking-wide border border-gray-600 hover:bg-gray-700 transition-all duration-300 md:transform md:hover:scale-105">
            Contactar Ahora
          </button>
        </div>
      </div>
    </section>
  );
}
