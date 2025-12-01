import React, { useState } from 'react';
import { TRAFFIC_LIGHT_CODE } from '../constants';
import CodeBlock from './CodeBlock';
import { ChevronRight, ChevronLeft, Lightbulb, ArrowLeft } from 'lucide-react';

interface TutorialTrafficLightProps {
  onBack: () => void;
}

const TutorialTrafficLight: React.FC<TutorialTrafficLightProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Materiales Necesarios",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc list-inside space-y-2 text-slate-700 col-span-2 md:col-span-1">
            <li>1x Arduino UNO o Nano</li>
            <li>1x Protoboard (Breadboard)</li>
            <li>3x LEDs (Rojo, Amarillo, Verde)</li>
            <li>3x Resistencias de 220Ω (Rojo-Rojo-Marrón)</li>
            <li>4x Cables de conexión (Jumpers)</li>
          </ul>
          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-center col-span-2 md:col-span-1">
             <div className="flex gap-4">
                <div className="w-4 h-4 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50"></div>
                <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
             </div>
          </div>
        </div>
      )
    },
    {
      title: "Diagrama de Conexión",
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">Conecta los componentes siguiendo este esquema:</p>
          <div className="bg-slate-900 p-6 rounded-lg text-white font-mono text-sm shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-20 text-6xl font-bold">SCHEMATIC</div>
            <div className="space-y-2 relative z-10">
              <div className="flex items-center gap-2"><span className="w-16 text-red-400 font-bold">LED Rojo</span> <span>(+) Patilla larga &rarr; Pin 13</span></div>
              <div className="flex items-center gap-2"><span className="w-16 text-yellow-400 font-bold">LED Am.</span> <span>(+) Patilla larga &rarr; Pin 12</span></div>
              <div className="flex items-center gap-2"><span className="w-16 text-green-400 font-bold">LED Vrd</span> <span>(+) Patilla larga &rarr; Pin 11</span></div>
              <div className="flex items-center gap-2 border-t border-slate-700 pt-2"><span className="w-16 text-slate-400">GND</span> <span>(-) Patilla corta de TODOS los LEDs &rarr; Resistencia &rarr; GND Arduino</span></div>
            </div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-sm text-blue-700">
              <strong>Tip:</strong> Las resistencias son necesarias para proteger los LEDs y que no se quemen. Se conectan usualmente entre la patilla negativa (cátodo) del LED y Tierra (GND).
            </p>
          </div>
        </div>
      )
    },
    {
      title: "El Código",
      content: (
        <div>
          <p className="text-slate-700 mb-2">Copia y pega este código en tu IDE de Arduino:</p>
          <CodeBlock code={TRAFFIC_LIGHT_CODE} />
        </div>
      )
    },
    {
      title: "Explicación del Código",
      content: (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">void setup()</h4>
            <p className="text-sm text-slate-600">Se ejecuta una sola vez al iniciar. Aquí usamos <code>pinMode</code> para decirle al Arduino que usaremos los pines 11, 12 y 13 como SALIDAS de energía (para encender luces).</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">void loop()</h4>
            <p className="text-sm text-slate-600">Se repite infinitamente. Usamos <code>digitalWrite(pin, HIGH/LOW)</code> para encender o apagar. <code>delay(milisegundos)</code> pausa el programa para mantener la luz encendida el tiempo deseado.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-[#00979D] transition-colors text-sm font-bold uppercase tracking-wide"
        >
          <ArrowLeft size={16} /> Volver a Proyectos
        </button>
      </div>

      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
          <Lightbulb className="text-yellow-500" /> Semáforo Simple
        </h2>
        <p className="text-slate-500">Tu primer proyecto de automatización</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        {/* Progress Bar */}
        <div className="bg-slate-100 h-2 w-full">
          <div 
            className="h-full bg-[#00979D] transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Paso {currentStep + 1} de {steps.length}
            </span>
            <h3 className="text-xl font-bold text-slate-800">{steps[currentStep].title}</h3>
          </div>

          <div className="min-h-[300px] animate-fadeIn">
            {steps[currentStep].content}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="bg-slate-50 p-6 flex justify-between items-center border-t border-slate-200">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:shadow-none transition-all"
          >
            <ChevronLeft size={20} /> Anterior
          </button>

          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentStep ? 'bg-[#00979D]' : 'bg-slate-300'}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#00979D] text-white hover:bg-[#007f85] disabled:opacity-30 disabled:bg-slate-400 transition-all shadow-md"
          >
            {currentStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'} <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialTrafficLight;