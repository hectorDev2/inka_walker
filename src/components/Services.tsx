import { Users, Shield, Award, Globe } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Users,
      title: "Grupos Especializados",
      description:
        "Viajes diseñados para promociones estudiantiles, pasantías y grupos corporativos.",
    },
    {
      icon: Shield,
      title: "Empresa Formal",
      description:
        "Registrada en SUNAT y Transportes. Seguridad y confianza garantizadas.",
    },
    {
      icon: Award,
      title: "Guías Expertos",
      description:
        "Personal altamente calificado con amplia experiencia en turismo educativo.",
    },
    {
      icon: Globe,
      title: "Cobertura Nacional",
      description:
        "Servicios en Cusco, Sur del Perú, Costa y destinos internacionales.",
    },
  ];

  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide uppercase">
            ¿Por Qué Elegir
            <span className="block text-yellow-400">Inka Walker?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experiencia garantizada en cada destino con descuentos especiales
            para grupos estudiantiles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="mb-6">
                <service.icon className="h-12 w-12 text-yellow-400 group-hover:text-green-400 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold uppercase tracking-wide">
            <Award className="h-5 w-5 mr-2" />
            Descuentos por Volumen - Transporte Seguro
          </div>
        </div>
      </div>
    </section>
  );
}
