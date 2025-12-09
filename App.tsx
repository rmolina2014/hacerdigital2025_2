import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AiConsultant from './components/AiConsultant';
import DataVizDemo from './components/DataVizDemo';
import MapDemo from './components/MapDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      
      <Services />

      {/* Interactive Demos Section */}
      <section id="analytics" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Poder Visual e Inteligente
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Nuestros nuevos sistemas integran paneles de control y mapas en tiempo real 
              para que tomes decisiones basadas en datos, no en intuiciones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div id="kpi-demo">
              <DataVizDemo />
            </div>
            <div id="maps">
              <MapDemo />
            </div>
          </div>
        </div>
      </section>

      <AiConsultant />
      
      <section id="contact" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto glass-panel p-10 rounded-3xl border border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.1)]">
            <h2 className="text-3xl font-bold text-white mb-6">¿Listo para innovar?</h2>
            <p className="text-slate-300 mb-8">
              Agenda una reunión de 15 minutos para descubrir cómo aplicar Data Science y Mapas en tu negocio.
            </p>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/40">
              Agendar Reunión Ahora
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;