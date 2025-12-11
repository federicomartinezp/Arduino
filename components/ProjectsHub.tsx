import React from 'react';
import { Lightbulb, Lock, ArrowRight } from 'lucide-react';

interface ProjectsHubProps {
  onSelectProject: (projectId: string) => void;
}

const ProjectsHub: React.FC<ProjectsHubProps> = ({ onSelectProject }) => {
  return (
    <div className="animate-fadeIn pb-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Hub de Proyectos</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Aprende haciendo. Selecciona un proyecto para ver el tutorial paso a paso, diagrama de conexiones y código explicado.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Category: BASIC */}
        <div className="col-span-full mb-4 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200"></div>
          <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Nivel Básico</span>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        {/* Project Card: Traffic Light */}
        <div className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:bg-[#e6fcfd] transition-colors">
            <div className="flex gap-4">
               <div className="w-6 h-6 rounded-full bg-red-400 shadow-lg"></div>
               <div className="w-6 h-6 rounded-full bg-yellow-400 shadow-lg"></div>
               <div className="w-6 h-6 rounded-full bg-green-400 shadow-lg"></div>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#00979D] transition-colors">Semáforo Simple</h3>
            <p className="text-slate-600 text-sm mb-6 flex-1">
              Aprende a controlar múltiples LEDs usando tiempos de espera y lógica secuencial. El "Hola Mundo" de la electrónica.
            </p>
            <button 
              onClick={() => onSelectProject('traffic_light')}
              className="w-full py-3 rounded-lg border-2 border-[#00979D] text-[#00979D] font-bold hover:bg-[#00979D] hover:text-white transition-all flex items-center justify-center gap-2"
            >
              Comenzar <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Placeholder: Button */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center opacity-70 grayscale hover:opacity-90 transition-all">
          <div className="bg-slate-200 p-4 rounded-full mb-4">
            <Lock size={24} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-700 mb-2">Botón Pulsador</h3>
          <p className="text-xs text-slate-500 mb-4">Lee entradas digitales y controla con botones</p>
          <span className="text-[10px] bg-slate-200 text-slate-600 px-3 py-1 rounded-full font-medium">Próximamente</span>
        </div>

        {/* Placeholder: Potentiometer */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center opacity-70 grayscale hover:opacity-90 transition-all">
          <div className="bg-slate-200 p-4 rounded-full mb-4">
            <Lock size={24} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-700 mb-2">Lectura Analógica</h3>
          <p className="text-xs text-slate-500 mb-4">Controla brillo de LEDs con potenciómetro</p>
          <span className="text-[10px] bg-slate-200 text-slate-600 px-3 py-1 rounded-full font-medium">Próximamente</span>
        </div>

        {/* Category: INTERMEDIATE */}
        <div className="col-span-full mt-8 mb-4 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200"></div>
          <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Nivel Intermedio</span>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        {/* Placeholder: Servo Motor */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center opacity-70 grayscale hover:opacity-90 transition-all">
          <div className="bg-slate-200 p-4 rounded-full mb-4">
            <Lock size={24} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-700 mb-2">Servo Motor</h3>
          <p className="text-xs text-slate-500 mb-4">Controla motores con movimientos precisos</p>
          <span className="text-[10px] bg-slate-200 text-slate-600 px-3 py-1 rounded-full font-medium">Próximamente</span>
        </div>

        {/* Placeholder: LCD Display */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center opacity-70 grayscale hover:opacity-90 transition-all">
          <div className="bg-slate-200 p-4 rounded-full mb-4">
            <Lock size={24} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-700 mb-2">Pantalla LCD</h3>
          <p className="text-xs text-slate-500 mb-4">Muestra mensajes en una pantalla de texto</p>
          <span className="text-[10px] bg-slate-200 text-slate-600 px-3 py-1 rounded-full font-medium">Próximamente</span>
        </div>

        {/* Placeholder: Ultrasonic Sensor */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center opacity-70 grayscale hover:opacity-90 transition-all">
          <div className="bg-slate-200 p-4 rounded-full mb-4">
            <Lock size={24} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-700 mb-2">Sensor Ultrasónico</h3>
          <p className="text-xs text-slate-500 mb-4">Mide distancias como un radar de murciélago</p>
          <span className="text-[10px] bg-slate-200 text-slate-600 px-3 py-1 rounded-full font-medium">Próximamente</span>
        </div>

      </div>
    </div>
  );
};

export default ProjectsHub;