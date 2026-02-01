import React from 'react'

const ConnectionRequest = () => {
  return (
    <div className='flex gap-3'>
      <img
        src='https://pagedone.io/asset/uploads/1704092147.png'
        alt='Hailey image'
        className='w-12 h-12'
      />
      <div className='grid gap-3'>
        <div className='grid gap-0.5'>
          <h2 className='text-neutral-50 text-sm font-medium leading-snug'>
            Hailey Garza{' '}
            <span className='text-gray-500'>
              wants to connect with you
            </span>
          </h2>
          <h3 className='text-gray-500 text-xs font-normal leading-4'>
            Account | Friday, 10:03 AM
          </h3>
        </div>
        <div className='gap-3 flex'>
          <button className='px-5 py-2 bg-[#5764f0] rounded-xl shadow-sm text-white text-xs font-semibold leading-4'>
            {' '}
            Accept{' '}
          </button>
          <button className='px-5 py-2 bg-[#33333b] rounded-xl shadow-sm border border-[#33333b] text-neutral-50 text-xs font-semibold leading-4'>
            {' '}
            Deny{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConnectionRequest
