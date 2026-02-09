import { useState, useEffect } from 'react'
import GithubActivity from './GithubActivity'
import EditProfileView from './EditProfileView'
import axios from 'axios'
import { BASE_URL } from '../utils/constants.js'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../utils/userSlice'
import UserProfileView from './UserProfileView.jsx'

const SettingsView = () => (
  <div className='p-6'>
    <h2 className='text-xl font-bold mb-4'>Settings</h2>
    <p>App settings go here.</p>
  </div>
)

const AccountView = () => (
  <div className='p-6'>
    <h2 className='text-xl font-bold mb-4'>Account</h2>
    <p>Password, email, security options.</p>
  </div>
)

const UserSettingsModal = () => {
  const [active, setActive] = useState('profile')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector(store => store.user)
  const handleLogout = async () => {
    await axios.post(BASE_URL + '/logout', {}, { withCredentials: true })
    dispatch(removeUser())
    return navigate('/')
  }
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + '/profile/view', {
        withCredentials: true
      })
      dispatch(addUser(res.data.data))
    } catch (err) {
      if (err.response?.status === 401) {
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

  const renderContent = () => {
    switch (active) {
      case 'profile':
        return <UserProfileView user={userData} />
      case 'settings':
        return <SettingsView />
      case 'edit':
        return <EditProfileView user={userData} />
      case 'account':
        return <AccountView />
      default:
        return <ProfileView />
    }
  }

  return (
    <dialog id='user_modal' className='modal'>
      <div className='modal-box max-w-2xl p-0 overflow-hidden'>
        {/* Close */}
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-3 top-3 z-10'>
            ✕
          </button>
        </form>

        <div className='flex h-100'>
          {/* Sidebar */}
          <aside className='w-40 bg-base-200  border-r-base-300 '>
            <ul className='menu gap-1'>
              <li>
                <button onClick={() => setActive('profile')}>Profile</button>
              </li>
              <li>
                <button onClick={() => setActive('edit')}>Edit Profile</button>
              </li>
              <li>
                <button onClick={() => setActive('settings')}>
                  Personalization
                </button>
              </li>
              <li>
                <button onClick={() => setActive('account')}>Account</button>
              </li>

              <div className='divider my-2'></div>

              <li>
                <button className='text-error' onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </aside>

          {/* Main content */}
          <main className='flex-1 overflow-y-auto bg-base-100'>
            {renderContent()}
          </main>
        </div>
      </div>

      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  )
}

export default UserSettingsModal
