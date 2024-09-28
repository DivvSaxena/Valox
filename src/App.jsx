import React from 'react';
import gif from './assets/img.gif';
import { AuroraBackground } from './components/ui/aurora-background';
import Header from './components/Header';
import symbol from './assets/symbol-bg.svg'

const App = () => {
  return (
    <div className="relative h-screen">
      
      <AuroraBackground />
      <Header  />
      <img 
        src={gif} 
        alt="animated characters" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-2xl" 
      />
      <img 
        src={symbol} 
        alt="animated characters" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 drop-shadow-2xl " 
      />
    </div>
  );
}

export default App;
