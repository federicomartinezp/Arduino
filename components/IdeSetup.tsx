import React from 'react';
import { IDE_STEPS } from '../constants';
import { Download, Monitor, Settings, Zap, CheckCircle2 } from 'lucide-react';

const IdeSetup: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Instalando tu Herramienta de Trabajo</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Para darle vida a tu Arduino, necesitas el <strong className="text-[#00979D]">Arduino IDE</strong>. Es un programa gratuito donde escribes las órdenes (código) y se las envías a la placa.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Step List */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg border border-slate-100 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Settings size={120} />
          </div>
          <h3 className="text-xl font-bold text-[#00979D] mb-8 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00979D] text-white text-sm">1</span>
            Guía Paso a Paso
          </h3>
          
          <div className="space-y-8 relative z-10">
            {IDE_STEPS.map((step, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-col items-center hidden sm:flex">
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors
                     ${index < 4 ? 'bg-slate-100 text-slate-400 border-slate-200' : 'bg-green-50 text-green-600 border-green-200'}`}>
                     {index + 1}
                   </div>
                   {index < IDE_STEPS.length - 1 && <div className="w-0.5 h-full bg-slate-100 my-2"></div>}
                </div>
                <div className="flex-1 pb-2">
                   <p className="text-slate-700 leading-relaxed font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Sidebar */}
        <div className="space-y-6 md:sticky md:top-8">
          <div className="bg-gradient-to-br from-[#00979D] to-[#007f85] rounded-2xl p-8 text-white shadow-xl text-center transform transition-transform hover:-translate-y-1 duration-300">
            <Download size={56} className="mx-auto mb-6 opacity-90 drop-shadow-md" />
            <h3 className="text-2xl font-bold mb-2">Descargar IDE</h3>
            <p className="text-cyan-50 mb-8 text-sm font-medium opacity-90">Versión 2.0+ recomendada</p>
            <a 
              href="https://www.arduino.cc/en/software" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#00979D] font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 hover:text-slate-900 transition-all"
            >
              Ir a la web oficial <Download size={16} />
            </a>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100 shadow-sm">
            <h4 className="font-bold text-yellow-800 mb-4 flex items-center gap-2 text-lg">
              <Zap size={20} className="fill-yellow-500 text-yellow-600" /> 
              Tu Primera Prueba
            </h4>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex gap-3">
                 <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                 <p>Abre: <strong>Archivo {'>'} Ejemplos {'>'} 01.Basics {'>'} Blink</strong></p>
              </div>
              <div className="flex gap-3">
                 <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                 <p>Haz clic en la <strong>Flecha (Subir)</strong>.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-yellow-200 text-center font-medium text-yellow-900">
                 ¿El LED de la placa parpadea? <br/>¡Lo lograste! 🎉
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeSetup;