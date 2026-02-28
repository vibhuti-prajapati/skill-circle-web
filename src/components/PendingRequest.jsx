import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPendingRequest } from '../utils/pendingRequestSlice'
import ConnectionRequest from './ConnectionRequest'
const PendingRequest = () => {
  const [pendingRequestData, setPendingRequestData] = useState([]);
  const getPendingRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/request/received', {
        withCredentials: true
      })
      setPendingRequestData(res.data.data);
    } catch (err) {
      console.log(err)
    }
  }


useEffect(() => {
    getPendingRequests()
}, [])

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {pendingRequestData &&
        pendingRequestData.map(request => (
          <ConnectionRequest key={request._id} request={request}  onActionDone={getPendingRequests} showAccept={true} />
        ))}
    </div>
  )
}

export default PendingRequest
