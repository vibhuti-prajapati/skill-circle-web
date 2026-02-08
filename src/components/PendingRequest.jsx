import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPendingRequest } from '../utils/pendingRequestSlice'
import ConnectionRequest from './ConnectionRequest'
const PendingRequest = () => {
  const pendingRequestData = useSelector(store => store.pendingRequest)
  const dispatch = useDispatch()
  const getPendingRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/request/received', {
        withCredentials: true
      })
      console.log(res.data);
      dispatch(addPendingRequest(res?.data?.data))
    } catch (err) {
      console.log(err)
    }
  }

useEffect(() => {
  if (!pendingRequestData) {
    getPendingRequests()
  }
}, [pendingRequestData])

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {pendingRequestData &&
        pendingRequestData.map(request => (
          <ConnectionRequest key={request._id} request={request} />
        ))}
    </div>
  )
}

export default PendingRequest
