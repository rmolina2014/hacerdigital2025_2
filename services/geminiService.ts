import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeProjectIdea = async (idea: string): Promise<AnalysisResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Analiza la siguiente idea de proyecto para un cliente de 'Hacer Digital' (una empresa de desarrollo de software y ciencia de datos): "${idea}". 
      Provee una respuesta estructurada sugiriendo cómo aplicar tecnologías modernas.`,
      config: {
        systemInstruction: `Eres un arquitecto de soluciones senior en Hacer Digital. Tu objetivo es impresionar al cliente potencial explicando cómo su idea puede potenciarse mediante:
        1. Desarrollo de Software a medida.
        2. Análisis de Datos / Ciencia de Datos (KPIs).
        3. Inteligencia Geoespacial (Mapas).
        Sé conciso, profesional y persuasivo.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING, description: "Un resumen ejecutivo breve y atractivo." },
            suggestedKPIs: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3-4 KPIs clave que deberían medir." },
            techStack: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Tecnologías recomendadas (ej: React, Python, Leaflet)." },
            geoStrategy: { type: Type.STRING, description: "Cómo la visualización geoespacial agrega valor al proyecto." }
          },
          required: ["summary", "suggestedKPIs", "techStack", "geoStrategy"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AnalysisResult;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw new Error("No se pudo generar el análisis. Inténtalo de nuevo.");
  }
};