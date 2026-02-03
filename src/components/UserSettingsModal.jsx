import { useState } from 'react'
import GithubActivity from './GithubActivity'
import EditProfileView from './EditProfileView'
import axios from 'axios'
import {BASE_URL} from '../utils/constants.js'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/userSlice'
const ProfileView = () => (
  <>
    {/* Banner */}
    <div className='h-32 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'></div>

    <div className='px-6 pb-6'>
      <div className='flex gap-4 -mt-10 items-end'>
        <img
          src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
          className='w-24 h-24 rounded-full border-4 border-base-100 object-cover'
        />

        <div className='mb-2'>
          <h3 className='font-bold text-lg'>User Name</h3>
          <p className='opacity-70 text-sm'>user@email.com</p>
        </div>
      </div>

      <div className='mt-4'>
        <h4 className='font-semibold mb-1'>About</h4>
        <p className='text-sm opacity-80'>
          Full stack developer passionate about building scalable apps.
        </p>
      </div>

      <div className='mt-4'>
        <GithubActivity username='vibhuti-prajapati' />
      </div>

      <div className='mt-4'>
        <h4 className='font-semibold mb-2'>Skills</h4>
        <div className='flex flex-wrap gap-2'>
          <span className='badge badge-primary'>Java</span>
          <span className='badge badge-secondary'>Spring Boot</span>
          <span className='badge badge-accent'>React</span>
        </div>
      </div>
    </div>
  </>
)

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await axios.post(BASE_URL + '/logout', {}, { withCredentials: true });
    dispatch(removeUser());
    return navigate("/");
  }
  const renderContent = () => {
    switch (active) {
      case 'profile':
        return <ProfileView />
      case 'settings':
        return <SettingsView />
      case 'edit':
        return <EditProfileView />
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
