import React from 'react'
import { Link } from 'react-router-dom'

const FeedCard = ({ user, onOpenProfile, showConnect = true  }) => {
  return (
    <div className='card bg-base-300 max-w-sm shadow-xl overflow-hidden'>
      {/* Banner */}
      {user?.bannerImage ? (
        <img src={user?.bannerImage} className='w-full h-full object-cover' />
      ) : (
        <div className='h-32 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
      )}

      {/* Body */}
      <div className='px-4 pb-4'>
        {/* Avatar Row */}
        <div className='flex gap-3 -mt-8 items-end'>
          {/* Avatar (keeps overlap) */}

          <img
            src={
              user.profileImage
                ? user.profileImage
                : 'https://placehold.net/avatar.svg'
            }
            className='w-16 h-16 rounded-full border-4 border-base-300 object-cover cursor-pointer'
            onClick={() => {
              onOpenProfile(user)
              document.getElementById('profile_modal')?.showModal()
            }}
            alt='profile'
          />

          {/* Info + Button */}
          <div className='flex-1 pt-8 flex justify-between items-end'>
            <div className='font-bold text-sm hover:underline cursor-pointer'>
              {user.name}
              <p className='opacity-70 text-xs'>user@email.com</p>
            </div>

            {showConnect && (
              <button className='btn bg-[#5764f0] rounded-2xl btn-sm'>
                Connect
              </button>
            )}
          </div>
        </div>

        {/* About */}
        <div className='mt-3'>
          <p className='text-xs opacity-80 line-clamp-2'>{user.about}</p>
        </div>

        {/* Skills */}
        <div className='mt-3 flex flex-wrap gap-1'>
          <span className='badge badge-primary badge-sm'>Java</span>
          <span className='badge badge-secondary badge-sm'>Spring</span>
          <span className='badge badge-accent badge-sm'>React</span>
          <span className='badge badge-info badge-sm'>MySQL</span>
          <span className='badge badge-success badge-sm'>REST</span>
        </div>
      </div>
    </div>
  )
}

export default FeedCard
