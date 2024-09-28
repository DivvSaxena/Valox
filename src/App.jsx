import React from 'react';
import gif from './assets/img.gif';
import { AuroraBackground } from './components/ui/aurora-background';
import Header from './components/Header';
import symbol from './assets/symbol-bg.svg';
import { GlareCard } from './components/ui/glare-card';
import btn from './assets/button-bg.png';

const App = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <AuroraBackground />
      <Header />

      {/* Main content with animated gif */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img 
          src={gif} 
          alt="animated characters" 
          className="relative z-10 drop-shadow-2xl max-w-full h-auto"
        />
      </div>

      {/* Background symbol */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <img 
          src={symbol} 
          alt="background symbol" 
          className="relative z-5 drop-shadow-2xl max-w-full h-auto opacity-50" 
        />
      </div>

      {/* Glare Card - Positioned on top */}
      <div className="absolute bottom-10 right-0 transform -translate-x-1/2 z-20">
        <GlareCard className='flex items-center justify-center'>
          <h1 className='text-2xl text-white font-valo text-center'>Level up your collection! Dive into the ultimate Valorant NFT marketplace and unleash your inner agent</h1>
        </GlareCard>
      </div>

      {/* Glare Card - Positioned on top */}
      <div className="absolute bottom-10 left-72 transform -translate-x-1/2 z-20">
        <GlareCard className="flex items-center justify-center p-4">
          <h1 className="text-2xl text-white font-valo text-center">
            Level up your collection! Dive into the ultimate Valorant NFT marketplace and unleash your inner agent
          </h1>
        </GlareCard>
      </div>

      {/* Join Now Button - Centered on the page */}
      <div className="absolute inset-0 flex items-center justify-center z-30 mt-12 cursor-pointer">
        <div className="relative flex items-center justify-center w-64">
          <img src={btn} alt="btn" className="absolute inset-0 w-96 h-14 object-cover opacity-50" />
          <div className="relative z-10 text-white text-xl font-bold w-full flex items-center justify-center h-14 font-valo">
            Join Now
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;
