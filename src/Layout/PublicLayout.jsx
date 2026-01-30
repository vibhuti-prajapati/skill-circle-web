import { Outlet } from 'react-router-dom'
import PublicNavbar from '../Header/PublicNavbar'

const PublicLayout = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-[#00000a] via-[#0d1050] via-[#242c9c] via-[#4e55b9] to-indigo-400'>
      <PublicNavbar />
      <div className='relative z-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default PublicLayout
