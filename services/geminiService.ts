import { GoogleGenAI } from "@google/genai";

export const explainComponent = async (componentName: string, context: string): Promise<string> => {
  try {
    // Vite reemplazará 'process.env.API_KEY' con el valor real en tiempo de construcción.
    // Usamos una variable intermedia para evitar errores de linter o runtime directos si process no existe.
    const apiKey = process.env.API_KEY;
    
    if (!apiKey || apiKey === "undefined" || apiKey === "") {
      console.warn("API Key is missing or invalid.");
      return "IA No disponible. (Configura tu API_KEY en el archivo .env o en Vercel)";
    }

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
    return "IA No disponible en este momento. Intenta más tarde.";
  }
};