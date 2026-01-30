import React from 'react'

export default function Login () {
  return (
    <div className='h-[calc(100vh-4rem)] grid place-items-center overflow-hidden'>
      <div className='grid place-items-center'>
        <form className='fieldset bg-[#393a41]  rounded-box w-80  p-4'>
          <h1 className='text-2xl font-bold text-neutral-50 text-center mb-1'>
            Welcome back!
          </h1>

          <fieldset className='fieldset'>
            <label className='label text-neutral-50'>Email</label>
            <input
              type='email'
              className='input validator bg-[#35353c] text-neutral-50 w-70 h-8'
              required
            />
          </fieldset>

          <label className='fieldset text-neutral-50'>
            <span className='label'>Password</span>
            <input
              type='password'
              className='input validator bg-[#35353c] text-neutral-50 w-70 h-8'
              required
            />
          </label>
          <div className='text-left mt-1'>
            <a
              href='/forgot-password'
              className='text-xs text-[#808afa] hover:underline'
            >
              Forgot your password?
            </a>
          </div>
          <button
            className='btn btn-neutral border-[#5764f0] rounded-xl mt-4 bg-[#5764f0] text-neutral-50'
            type='submit'
          >
            Log in
          </button>
          <p className='text-xs text-neutral-400 text-center mt-4'>
          Need an account?{' '}
          <a href='/register' className='text-[#808afa] hover:underline'>
            Register
          </a>
        </p>
        </form>
      </div>
    </div>
  )
}
