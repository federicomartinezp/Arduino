import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Volume2 } from 'lucide-react';

const IntroAnimation: React.FC = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [consoleText, setConsoleText] = useState("> Esperando...");

  const handleUpload = () => {
    if (isUploading) return;
    setIsUploading(true);
    setConsoleText("> Compilando programa...");
    
    setTimeout(() => {
      setConsoleText("> Subiendo a la placa... [RX/TX]");
    }, 1000);

    setTimeout(() => {
      setConsoleText("> ¡Carga completa! Ejecutando...");
      setIsUploading(false);
      setIsBlinking(true);
      // Blink for 5 seconds then stop
      setTimeout(() => {
        setIsBlinking(false);
        setConsoleText("> Programa finalizado.");
      }, 5000);
    }, 2500);
  };

  const playBuzzer = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) {
        setConsoleText("> Audio no soportado en este navegador.");
        return;
      }
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'square'; // Buzzer sound
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
      setConsoleText("> Sonido: Beep! 🎵");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-900 rounded-2xl p-8 shadow-2xl overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00979D] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>

      {/* Interactive Board Visual */}
      <div className="relative flex-1 min-h-[300px] flex items-center justify-center w-full">
        <div className="relative w-64 h-44 bg-[#00979D] rounded-lg shadow-xl border-2 border-[#007f85] transition-transform hover:scale-105 duration-500">
          {/* USB */}
          <div className="absolute top-4 -left-3 w-8 h-10 bg-slate-300 rounded-l border border-slate-400"></div>
          {/* Chip */}
          <div className="absolute bottom-8 right-12 w-20 h-6 bg-slate-900 rounded flex items-center justify-center">
            <span className="text-[6px] text-slate-500 font-mono">ATMEGA</span>
          </div>
          {/* TX/RX LEDs */}
          <div className="absolute top-10 right-24 flex gap-1">
            <div className={`w-2 h-2 rounded-full ${isUploading ? 'bg-orange-400 animate-ping' : 'bg-orange-900'}`}></div>
            <div className={`w-2 h-2 rounded-full ${isUploading ? 'bg-orange-400 animate-pulse delay-75' : 'bg-orange-900'}`}></div>
            <span className="text-[6px] text-white ml-1">TX RX</span>
          </div>
          {/* Pin 13 LED */}
          <div className="absolute top-4 right-16 flex flex-col items-center">
             <div className={`w-3 h-3 rounded-full border border-yellow-600 transition-colors duration-100 ${isBlinking ? 'bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]' : 'bg-yellow-900'}`}></div>
             <span className="text-[6px] text-white mt-1">L (13)</span>
          </div>
          
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/80 font-bold tracking-widest text-lg italic">UNO</div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex-1 w-full space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Pruébalo ahora</h2>
          <p className="text-slate-400">Arduino interactúa con el mundo. Simula subir un código o emitir sonido.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={handleUpload}
            disabled={isUploading}
            className="flex items-center gap-2 px-6 py-3 bg-[#00979D] hover:bg-[#007f85] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold shadow-lg transition-all active:scale-95"
          >
            <Zap size={20} className={isUploading ? 'animate-bounce' : ''} />
            {isUploading ? 'Subiendo...' : 'Cargar "Blink"'}
          </button>
          
          <button 
            onClick={playBuzzer}
            className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold shadow-lg transition-all active:scale-95 border border-slate-600"
          >
            <Volume2 size={20} />
            Sonar Buzzer
          </button>
        </div>

        {/* Pseudo-console */}
        <div className="bg-black/50 rounded-lg p-4 font-mono text-sm border border-white/10 h-24 flex items-end">
           <span className="text-green-400 animate-pulse">{consoleText}</span>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;