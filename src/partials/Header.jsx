import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-40 md:bg-opacity-100 transition duration-300 ease-in-out ${!top && 'bg-white shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4 w-12 h-12 ">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img className='rounded-2xl' src={'/images/panda.png'} />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li href="https://t.me/FATP2ETON"  className='w-6 h-6 hover:cursor-pointer' ><a className='w-6 h-6' href="https://t.me/FATP2ETON" ><img src={'/images/Telegram.png'}  alt='Telegram'/></a></li>
              {/* <li><img src='' alt='Twitter'/></li> */}
            </ul>

          </nav>

        </div>
      </div>

       
    </header>
  );
}

export default Header;
