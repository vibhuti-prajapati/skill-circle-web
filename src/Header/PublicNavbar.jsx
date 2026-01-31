import React, { useEffect, useState } from 'react'
import logoIcon from '../assets/duckicon.png';
const PublicNavbar = () => {
    const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className='navbar bg-transparent sticky  top-0 left-0 w-full z-50'>
      <div className='navbar-start'>
        <a
          className='btn btn-ghost  hover:text-black text-white font-brigends text-2xl '
          href='/'
        >
          <img src={logoIcon} alt='Dev Orbit logo icon' className='w-7 h-7' />
          DEV ORBIT
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'></div>
      <div className='navbar-end'>
        <a href='/login'>
          <button className=' btn btn-sm font-bold rounded-xl px-4 py-1.5'>
            Log in
          </button>
        </a>
      </div>
    </div>
  )
}

export default PublicNavbar
