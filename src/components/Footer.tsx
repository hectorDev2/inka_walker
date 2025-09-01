import React from 'react';
import { Mountain, Facebook, Instagram, Globe, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Mountain className="h-8 w-8 text-yellow-400" />
              <span className="text-white font-bold text-2xl tracking-wide uppercase">
                Inka Walker
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empresa formal registrada en SUNAT y Transportes, especializada en viajes de promoción, 
              pasantías y grupos locales, nacionales e internacionales. Experiencia garantizada en 
              Cusco y todo el Perú.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@inkawalker.com"
                className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">
              Servicios
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Viajes de Promoción
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Pasantías Educativas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Grupos Corporativos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Tours Nacionales
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">
              Contacto
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <p className="text-white font-semibold">+51 942 299 911</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-semibold">info@inkawalker.com</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Ubicación</p>
                <p className="text-white font-semibold">Cusco, Perú</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Web</p>
                <p className="text-white font-semibold">www.inkawalker.com</p>
                <p className="text-gray-500 text-xs">(en desarrollo)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Inka Walker Turismo. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Cancelaciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}