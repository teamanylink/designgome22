import React, { useState } from 'react';
import CoreCapabilities from './components/CoreCapabilities';
import ConsultationCTA from './components/ConsultationCTA';
import ProblemSolution from './components/ProblemSolution';
import KeyMetrics from './components/KeyMetrics';
import TrustBar from './components/TrustBar';
import TargetProfile from './components/TargetProfile';
import PerformanceMetrics from './components/PerformanceMetrics';
import ExecutionHUD from './components/ExecutionHUD';
import ExecutionFeatureSplit from './components/ExecutionFeatureSplit';
import ComparisonTable from './components/ComparisonTable';
import VisualisationHero from './components/VisualisationHero';
import PlaigroundHome from './components/PlaigroundHome';

const App = () => {
  const [view, setView] = useState<'library' | 'home'>('home');

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-bold text-xl tracking-tight">PLAIGROUND</span>
            <div className="hidden md:flex gap-1 bg-gray-100 p-1 rounded-lg">
              <button 
                onClick={() => setView('home')}
                className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${view === 'home' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Home Page
              </button>
              <button 
                onClick={() => setView('library')}
                className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${view === 'library' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Component Library
              </button>
            </div>
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-widest font-medium hidden sm:block">
            {view === 'home' ? 'Live Preview' : 'Design System'}
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {view === 'home' ? (
          <PlaigroundHome />
        ) : (
          <div className="space-y-20 pb-20">
            <section id="hero-visualisation">
              <VisualisationHero />
            </section>

            <section id="core-capabilities">
              <CoreCapabilities />
            </section>

            <section id="metrics">
              <KeyMetrics />
            </section>

            <section id="problem-solution">
              <ProblemSolution />
            </section>

            <section id="performance">
              <PerformanceMetrics />
            </section>

            <section id="target-profile">
              <TargetProfile />
            </section>

            <section id="execution-hud">
              <ExecutionHUD />
            </section>

            <section id="execution-split">
              <ExecutionFeatureSplit />
            </section>

            <section id="trust-bar">
              <TrustBar />
            </section>

            <section id="comparison">
              <ComparisonTable />
            </section>
            
            <section id="consultation">
              <ConsultationCTA />
            </section>
          </div>
        )}
      </main>
      
      <footer className="bg-gray-900 text-white py-12 text-center text-sm text-gray-500">
        <div className="flex flex-col items-center gap-4">
           <p>&copy; 2024 Plaiground Design Library. All rights reserved.</p>
           <div className="flex md:hidden gap-2 bg-gray-800 p-1 rounded-lg">
              <button 
                onClick={() => setView('home')}
                className={`px-3 py-1 text-xs font-medium rounded transition-all ${view === 'home' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setView('library')}
                className={`px-3 py-1 text-xs font-medium rounded transition-all ${view === 'library' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
              >
                Library
              </button>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;