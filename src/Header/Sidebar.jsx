import React from 'react'
import logoIcon from '../assets/duckicon.png'
import { IconTooltip } from '../components/IconTooltip'
import {
  FaHome,
  FaUsers,
  FaBell,
  FaCog,
  FaChartPie,
  FaUserCircle,
  FaLayerGroup,
  FaChartLine,
  FaTruck,
  FaBox,
  FaPodcast,
  FaBlog,
  FaNewspaper,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaUser
} from 'react-icons/fa'
import { FaChartSimple, FaHouse } from 'react-icons/fa6'
const Sidebar = () => {
  return (
    <div className='flex h-full sticky top-0'>
      <div className='flex  relative'>
        <aside className='h-full sticky top-0 flex flex-col bg-base-200 w-14'>
          {/* TOP — fixed */}
          <div className=' px-2 '>
            <IconTooltip label='connections'>
              <a className='btn btn-square btn-ghost rounded-xl bg-[#33333b] hover:bg-[#5764f0]'>
                <img alt='Logo' src={logoIcon} className='w-5' />
              </a>
            </IconTooltip>
          </div>

          <div className='divider my-0'></div>

          {/* MIDDLE — scrollable */}
          <div className='flex-1 overflow-y-auto no-scrollbar flex flex-col gap-2 px-2 py-2 '>
            <IconTooltip label='Home'>
              <a className='btn btn-square btn-ghost text-xl'>
                <FaHouse />
              </a>
            </IconTooltip>
            <IconTooltip label='Home'>
              <a className='btn btn-square text-xl' title='Data'>
                <FaChartSimple />
              </a>
            </IconTooltip>
            <IconTooltip label='Home'>
              <a className='btn btn-square btn-ghost text-xl' title='Evolution'>
                <FaChartLine />
              </a>
            </IconTooltip>
            <div className='divider my-0'></div>
            <IconTooltip label='Home'>
              <a className='btn btn-square btn-ghost text-xl' title='Deliver'>
                <FaTruck />
              </a>
            </IconTooltip>
            <IconTooltip label='Home'>
              <a className='btn btn-square btn-ghost text-xl' title='Products'>
                <FaBox />
              </a>
            </IconTooltip>

            <div className='divider my-0'></div>
            <IconTooltip label='Home'>
              <a className='btn btn-square btn-ghost text-xl' title='Podcast'>
                <FaPodcast />
              </a>
            </IconTooltip>
            <IconTooltip label='Home'>
              <a className='btn btn-square btn-ghost text-xl' title='Blog'>
                <FaBlog />
              </a>
            </IconTooltip>
            <IconTooltip label='Home'>
              <a className='btn btn-square btn-ghost text-xl' title='News'>
                <FaNewspaper />
              </a>
            </IconTooltip>
            <div className='divider my-0'></div>

            <a className='btn btn-square btn-ghost text-xl' title='GitHub'>
              <FaGithub />
            </a>

            <a className='btn btn-square btn-ghost text-xl' title='Facebook'>
              <FaFacebook />
            </a>

            <a className='btn btn-square btn-ghost text-xl' title='Youtube'>
              <FaYoutube />
            </a>
          </div>

          <div className='divider my-0'></div>

          {/* BOTTOM — fixed */}
          <div className=' px-2'>
            <IconTooltip label='Profile'>
              <div className='dropdown dropdown-top'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div className='w-5 h-5 rounded-full'>
                    <img
                      alt='Tailwind CSS Navbar component'
                      src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                    />
                  </div>
                </div>
                <ul
                  tabIndex='-1'
                  className='menu menu-sm dropdown-content bg-base-100 border border-gray-600 rounded-box z-999 mt-1 w-18 p-2 shadow'
                >
                  <li>
                    <a className='justify-between'>Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </IconTooltip>
          </div>
        </aside>
      </div>
      <aside className='bg-base-200 py-6 px-4 w-60 overflow-y-auto no-scrollbar space-y-4'>
        <h1 className='font-bold text-xl'>Accounts</h1>

        <ul className='menu px-0'>
          <li>
            <a>
              <FaUser />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <FaUser />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <FaUser />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <FaUser />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <FaUser />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <FaUser />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <FaUser />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <FaUser />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <FaUser />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <FaUser />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <FaUser />

              <div className='flex flex-col'>
                <span className='font-bold'>User name</span>
                <span className='text-xs'>11.2 followers</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <FaUser />

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
