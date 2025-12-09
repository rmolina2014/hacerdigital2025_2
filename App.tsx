import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AiConsultant from './components/AiConsultant';
import DataVizDemo from './components/DataVizDemo';
import MapDemo from './components/MapDemo';
import ContactForm from './components/ContactForm';
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
      
      <ContactForm />

      <Footer />
    </div>
  );
}

export default App;