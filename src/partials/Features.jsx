import React, { useState, useRef, useEffect } from 'react';
import {motion,  useViewportScroll, useInView } from 'framer-motion';



function Features() {

  const [tab, setTab] = useState(1);
  
  const slide = useRef(null);
  const cont = useRef(null);
  const [scy, setY] = useState(0);

  const { scrollYProgress } = useViewportScroll();

  const invh = useInView(slide)
  
  useEffect( () => {
    function handleY(){
    setY(window.scrollY)
    // console.log(scrollYProgress.current);

  
  }
  window.addEventListener('scroll', handleY)
  
  return function clean(){window.removeEventListener('scroll', handleY)}
}, [invh])


  

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div> */}
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-1 text-4xl lg:text-5xl tracking-tighter  font-bold text-gray-800" >Explore the roadmap</h1>
            <p className="text-xl text-gray-600 tracking-tight" >we will grow like bamboo!</p>
          </div>

          {/* Section content */}
          {/* md:grid md:grid-cols-12 md:gap-6 */}
          <div className="flex flex-row-reverse h-[926px]" >

            {/* Content */}
            <div className=" md:max-w-none flex md:w-full mx-auto md:mt-6" data-aos="fade-right">
              {/* Tabs buttons */}
              <div  ref={cont} className="" >
                <a
                  className={`flex items-center text-sm p-3 rounded border transition duration-300 ease-in-out mb-3 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}

      
                >
                  <div className='flex px-5 '>
                    <div className='flex pr-5 font-bold text-xl items-center'>Q1</div>
                    <div>Adding liquidity DEX.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-sm p-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
     
     
                >
                  <div className='flex px-5'>
                  <div className='flex pr-5 font-bold text-xl items-center'>Q2</div>
                  <div>Liquidity lock 🔒.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-sm p-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
       
   
                >
                  <div className='flex px-5'>
                  <div className='flex pr-5 font-bold text-xl items-center'>Q3</div>
                    <div>Boost liquidity.</div>
                  </div>
                </a>

                <a
                  className={`flex items-center text-ml p-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
 
    
                >
                  <div className='flex px-5'>
                  <div className='flex pr-5 font-bold text-xl items-center'>Q4</div>
                    <div>Token holder drop.</div>
                  </div>
                </a>

                <a
                  className={`flex items-center text-sm p-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
        
   
                >
                  <div className='flex px-5'>
                  <div className='flex pr-5 font-bold text-xl items-center'>Q5</div>
                    <div>NFT FAT Panda Drop holders.</div>
                  </div>
                </a>

                <a
                  className={`flex items-center text-sm p-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 6 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
    
    
                >
                  <div className='flex px-5'>
                  <div className='flex pr-5 font-bold text-xl items-center'>Q6</div>
                    <div>NFT sale: one panda per wallet.</div>
                  </div>
                </a>

                <a
                  className={`flex items-center text-sm p-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 7 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
        
                
                >
                  <div className='flex px-5'>
                  <div className='flex pr-5 font-bold text-xl items-center'>Q7</div>
                    <div>FAT Panda game available on web platform and Telegram.</div>
                  </div>
                </a>

                <div className='mt-16 w-full'><img className='h-full w-full' src='https://d3n32ilufxuvd1.cloudfront.net/64ccb56d72c036003d7c9c67/4479640/Image-fa7d5da0-6efc-485b-b64c-e69cdb40f3be.gif'/></div>

              </div>
            </div>
          <div className='flex justify-center h-full w-[80%] order-1 bg-[url("/images/pole.png")] bg-no-repeat bg-center'>
            <motion.div 
              animate={{ y:scy*0.25 }}
              transition={{ type: 'spring', stiffness: 40, damping: 10 }}
            ref={slide} ><img className=' z-30  left-[98px] ' src='/images/sliding.png'/></motion.div>
            {/* <div className='z-10'><img className=' absolute left-[175px] object-contain' src='src/images/pole.png' /></div>     89PX FOR PANDA */}
            
          </div>
          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
