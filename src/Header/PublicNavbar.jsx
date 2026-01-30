import React from 'react'

const PublicNavbar = () => {
  return (
    <div className='navbar bg-transparent absolute top-0 left-0 w-full z-50'>
      <div className='navbar-start'>
        <a className='btn btn-ghost text-xl' src="">Skill Circle</a>
      </div>
      <div className='navbar-center hidden lg:flex'></div>
      <div className='navbar-end'>
        <a className='btn'>LOGIN</a>
      </div> 
    </div>
  )
}

export default PublicNavbar
