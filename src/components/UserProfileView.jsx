import React from 'react'
import GithubActivity from './GithubActivity'
const UserProfileView = ({ user }) => {
  const skillsString = Array.isArray(user?.skills)
    ? user.skills.join(',')
    : user?.skills || ''

  return (
    <>
      {/* Banner */}
      {user?.bannerImage ? (
        <div className='h-32 w-full bg-base-300 relative overflow-hidden'>
          <img
            src={user.bannerImage}
            className='w-full h-full object-cover'
            alt='User banner'
          />
        </div>
      ) : (
        <div className='h-32 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
      )}

      <div className='px-6 pb-6'>
        <div className='flex gap-4 -mt-10 items-end'>
          <div className='relative'>
            <img
              src={user?.profileImage}
              className='w-24 h-24 rounded-full border-4 border-base-100 object-cover'
            />
          </div>

          <div className='mb-2'>
            <h3 className='font-bold text-lg'>{user?.name}</h3>
            <p className='opacity-70 text-sm'>user@email.com</p>
          </div>
        </div>

        <div className='mt-4'>
          <h4 className='font-semibold mb-1'>About</h4>
          <p className='text-sm opacity-80'>{user?.about}</p>
        </div>

        <div className='mt-4'>
          <GithubActivity username='vibhuti-prajapati' />
        </div>

        <div className='mt-4'>
          <h4 className='font-semibold mb-2'>Skills</h4>
          <div className='flex flex-wrap gap-2'>
            {skillsString
              .split(',')
              .filter(Boolean)
              .map((skill, i) => (
                <span key={i} className='badge badge-primary'>
                  {skill.trim()}
                </span>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfileView
