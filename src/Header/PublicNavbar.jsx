import React from 'react'

const PublicNavbar = () => {
  return (
    <div className='navbar bg-transparent absolute top-0 left-0 w-full z-50'>
      <div className='navbar-start'>
        <a
          className='btn btn-ghost text-neutral-50 font-brigends text-2xl'
          src=''
        >
          DEV ORBIT
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'></div>
      <div className='navbar-end'>
        <button className=' btn btn-sm font-bold rounded-xl px-4 py-1.5' >
          Log in
        </button>
      </div>
    </div>
  )
}

export default PublicNavbar
