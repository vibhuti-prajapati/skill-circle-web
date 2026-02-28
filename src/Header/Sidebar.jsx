import React, { useState } from 'react'
import logoIcon from '../assets/duckicon.png'
import { IconTooltip } from '../components/IconTooltip'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebarPanel } from '../utils/uiSlice'
import { FaUser, FaPlusCircle, FaRegCompass, FaServer } from 'react-icons/fa'

const Sidebar = () => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  const panel = useSelector(store => store.ui.sidebarPanel)

  return (
    <div className='flex h-full sticky top-0'>
      <div className='flex  relative'>
        <aside className='h-full sticky top-0 flex flex-col bg-base-300 w-14'>
          {/* TOP — fixed */}
          <div className=' px-2 flex flex-col gap-2'>
            <IconTooltip label='connections'>
              <Link
                to='/app/requests-pending'
                onClick={() => dispatch(setSidebarPanel('connections'))}
                className='btn btn-square btn-ghost rounded-xl bg-[#33333b] hover:bg-[#5764f0]'
              >
                <img alt='Logo' src={logoIcon} className='w-5' />
              </Link>
            </IconTooltip>

            <IconTooltip label='explore'>
              <Link
                Link
                to='/app/explore'
                onClick={() => dispatch(setSidebarPanel('accounts'))}
                className='btn btn-square btn-ghost rounded-xl bg-[#33333b] hover:bg-[#5764f0]'
              >
                <FaRegCompass />
              </Link>
            </IconTooltip>
            <IconTooltip label='Create a Space'>
              <a className='btn btn-square btn-ghost rounded-xl bg-[#33333b] hover:bg-[#5764f0]'>
                <FaPlusCircle />
              </a>
            </IconTooltip>
          </div>

          <div className='divider my-0 px-2'></div>

          {/* MIDDLE — scrollable */}
          <div className='flex-1 overflow-y-auto no-scrollbar flex flex-col gap-2 px-2 py-2 '>
            <IconTooltip label='space'>
              <Link
                to='/app/spaces/@me'
                className='btn btn-square btn-ghost rounded-xl bg-[#33333b] hover:bg-[#5764f0]'
              >
                <FaServer />
              </Link>
            </IconTooltip>
          </div>

          <div className='divider my-0 px-2'></div>

          {/* BOTTOM — fixed */}
          <div className=' px-2'>
            <IconTooltip label='Profile'>
              <div
                onClick={() => {
                  console.log('modal open task given ')
                  document.getElementById('user_modal').showModal()
                }}
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-6 h-6 rounded-full'>
                  <img
                    alt='Tailwind CSS Navbar component'
                    src={
                      user?.profileImage
                        ? user.profileImage
                        : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                    }
                  />
                </div>
              </div>
            </IconTooltip>
          </div>
        </aside>
      </div>
      <aside className='bg-base-200 py-6 px-4 w-60 overflow-y-auto no-scrollbar space-y-4'>
        {panel === 'accounts' && (
          <>
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
            </ul>
          </>
        )}

        {panel === 'connections' && (
          <>
            <h1 className='font-bold text-xl'>Connections</h1>

            <ul className='menu px-0'>
              <li>
                <Link to='/app/connections'>Friends</Link>
              </li>
              <li>
                <Link to='/app/requests-pending'>Pending Requests</Link>
              </li>
              <li>
                <Link to='/app/requests-sent'>Sent Requests</Link>
              </li>
            </ul>

            <div className='divider'></div>

            <h2 className='font-semibold'>Direct Messages</h2>
            <ul className='menu px-0'>
              <li>
                <a>User A</a>
              </li>
              <li>
                <a>User B</a>
              </li>
            </ul>
          </>
        )}
      </aside>
    </div>
  )
}

export default Sidebar
