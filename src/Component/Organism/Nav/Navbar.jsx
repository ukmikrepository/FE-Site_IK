import React, {useEffect, useState } from 'react'
import Button from '../../Atoms/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`container flex justify-between items-center z-40 w-screen fixed top-0 text-white py-4 ${scrolled ? 'backdrop-blur-md bg-[rgba(0,0,0,0.25)]' : 'bg-transparent'}`}>
      <img src="img/logo_ukmik.png" alt="" className='w-[50px] h-[50px]' />
        <ul className={`flex gap-8 items-center`}>
          <li>Home</li>
          <li>Profile</li>
          <li>Blog</li>
          <li>
            <Button color="bg-[#FFCB5C] rounded-full text-black font-black">
              Log In
            </Button>
          </li>
        </ul>
    </div>
  )
}
