import React from 'react'

const ForgotPassword = () => {
  return (
    <div className='h-[calc(100vh-4rem)] grid place-items-center overflow-hidden'>
      <div className='grid place-items-center'>
        <form className='fieldset bg-[#393a41]  rounded-box w-80  p-4'>
          <h1 className='text-xl font-bold text-neutral-50 text-center mb-1'>
            Change Your Password 
          </h1>

          <label className='fieldset text-neutral-50'>
            <span className='label'> New Password</span>
            <input
              type='password'
              className='input validator bg-[#35353c] text-neutral-50 w-70 h-8'
              required
            />
          </label>
          <button
            className='btn btn-neutral border-[#5764f0] rounded-xl mt-4 bg-[#5764f0] text-neutral-50'
            type='submit'
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword