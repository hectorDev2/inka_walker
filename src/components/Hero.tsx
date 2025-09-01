import React from "react";
import { MapPin, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider uppercase">
          Viajes de Promoción
          <span className="block text-yellow-400">Inolvidables</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Empresa formal registrada en SUNAT y Transportes. Especialistas en
          viajes de promoción, pasantías y grupos locales, nacionales e
          internacionales.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-white">
            <MapPin className="h-5 w-5 text-yellow-400" />
            <span className="font-medium">Cusco, Perú</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Phone className="h-5 w-5 text-yellow-400" />
            <span className="font-bold">+51 942 299 911</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
            Ver Paquetes
          </button>
          <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide border border-gray-600 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            Contactar Ahora
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
