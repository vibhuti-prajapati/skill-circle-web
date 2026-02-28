import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import ConnectionRequest from './ConnectionRequest'
import SentRequestComponent from './SentRequestComponent'
const SentRequests = () => {
  const [sentRequestData, setSentRequestData] = useState([])

  const getSentRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/request/sent', {
        withCredentials: true
      });
      setSentRequestData(res.data.data);
    } catch (err) {console.log(err)}
  }
  useEffect(() => {
    getSentRequests()
  }, [])
  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {sentRequestData &&
        sentRequestData.map(request => (
          <SentRequestComponent
            key={request._id}
            request={request}
            onActionDone={getSentRequests}
          />
        ))}
    </div>
  )
}

export default SentRequests
