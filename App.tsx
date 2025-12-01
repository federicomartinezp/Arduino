import React, { useState } from 'react';
import { BoardType } from './types';
import BoardVisualizer from './components/BoardVisualizer';
import TutorialTrafficLight from './components/TutorialTrafficLight';
import IdeSetup from './components/IdeSetup';
import IntroAnimation from './components/IntroAnimation';
import ProjectsHub from './components/ProjectsHub';
import { INTRO_CONTENT } from './constants';
import { Cpu, BookOpen, Download, LayoutGrid, ArrowRight, Menu, X } from 'lucide-react';

enum View {
  INTRO = 'INTRO',
  BOARD_UNO = 'BOARD_UNO',
  BOARD_NANO = 'BOARD_NANO',
  PROJECTS_HUB = 'PROJECTS_HUB',
  PROJECT_TRAFFIC_LIGHT = 'PROJECT_TRAFFIC_LIGHT',
  IDE = 'IDE'
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.INTRO);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItem = ({ view, label, icon: Icon }: { view: View; label: string; icon: any }) => (
    <button
      onClick={() => {
        setCurrentView(view);
        setIsMenuOpen(false);
      }}
      className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg transition-all
        ${currentView === view || (view === View.PROJECTS_HUB && currentView === View.PROJECT_TRAFFIC_LIGHT)
          ? 'bg-[#00979D] text-white shadow-md' 
          : 'text-slate-600 hover:bg-slate-100'}`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 border-b border-slate-200 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-[#00979D]">Arduino Start</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className={`fixed inset-0 z-40 bg-white md:static md:w-64 md:border-r md:border-slate-200 md:flex flex-col transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6 hidden md:block">
          <h1 className="text-2xl font-bold text-[#00979D] tracking-tight">Arduino Start</h1>
          <p className="text-xs text-slate-400 mt-1">Tu guía interactiva</p>
        </div>
        
        <div className="p-4 space-y-2 flex-1 overflow-y-auto mt-16 md:mt-0">
          <NavItem view={View.INTRO} label="Introducción" icon={LayoutGrid} />
          <div className="pt-4 pb-2 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Explorar Placas</div>
          <NavItem view={View.BOARD_UNO} label="Arduino UNO" icon={Cpu} />
          <NavItem view={View.BOARD_NANO} label="Arduino Nano" icon={Cpu} />
          <div className="pt-4 pb-2 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Aprender</div>
          <NavItem view={View.PROJECTS_HUB} label="Proyectos" icon={BookOpen} />
          <NavItem view={View.IDE} label="Instalar IDE" icon={Download} />
        </div>

        <div className="p-4 border-t border-slate-100">
          <p className="text-xs text-center text-slate-400">Hecho para aprender <br/> by Federico Martínez</p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-[calc(100vh-64px)] md:h-screen p-4 md:p-8 lg:p-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Intro View */}
          {currentView === View.INTRO && (
            <div className="animate-fadeIn space-y-12">
              <div className="text-center md:text-left">
                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{INTRO_CONTENT.title}</h2>
                 <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
                   {INTRO_CONTENT.description}
                 </p>
              </div>

              {/* Interactive Component */}
              <IntroAnimation />

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">¿Qué puedes hacer?</h3>
                  <ul className="space-y-3">
                    {INTRO_CONTENT.usage.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-600">
                        <div className="w-2 h-2 rounded-full bg-[#00979D]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[#eafafa] p-8 rounded-xl border border-cyan-100 flex flex-col justify-center items-start">
                  <h3 className="text-xl font-bold text-[#007f85] mb-2">Comunidad Global</h3>
                  <p className="text-slate-600 mb-6">
                    Al usar Arduino, te unes a millones de creadores en todo el mundo. El hardware es libre, cualquiera puede estudiarlo y mejorarlo.
                  </p>
                   <button 
                    onClick={() => setCurrentView(View.BOARD_UNO)}
                    className="bg-[#00979D] hover:bg-[#007f85] text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-all shadow-md"
                  >
                    Empezar a Explorar <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Board Views */}
          {(currentView === View.BOARD_UNO || currentView === View.BOARD_NANO) && (
            <div className="animate-fadeIn">
              <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    {currentView === View.BOARD_UNO ? 'Arduino UNO R3' : 'Arduino Nano'}
                  </h2>
                  <p className="text-slate-500 mt-1">Explora los componentes interactivos de la placa.</p>
                </div>
                <div className="text-sm bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg border border-yellow-100">
                  💡 Haz clic en los puntos sobre la placa
                </div>
              </div>
              <BoardVisualizer type={currentView === View.BOARD_UNO ? BoardType.UNO : BoardType.NANO} />
            </div>
          )}

          {/* Project Hub */}
          {currentView === View.PROJECTS_HUB && (
            <ProjectsHub onSelectProject={(id) => {
              if(id === 'traffic_light') setCurrentView(View.PROJECT_TRAFFIC_LIGHT);
            }} />
          )}

          {/* Specific Project: Traffic Light */}
          {currentView === View.PROJECT_TRAFFIC_LIGHT && (
            <div className="animate-fadeIn">
              <TutorialTrafficLight onBack={() => setCurrentView(View.PROJECTS_HUB)} />
            </div>
          )}

          {/* IDE Setup View */}
          {currentView === View.IDE && (
            <div className="animate-fadeIn">
              <IdeSetup />
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default App;