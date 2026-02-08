import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addFriend } from '../utils/friendsSlice.js'
import { BASE_URL } from '../utils/constants.js'
import FeedCard from '../components/FeedCard'

const Friends = () => {
  const dispatch = useDispatch()
  const friends = useSelector(store => store.friend)

  const getFriends = async () => {
    try {
      const res = await axios.get(
        BASE_URL + '/user/request/connections',
        { withCredentials: true }
      )
      console.log(res.data.data)
      dispatch(addFriend(res?.data?.data))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!friends) {
      getFriends()
    }
  }, [])

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {friends && friends.map(user => (
        <FeedCard key={user._id} user={user} />
      ))}
    </div>
  )
}

export default Friends
