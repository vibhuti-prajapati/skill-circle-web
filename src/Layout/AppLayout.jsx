import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Header/Navbar'
import Sidebar from '../Header/Sidebar'
import PeopleProfileModal from '../components/PeopleProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { addUser } from '../utils/userSlice'
import { useEffect } from 'react'
import UserSettingsModal from '../components/UserSettingsModal'
const AppLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector(store => store.user)
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + '/profile/view', {
        withCredentials: true
      })
      dispatch(addUser(res.data.data))
    } catch (err) {
      if (err.status === 401) {
        navigate('/login')
      }
      console.log(err)
    }
  }
  useEffect(() => {
    if (!userData) {
      fetchUser()
    }
  }, [])

  return (
    <div data-theme='dark' className='h-screen flex flex-col'>
      {/* TOP — always visible */}
      <Navbar />

      {/* BELOW NAVBAR */}
      <div className='flex flex-1 overflow-hidden'>
        {/* Sidebars */}
        <Sidebar />

        {/* Main content */}
        <main className='flex-1 overflow-y-auto bg-base-100'>
          <Outlet />
        </main>
      </div>
      <UserSettingsModal/>
      <PeopleProfileModal />
    </div>
  )
}

export default AppLayout
