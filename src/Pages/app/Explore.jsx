import React, { useEffect, useState } from 'react'
import FeedCard from '../../components/FeedCard'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
import { addFeed } from '../../utils/feedSlice.js'
import { useDispatch } from 'react-redux'
import PeopleProfileModal from '../../components/PeopleProfileModal.jsx'
import { useSelector } from 'react-redux'
const Explore = () => {
  const dispatch = useDispatch()
  const feed = useSelector(store => store.feed)
  const [selectedUser, setSelectedUser] = useState(null)
  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/feed', {
        withCredentials: true
      })
      dispatch(addFeed(res?.data?.data))
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    if (!feed) {
      getFeed()
    }
  }, [])
  return (
    <>
      <div className='flex flex-wrap gap-4 justify-center'>
        {feed &&
          feed.map(user => (
            <FeedCard
              key={user._id}
              user={user}
              onOpenProfile={setSelectedUser}
              showConnect={true}
            />
          ))}
      </div>
      <PeopleProfileModal user={selectedUser} />
    </>
  )
}

export default Explore
