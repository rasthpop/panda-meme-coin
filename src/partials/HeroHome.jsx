import React, { useState, useRef, useEffect } from 'react';

function HeroHome({scrolltoPage}) {
 
  function tokenomicsButton(){
    window.scrollTo({top: 3050, behavior: 'smooth'})
  }

   

  return (
    <section className="relative " >
  
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-[-1/2] " data-aos="zoom-y-out">
              Panda Meme Coin
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-3xl text-gray-800 mb-8 tracking-tighter font-semibold" data-aos="zoom-y-out" data-aos-delay="150">
                The most valuable TON token!
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a href="https://t.me/FATP2ETON" className="btn text-white bg-bamboo-200 hover:bg-bamboo-400 w-full mb-4 sm:w-auto sm:mb-0" >
                    Explore Panda meme
                  </a>
                </div>
                <div>
                  <a onClick={tokenomicsButton} className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">
                    Tokenomics
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={"/images/panda2.png"} width="768" height="432" alt="Hero" />
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
