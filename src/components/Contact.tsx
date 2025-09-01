import React from 'react';
import { Phone, MapPin, Mail, MessageCircle, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide uppercase">
            Contacta
            <span className="block text-yellow-400">Con Nosotros</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ¿Listo para tu aventura? Contáctanos ahora y personaliza tu viaje de promoción.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="bg-yellow-400 p-3 rounded-lg">
                <MessageCircle className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                  WhatsApp Directo
                </h3>
                <p className="text-gray-400 mb-3">
                  Respuesta inmediata para consultas y cotizaciones personalizadas.
                </p>
                <a
                  href="https://wa.me/51942299911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  +51 942 299 911
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="bg-green-500 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                  Ubicación
                </h3>
                <p className="text-gray-400 mb-3">
                  Nos ubicamos en el corazón del turismo peruano.
                </p>
                <p className="text-white font-semibold">
                  Cusco, Perú
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="bg-blue-500 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                  Email Corporativo
                </h3>
                <p className="text-gray-400 mb-3">
                  Para consultas formales y cotizaciones detalladas.
                </p>
                <a
                  href="mailto:info@inkawalker.com"
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  info@inkawalker.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="bg-purple-500 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                  Horarios de Atención
                </h3>
                <p className="text-gray-400 mb-3">
                  Estamos disponibles para ayudarte con tu viaje.
                </p>
                <div className="text-white">
                  <p className="font-semibold">Lunes - Viernes: 8:00 AM - 8:00 PM</p>
                  <p className="font-semibold">Sábados: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">WhatsApp 24/7 para emergencias</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-yellow-400 to-green-500 p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
              ¡Reserva Ahora!
            </h3>
            <p className="text-gray-800 text-lg mb-8 leading-relaxed">
              Paquetes especiales para grupos estudiantiles con descuentos por volumen. 
              Guías expertos y transporte seguro garantizado.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white/20 p-4 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">✓ Empresa Formal Registrada</h4>
                <p className="text-gray-800 text-sm">SUNAT y Transportes - Seguridad garantizada</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">✓ Descuentos Especiales</h4>
                <p className="text-gray-800 text-sm">Hasta 15% de descuento para grupos grandes</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">✓ Experiencia Garantizada</h4>
                <p className="text-gray-800 text-sm">Más de 10 años en turismo educativo</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/51942299911?text=Hola,%20me%20interesa%20información%20sobre%20paquetes%20turísticos%20para%20grupos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="mailto:info@inkawalker.com?subject=Consulta%20Paquetes%20Turísticos"
                className="flex-1 bg-white text-gray-900 py-4 px-6 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}