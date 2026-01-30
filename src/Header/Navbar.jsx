import React from 'react'
// <div className='min-h-screen relative overflow-hidden radial-gradient(circle at 20% 30%, rgba(168,85,247,.25),transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,.25(, transparent 45%), linear-gradient(135deg,#1e003e, 1e1b6b, #2563eb) text-base-content'>
    //   <div className='pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-size[40px_40px]' />
const Navbar = () => {
  return (
        <div className='navbar bg-base-200 shadow-sm'>
          <div className='navbar-start'></div>
          <div className='navbar-center'>
            <a className='btn btn-ghost text-xl'>SKILL CIRCLE</a>
          </div>
          <div className='navbar-end'>
            <button className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {' '}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />{' '}
              </svg>
            </button>
            <button className='btn btn-ghost btn-circle'>
              <div className='indicator'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  {' '}
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />{' '}
                </svg>
                <span className='indicator-item w-2 h-2 bg-success rounded-full'></span>{' '}
              </div>
            </button>

            <div className='dropdown dropdown-end'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-10 rounded-full'>
                  <img
                    alt='Tailwind CSS Navbar component'
                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                  />
                </div>
              </div>
              <ul
                tabIndex='-1'
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
              >
                <li>
                  <a className='justify-between'>
                    Profile
                    <span className='badge'>New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default Navbar
