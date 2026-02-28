import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
const ConnectionRequest = ({ request, onActionDone}) => {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const handleReviewRequest = async status => {
    try {
      const res = await axios.patch(
        BASE_URL + '/request/review',
        { requestId: request._id, status: status },
        { withCredentials: true }
      )
      setSuccess('action done!')
      onActionDone()
    } catch (err) {
      console.log(err)
      setError('something went wrong')
    }
  }

  return (
    <>
      <div className='flex gap-3'>
        <div className='toast toast-top toast-center'>
          {error && (
            <div className='alert alert-error'>
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className='alert alert-success'>
              <span>{success}</span>
            </div>
          )}
        </div>
        <img
          src={
            request?.toUserId?.profileImage
              ? request?.toUserId?.profileImage
              : 'https://placehold.net/avatar.svg'
          }
          alt='Hailey image'
          className='w-12 h-12  rounded-full object-cover'
        />
        <div className='grid gap-3'>
          <div className='grid gap-0.5'>
            <h2 className='text-neutral-50 text-sm font-medium leading-snug'>
              {request?.toUserId?.name}
            </h2>
            <h3 className='text-gray-500 text-xs font-normal leading-4'>
              {new Date(request?.createdAt).toLocaleString()}
            </h3>
          </div>
          <div className='gap-3 flex'>
            <button
              className='px-5 py-2 bg-[#33333b] rounded-xl shadow-sm border border-[#33333b] text-neutral-50 text-xs font-semibold leading-4'
              onClick={() => handleReviewRequest('cancelled')}
            >
              {' '}
              Delete{' '}
            </button>
          </div>
        </div>
      </div>
      {/* Toast */}
      <div className='toast toast-top toast-center'>
        {error && (
          <div className='alert alert-error'>
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className='alert alert-success'>
            <span>{success}</span>
          </div>
        )}
      </div>
    </>
  )
}

export default ConnectionRequest
