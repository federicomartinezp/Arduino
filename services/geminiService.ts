import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const explainComponent = async (componentName: string, context: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Eres un experto profesor de robótica y programación para principiantes.
      Explica brevemente qué es y para qué sirve: "${componentName}" en el contexto de una placa Arduino (${context}).
      Mantén la explicación sencilla, amigable y menor a 100 palabras.
      Si aplica, da un ejemplo de la vida real.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "No se pudo generar una explicación en este momento.";
  } catch (error) {
    console.error("Error fetching explanation from Gemini:", error);
    return "Hubo un error al consultar al asistente inteligente.";
  }
};
