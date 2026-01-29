import React from 'react'
import {
  FaHome,
  FaUsers,
  FaBell,
  FaCog,
  FaChartPie,
  FaUserCircle,
  FaLayerGroup
} from 'react-icons/fa'
const Sidebar = () => {
  return (
    <div className='flex h-screen sticky top-0'>
      <div className='flex overflow-hidden relative'>
        <aside className='h-screen sticky top-0 flex flex-col overflow-y-auto gap-2 py-6 px-2 bg-base-200'>
          <a className='btn btn-square btn-ghost'>
            <img alt='Logo' src='/daisy-components/logo.svg' className='w-5' />
          </a>

          <div className='divider my-0'></div>

          <a className='btn btn-square btn-ghost text-xl' title='Home'>
            <i className=' fa-house'></i>
          </a>

          <a className='btn btn-square btn-secondary text-xl' title='Data'>
            <i className=' fa-chart-simple'></i>
          </a>

          <a className='btn btn-square btn-ghost text-xl' title='Evolution'>
            <i className=' fa-chart-line'></i>
          </a>

          <div className='divider my-0'></div>

          <a className='btn btn-square btn-ghost text-xl' title='Deliver'>
            <i className=' fa-truck'></i>
          </a>

          <a className='btn btn-square btn-ghost text-xl' title='Products'>
            <i className=' fa-box'></i>
          </a>

          <div className='divider my-0'></div>

          <a className='btn btn-square btn-ghost text-xl' title='Podcast'>
            <i className=' fa-podcast'></i>
          </a>

          <a className='btn btn-square btn-ghost text-xl' title='Blog'>
            <i className=' fa-blog'></i>
          </a>

          <a className='btn btn-square btn-ghost text-xl' title='News'>
            <i className=' fa-newspaper'></i>
          </a>

          <div className='divider my-0'></div>

          <a className='btn btn-square btn-ghost text-xl' title='GitHub'>
            <i className='fa-brands fa-github'></i>
          </a>

          <a className='btn btn-square btn-ghost text-xl' title='Facebook'>
            <i className='fa-brands fa-facebook'></i>
          </a>

          <a className='btn btn-square btn-ghost text-xl' title='Youtube'>
            <i className='fa-brands fa-youtube'></i>
          </a>

          <div className='divider my-0'></div>

          <a className='btn btn-circle btn-ghost text-xl' title='Profile'>
            <img
              alt='Profile'
              src='/daisy-components/avatar.png'
              className='w-8 rounded-full'
            />
          </a>
        </aside>
      </div>
      <aside className='bg-base-200 py-6 px-4 w-60 overflow-y-auto space-y-4'>
        <h1 className='font-bold text-xl'>Accounts</h1>

        <ul className='menu px-0'>
          <li>
            <a>
              <img
                alt='User'
                src='/daisy-components/avatar.png'
                className='rounded-full w-8'
              />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img
                alt='User'
                src='/daisy-components/avatar.png'
                className='rounded-full w-8'
              />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img
                alt='User'
                src='/daisy-components/avatar.png'
                className='rounded-full w-8'
              />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img
                alt='User'
                src='/daisy-components/avatar.png'
                className='rounded-full w-8'
              />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img
                alt='User'
                src='/daisy-components/avatar.png'
                className='rounded-full w-8'
              />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img
                alt='User'
                src='/daisy-components/avatar.png'
                className='rounded-full w-8'
              />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img
                alt='User'
                src='/daisy-components/avatar.png'
                className='rounded-full w-8'
              />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img
                alt='User'
                src='/daisy-components/avatar.png'
                className='rounded-full w-8'
              />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img
                alt='User'
                src='/daisy-components/avatar.png'
                className='rounded-full w-8'
              />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img
                alt='User'
                src='/daisy-components/avatar.png'
                className='rounded-full w-8'
              />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img
                alt='User'
                src='/daisy-components/avatar.png'
                className='rounded-full w-8'
              />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img
                alt='User'
                src='/daisy-components/avatar.png'
                className='rounded-full w-8'
              />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
