import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div> */}
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-1  text-4xl lg:text-5xl tracking-tighter  font-bold text-gray-800">Tokenomics</h2>
            <p className="text-xl text-gray-600 tracking-tight">Real pandas don't need them</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto flex flex-col md:flex-row md:max-w-2xl lg:max-w-none ">
            <div className='flex flex-col justify-center md:w-[50%] mr-2 mx-auto '>
              <a className='gap-2 pb-12 flex flex-row items-center text-2xl font-semibold lg:text-3xl'><div className='h-6 w-6  rounded-lg lg:rounded-lg border-gray-800 border-solid border-4 bg-bamboo-200 lg:w-12 lg:h-12 lg:mr-4' /> 
              Listing on DEX Liquid <strong className='hover:cursor-pointer text-2xl lg:text-3xl'>(69%)</strong>
              </a>
              <a className='gap-2 pb-12 flex flex-row items-center text-2xl font-semibold  lg:text-3xl'><div className='h-6 w-6 rounded-lg lg:rounded-lg border-gray-800 border-solid border-4 bg-bamboo-600 lg:w-12 lg:h-12  lg:mr-4'/>
              Team&Def block for 1 year<span>(31%)</span> 
              </a>
            </div>
            <div className=' relative flex '>
              <img src='../public/tokenomics.png' />
              <div className='text-left absolute top-24 right-16 md:text-2xl lg:text-3xl font-extrabold flex flex-col text-gray-600 ml-3' ><span>31%</span> <span className='text-xl'>Team & Def</span></div>
              <div className='text-right absolute bottom-32 left-20 md:text-2xl  lg:text-3xl font-extrabold flex flex-col text-white' ><span>69%</span> <span className='text-xl'>DEX Liquid</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
