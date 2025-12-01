import { GoogleGenAI } from "@google/genai";

export const explainComponent = async (componentName: string, context: string): Promise<string> => {
  try {
    // Check for API Key availability defensively
    // We check typeof process first to avoid ReferenceError in pure browser environments
    let apiKey = '';
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      apiKey = process.env.API_KEY;
    }
    
    if (!apiKey) {
      console.warn("API Key is missing for Google GenAI.");
      return "IA No disponible en este momento (Falta configuración).";
    }

    // Initialize Gemini Client lazily inside the function
    const ai = new GoogleGenAI({ apiKey });
    
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
    return "IA No disponible en este momento.";
  }
};