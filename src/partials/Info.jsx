import React, { useState, useRef, useEffect } from 'react';

function Info({scrolltoPage}) {
  const next = useRef()

   
  return (
    <section className="relative " >
  
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-12 pb-12 md:pb-20">
          
          {/* Section header */}
          <div className="">
            <div className="max-w-3xl tracking:tight text-xl sm:text-2xl text-gray-800 font-semibold text-left mx-auto">
            <span className='text-4xl lg:text-5xl tracking-tighter  font-bold mr-2'>Imagine this:</span>     
            <p className='mb-6'>MEMEcoin, bringing together P2E NFT and the magic of FAT Panda!
             🐼 In this thrilling game, "FAT Panda P2E Meme Coin TON". </p>
            <p> You can expect awesome
            cashbacks and the chance to become a true hero, all while growing your chunky 
            panda and earning even more within 24 hours. </p>
            </div>
          </div>


        </div>
      </div>
      <div className=" justify-center flex max-w-6xl mx-auto px-4 sm:px-6">
        <img className='h-24 w-24 md:h-32  md:w-32 lg:h-64 lg:w-64' src='src/images/dancingp.gif' />
        <img className='h-24 w-24 md:h-32  md:w-32 lg:h-64 lg:w-64' src='src/images/dancingp.gif' />
        <img className='h-24 w-24 md:h-32  md:w-32 lg:h-64 lg:w-64' src='src/images/dancingp.gif' />
      </div>
    </section>
  );
}

export default Info;
