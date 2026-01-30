import React from 'react'

const Register = () => {
  return (
    <div className='h-[calc(100vh-4rem)] grid place-items-center overflow-hidden'>
      <div className='grid place-items-center'>
        <form className='fieldset bg-[#393a41]  rounded-box w-80  p-4'>
          <h1 className='text-xl font-bold text-neutral-50 text-center mb-1'>
            Create an account
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
            <span className='label'>Username</span>
            <input
              type='text'
              className='input validator bg-[#35353c] text-neutral-50 w-70 h-8'
              required
            />
          </label>
          <label className='fieldset text-neutral-50'>
            <span className='label'>Password</span>
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
            Create Account
          </button>
          <p className='text-xs text-neutral-400 text-center mt-4'>
            Already have  an account?{' '}
            <a href='/login' className='text-[#808afa] hover:underline'>
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
