import axios from 'axios'
import { useState } from 'react'
import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { BASE_URL } from '../../utils/constants.js'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [success, setSuccess] = useState()
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      setError('');
      const res = await axios.post(
        BASE_URL + '/signUp',
        { email, name, password },
        { withCredentials: true }
      )
      setSuccess(res?.data?.message)
      return navigate('/login');
    } catch (err) {
      setError(err?.response?.data?.message || 'Registration failed')
    }
  }
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
              value={email}
              className='input validator bg-[#35353c] text-neutral-50 w-70 h-8'
              onChange={e => setEmail(e.target.value)}
              required
            />
          </fieldset>
          <label className='fieldset text-neutral-50'>
            <span className='label'>Username</span>
            <input
              type='text'
              value={name}
              className='input validator bg-[#35353c] text-neutral-50 w-70 h-8'
              onChange={e => setName(e.target.value)}
              required
            />
          </label>
          <label className='fieldset text-neutral-50'>
            <span className='label'>Password</span>

            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                className='input validator bg-[#35353c] text-neutral-50 w-70 h-8 pr-10'
                onChange={e => setPassword(e.target.value)}
                required
              />

              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-100'
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>
          <button
            className='btn btn-neutral border-[#5764f0] rounded-xl mt-4 bg-[#5764f0] text-neutral-50'
            type='submit'
            onClick={handleRegister}
          >
            Create Account
          </button>
          {error && <p className='text-red-400'>{error}</p>}
          {success && <p className='text-green-400'>{success}</p>}
          <p className='text-xs text-neutral-400 text-center mt-4'>
            Already have an account?{' '}
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
