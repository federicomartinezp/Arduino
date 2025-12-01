import React, { useState } from 'react';
import { BoardType, PinInfo } from '../types';
import { UNO_PINS, NANO_PINS } from '../constants';
import CodeBlock from './CodeBlock';
import { explainComponent } from '../services/geminiService';
import { Info, Sparkles, X, Plug } from 'lucide-react';

interface BoardVisualizerProps {
  type: BoardType;
}

const BoardVisualizer: React.FC<BoardVisualizerProps> = ({ type }) => {
  const [selectedPin, setSelectedPin] = useState<PinInfo | null>(null);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const pins = type === BoardType.UNO ? UNO_PINS : NANO_PINS;

  // Function to generate a pleasant UI "blip" sound using Web Audio API
  const playClickSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      // A soft sine wave that drops in pitch (UI "bubble" pop sound)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.15);

      // Quick fade out
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {
      console.error("Audio feedback error", e);
    }
  };

  // Function to handle clicking a pin
  const handlePinClick = (pin: PinInfo) => {
    playClickSound();
    setSelectedPin(pin);
    setAiExplanation(null); // Reset AI explanation when switching pins
  };

  const handleAiExplain = async () => {
    if (!selectedPin) return;
    playClickSound(); // Feedback for button press too
    setLoadingAi(true);
    const explanation = await explainComponent(selectedPin.label, `Placa Arduino ${type}`);
    setAiExplanation(explanation);
    setLoadingAi(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full min-h-[500px]">
      {/* Board Display Area */}
      <div className="flex-1 bg-slate-100 rounded-xl p-8 relative flex items-center justify-center border border-slate-200 shadow-inner overflow-hidden select-none min-h-[400px]">
        <h3 className="absolute top-4 left-4 text-slate-400 font-bold tracking-widest opacity-50 text-xl pointer-events-none">
          ARDUINO {type}
        </h3>
        
        {/* CSS-based Board Representation */}
        <div 
          className={`relative shadow-2xl transition-all duration-500`}
          style={{ 
            backgroundColor: '#00979D', // Arduino Teal
            // Landscape layout for UNO based on image reference, Portrait for Nano
            width: type === BoardType.UNO ? '460px' : '140px',
            height: type === BoardType.UNO ? '320px' : '400px',
            borderRadius: type === BoardType.UNO ? '10px' : '4px',
          }} 
        >
          {/* Pins / Hotspots */}
          {pins.map((pin) => (
            <button
              key={pin.id}
              onClick={() => handlePinClick(pin)}
              className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full border-2 shadow-lg transition-transform duration-200 transform hover:scale-125 active:scale-90 focus:outline-none z-20 flex items-center justify-center
                ${selectedPin?.id === pin.id 
                  ? 'bg-yellow-400 border-white animate-pulse ring-4 ring-yellow-400/30' 
                  : 'bg-white/80 border-slate-600 hover:bg-yellow-100 hover:border-yellow-500'}`}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              aria-label={pin.label}
            >
              <div className="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
            </button>
          ))}

          {/* Decorative PCB Elements */}
          <div className="absolute inset-2 border-2 border-white/20 rounded opacity-50 pointer-events-none"></div>
          
          {type === BoardType.UNO && (
            <>
              {/* 1. USB Port (Large Silver Square - Left Top) */}
              <div className="absolute top-[15%] left-[-10px] w-14 h-16 bg-slate-300 border-2 border-slate-400 rounded-r-md shadow-sm z-10"></div>
              
              {/* 2. Power Jack (Black Barrel - Left Bottom) */}
              <div className="absolute bottom-[10%] left-[-5px] w-12 h-14 bg-black border border-slate-700 rounded-r-md shadow-sm z-10"></div>
              
              {/* Digital Headers (Top Edge) */}
              <div className="absolute top-[2%] right-[25%] w-32 h-4 bg-black/80 flex gap-0.5 px-1 items-center justify-center">
                {Array.from({length: 8}).map((_, i) => <div key={i} className="w-0.5 h-0.5 bg-slate-400 rounded-full mx-auto" />)}
              </div>
              <div className="absolute top-[2%] right-[5%] w-24 h-4 bg-black/80 flex gap-0.5 px-1 items-center justify-center">
                 {Array.from({length: 6}).map((_, i) => <div key={i} className="w-0.5 h-0.5 bg-slate-400 rounded-full mx-auto" />)}
              </div>

              {/* Analog & Power Headers (Bottom Edge) */}
              <div className="absolute bottom-[2%] right-[50%] w-24 h-4 bg-black/80 flex gap-0.5 px-1 items-center justify-center">
                 {Array.from({length: 6}).map((_, i) => <div key={i} className="w-0.5 h-0.5 bg-slate-400 rounded-full mx-auto" />)}
              </div>
              <div className="absolute bottom-[2%] right-[20%] w-24 h-4 bg-black/80 flex gap-0.5 px-1 items-center justify-center">
                 {Array.from({length: 6}).map((_, i) => <div key={i} className="w-0.5 h-0.5 bg-slate-400 rounded-full mx-auto" />)}
              </div>

              {/* 6. Microcontroller (Long Black Chip - Bottom Right Quadrant) */}
              <div className="absolute bottom-[30%] right-[15%] w-36 h-10 bg-slate-900 rounded-sm flex items-center justify-center shadow-md">
                 <span className="text-[10px] text-slate-500 tracking-widest font-mono">ATMEGA328P</span>
                 <div className="absolute -left-1 w-2 h-full border-r border-slate-700"></div>
                 <div className="absolute -right-1 w-2 h-full border-l border-slate-700"></div>
              </div>

              {/* 13. Reset Button (Top Leftish) */}
              <div className="absolute top-[10%] left-[18%] w-6 h-6 bg-white/20 rounded-sm flex items-center justify-center border border-white/40">
                <div className="w-4 h-4 bg-red-500 rounded-full shadow-inner"></div>
              </div>

              {/* ICSP Header (Far Right) */}
              <div className="absolute top-[45%] right-[2%] w-4 h-8 grid grid-cols-2 gap-1">
                 {Array.from({length: 6}).map((_, i) => <div key={i} className="w-1 h-1 bg-yellow-500 rounded-full" />)}
              </div>

              {/* Labels */}
              <div className="absolute top-[35%] right-[25%] text-white font-bold text-2xl tracking-tighter opacity-90 font-sans italic">
                UNO
              </div>
              <div className="absolute top-[45%] right-[25%] text-white text-[10px] tracking-widest opacity-80">
                ARDUINO
              </div>
              <div className="absolute top-[30%] left-[30%] text-white text-[8px] opacity-70 rotate-90">
                MADE IN ITALY
              </div>
            </>
          )}

          {type === BoardType.NANO && (
             <>
              {/* Mini USB Top */}
              <div className="absolute top-[-5px] left-[50%] transform -translate-x-1/2 w-10 h-8 bg-slate-300 rounded-sm border border-slate-400"></div>
              
              {/* Side Headers */}
              <div className="absolute top-[10%] left-[2%] w-3 h-[80%] bg-black/30 flex flex-col justify-between py-1"></div>
              <div className="absolute top-[10%] right-[2%] w-3 h-[80%] bg-black/30 flex flex-col justify-between py-1"></div>

              {/* Chip Rotated */}
              <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rotate-45 bg-slate-900 rounded-sm flex items-center justify-center shadow-sm">
                <div className="w-8 h-8 border border-slate-600 rounded-sm"></div>
              </div>
              
              <div className="absolute bottom-[10%] w-full text-center text-white text-[10px] font-bold opacity-80">
                NANO
              </div>
            </>
          )}
        </div>
        
        <p className="absolute bottom-4 text-center text-slate-400 text-sm flex items-center gap-2">
          <Info size={14} /> Haz clic en los puntos blancos para interactuar
        </p>
      </div>

      {/* Info Panel */}
      <div className="lg:w-96 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full overflow-y-auto">
        {selectedPin ? (
          <div className="animate-fadeIn">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-[#00979D]">{selectedPin.label}</h3>
              <button 
                onClick={() => setSelectedPin(null)} 
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-4">
              <span className={`inline-block px-2 py-1 rounded text-xs font-bold uppercase tracking-wider
                ${selectedPin.type === 'digital' ? 'bg-green-100 text-green-700' :
                  selectedPin.type === 'analog' ? 'bg-blue-100 text-blue-700' :
                  selectedPin.type === 'power' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'
                }`}>
                {selectedPin.type}
              </span>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              {selectedPin.description}
            </p>

            {/* Connection Diagram / Tip Section */}
            {selectedPin.connectionTip && (
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-6">
                <h4 className="flex items-center gap-2 text-sm font-bold text-orange-700 mb-2">
                  <Plug size={16} /> Conexión Sugerida
                </h4>
                <p className="text-sm text-slate-700 leading-snug">
                  {selectedPin.connectionTip}
                </p>
              </div>
            )}

            {selectedPin.codeExample && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-800 mb-1">Ejemplo de Código:</p>
                <CodeBlock code={selectedPin.codeExample} />
              </div>
            )}

            {/* AI Assistant Section */}
            <div className="mt-auto pt-4 border-t border-slate-100">
              {!aiExplanation ? (
                <button
                  onClick={handleAiExplain}
                  disabled={loadingAi}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:from-violet-700 hover:to-indigo-700 transition-all shadow-md disabled:opacity-50 font-medium text-sm active:scale-95"
                >
                  {loadingAi ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <Sparkles size={16} />
                  )}
                  {loadingAi ? 'Consultando IA...' : 'Explicación detallada (IA)'}
                </button>
              ) : (
                <div className="bg-violet-50 rounded-lg p-4 border border-violet-100 shadow-sm animate-fadeIn">
                  <div className="flex items-center gap-2 mb-2 text-violet-700 font-bold text-sm uppercase tracking-wide">
                    <Sparkles size={14} /> El Profe IA dice:
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    "{aiExplanation}"
                  </p>
                </div>
              )}
            </div>

          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 p-8">
            <Info size={64} className="mb-6 opacity-20" />
            <h4 className="text-lg font-semibold text-slate-500 mb-2">Explorador Interactivo</h4>
            <p className="text-sm">Selecciona cualquier componente brillante en la placa para ver:</p>
            <ul className="text-sm mt-4 space-y-2 text-left w-full max-w-[200px] mx-auto opacity-70">
              <li className="flex gap-2 items-center"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Qué hace</li>
              <li className="flex gap-2 items-center"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Cómo conectarlo</li>
              <li className="flex gap-2 items-center"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Código de ejemplo</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardVisualizer;