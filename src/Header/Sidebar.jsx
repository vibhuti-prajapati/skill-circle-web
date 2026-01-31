import React from 'react'
import logoIcon from '../assets/duckicon.png'
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
            <a className='btn btn-square btn-ghost hover:bg-[#5764f0]'>
              <img alt='Logo' src={logoIcon} className='w-5' />
            </a>
          </div>

          <div className='divider my-0'></div>

          {/* MIDDLE — scrollable */}
          <div className='flex-1 overflow-y-auto no-scrollbar flex flex-col gap-2 px-2 py-2 '>
            <a
              className='btn btn-square btn-ghost text-xl '
            >
              <FaHouse />
            </a>

            <a className='btn btn-square btn-secondary text-xl' title='Data'>
              <FaChartSimple />
            </a>

            <a className='btn btn-square btn-ghost text-xl' title='Evolution'>
              <FaChartLine />
            </a>

            <div className='divider my-0'></div>

            <a className='btn btn-square btn-ghost text-xl' title='Deliver'>
              <FaTruck />
            </a>

            <a className='btn btn-square btn-ghost text-xl' title='Products'>
              <FaBox />
            </a>

            <div className='divider my-0'></div>

            <a className='btn btn-square btn-ghost text-xl' title='Podcast'>
              <FaPodcast />
            </a>

            <a className='btn btn-square btn-ghost text-xl' title='Blog'>
              <FaBlog />
            </a>

            <a className='btn btn-square btn-ghost text-xl' title='News'>
              <FaNewspaper />
            </a>

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
            <a className='btn btn-circle btn-ghost text-xl' title='Profile'>
              <FaUserCircle />
            </a>
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
