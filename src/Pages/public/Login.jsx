import axios from 'axios'
import React, { useState } from 'react'
import {addUser} from '../../utils/userSlice.js'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/constants.js';

export default function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
  e.preventDefault();
    try {
      const res = await axios.post(BASE_URL + '/login', {
        email: email,
        password: password
      },{withCredentials:true});
      dispatch(addUser(res.data.data));
      return navigate("/app/spaces");
    } catch (err) {
      console.log('ERROR : ' + err)
    }
  }

  return (
    <div className='h-[calc(100vh-4rem)] grid place-items-center overflow-hidden'>
      <div className='grid place-items-center'>
        <form className='fieldset bg-[#393a41]  rounded-box w-80  p-4'>
          <h1 className='text-xl font-bold text-neutral-50 text-center mb-1'>
            Welcome back!
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
            <span className='label'>Password</span>

            {/* password field with toggle */}
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                className='input validator bg-[#35353c] text-neutral-50 w-70 h-8 pr-10'
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
            onClick={handleLogin}
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
