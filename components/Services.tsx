import React from 'react';
import { Database, Globe, Layers, Map, TrendingUp, Cpu } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'software',
    title: 'Desarrollo de Software',
    description: 'Aplicaciones web y móviles a medida utilizando React, Node.js y arquitecturas cloud-native.',
    icon: <Globe className="w-8 h-8 text-blue-400" />,
  },
  {
    id: 'analytics',
    title: 'Ciencia de Datos Aplicada',
    description: 'Modelos predictivos y análisis estadístico integrados directamente en tus sistemas operativos.',
    icon: <Cpu className="w-8 h-8 text-indigo-400" />,
  },
  {
    id: 'kpi',
    title: 'Dashboards de KPIs',
    description: 'Paneles de control ejecutivos interactivos para visualizar métricas críticas en tiempo real.',
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
  },
  {
    id: 'geo',
    title: 'Inteligencia Geoespacial',
    description: 'Mapas interactivos con capas de calor, rutas óptimas y análisis de zonas de cobertura.',
    icon: <Map className="w-8 h-8 text-teal-400" />,
  },
  {
    id: 'integration',
    title: 'Integración de APIs',
    description: 'Conectamos tus sistemas existentes con nuevas fuentes de datos y herramientas de terceros.',
    icon: <Layers className="w-8 h-8 text-purple-400" />,
  },
  {
    id: 'backend',
    title: 'Ingeniería de Datos',
    description: 'Pipelines ETL robustos y almacenes de datos optimizados para alta performance.',
    icon: <Database className="w-8 h-8 text-rose-400" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Expandimos nuestras capacidades para ofrecer soluciones integrales que van más allá del código tradicional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-8 rounded-2xl hover:translate-y-[-5px] transition-transform duration-300 group cursor-default"
            >
              <div className="mb-6 p-4 rounded-xl bg-slate-800 w-fit group-hover:bg-slate-700 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;