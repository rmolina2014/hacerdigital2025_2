import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Hacer<span className="text-blue-500">Digital</span></h3>
            <p className="text-slate-400 mb-6">
              Desarrollo de software de élite potenciado por inteligencia artificial y análisis geoespacial.
              Creamos el futuro de tu negocio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contacto</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>contacto@hacerdigital.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+54 9 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Servicios Nuevos</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Machine Learning Integration</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Business Intelligence Dashboards</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Route Optimization Maps</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Real-time Data Streaming</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Hacer Digital. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;