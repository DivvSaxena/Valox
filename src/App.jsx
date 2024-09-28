import React from 'react';
import gif from './assets/img.gif';
import { AuroraBackground } from './components/ui/aurora-background';

const App = () => {
  return (
    <div className="relative h-screen">
      <AuroraBackground />
      <img 
        src={gif} 
        alt="" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" 
      />
      <h1 className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 text-white text-large 	 font-valo ">
        ValoX
      </h1>
    </div>
  );
}

export default App;
