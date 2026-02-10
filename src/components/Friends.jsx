import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addFriend } from '../utils/friendsSlice.js'
import { BASE_URL } from '../utils/constants.js'
import FeedCard from '../components/FeedCard'
import { useState } from 'react'
import PeopleProfileModal from './PeopleProfileModal.jsx'

const Friends = () => {
  const [selectedUser, setSelectedUser] = useState(null)
  const [friends, setFriends] = useState([])

  const getFriends = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/request/connections', {
        withCredentials: true
      })
      setFriends(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getFriends()
  }, [])

  return (
    <>
      <div className='flex flex-wrap gap-4 justify-center'>
        {friends &&
          friends.map(user => (
            <FeedCard
              key={user._id}
              user={user}
              onOpenProfile={setSelectedUser}
            />
          ))}
      </div>
      <PeopleProfileModal user={selectedUser} />
    </>
  )
}

export default Friends
