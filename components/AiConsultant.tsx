import React, { useState } from 'react';
import { Bot, Send, Sparkles, Loader2, Target, Map as MapIcon, Database } from 'lucide-react';
import { analyzeProjectIdea } from '../services/geminiService';
import { AnalysisResult } from '../types';

const AiConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResult(null);
    try {
      const analysis = await analyzeProjectIdea(prompt);
      setResult(analysis);
    } catch (error) {
      alert('Error consultando a la IA. Verifique la API Key o intente de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultant" className="py-24 bg-gradient-to-b from-slate-900 to-indigo-950/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-600/20 rounded-full mb-4">
              <Bot className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Arquitecto de Soluciones AI
            </h2>
            <p className="text-slate-400 text-lg">
              Cuéntanos tu idea (ej: "Sistema de gestión para flota de camiones" o "App de delivery de comida"). 
              Nuestra IA analizará cómo integrar <strong>Data Science</strong> y <strong>Mapas</strong> en tu proyecto.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-2xl">
            <form onSubmit={handleAnalyze} className="relative mb-8">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe tu proyecto aquí..."
                className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-xl px-6 py-5 pr-36 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-700 text-lg shadow-inner"
              />
              <button
                type="submit"
                disabled={loading || !prompt}
                className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 text-white px-6 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                <span className="hidden sm:inline">Analizar</span>
              </button>
            </form>

            {result && (
              <div className="animate-fade-in space-y-6">
                <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Sparkles className="text-yellow-400 w-5 h-5" /> 
                    Resumen Ejecutivo
                  </h3>
                  <p className="text-slate-300 leading-relaxed">{result.summary}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                    <h4 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4" /> KPIs Sugeridos
                    </h4>
                    <ul className="space-y-2">
                      {result.suggestedKPIs.map((kpi, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span> {kpi}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors">
                    <h4 className="font-semibold text-teal-400 mb-3 flex items-center gap-2">
                      <MapIcon className="w-4 h-4" /> Geo-Estrategia
                    </h4>
                    <p className="text-sm text-slate-300">{result.geoStrategy}</p>
                  </div>

                  <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                    <h4 className="font-semibold text-purple-400 mb-3 flex items-center gap-2">
                      <Database className="w-4 h-4" /> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {result.techStack.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded border border-purple-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiConsultant;