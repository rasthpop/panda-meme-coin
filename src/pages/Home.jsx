import React, { useRef } from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Info from '../partials/Info';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Bamboo from '../partials/Bamboo';
import Footer from '../partials/Footer';

function Home() {

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-[url('src/images/background.png')] bg-contain">


      <Header />

      <Bamboo/>

      <main className="flex-grow">

        <HeroHome  />
        <Info />
        <FeaturesHome  />
        <FeaturesBlocks />

      </main>

      <Footer />

    </div>
  );
}

export default Home;