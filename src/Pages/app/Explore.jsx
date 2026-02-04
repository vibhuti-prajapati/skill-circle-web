import React, { useEffect } from 'react'
import FeedCard from '../../components/FeedCard'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
import { addFeed } from '../../utils/feedSlice.js'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const Explore = () => {
  const dispatch = useDispatch()
  const feed = useSelector(store => store.feed)

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/feed', {
        withCredentials: true
      })
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    if (!feed) {
      getFeed();
    }
  }, [])
  return (
     <div className="flex flex-wrap gap-4 justify-center">
      {feed && feed.map(user => (
        <FeedCard key={user._id} user={user} />
      ))}
    </div>
  )
}

export default Explore
