import { Outlet } from 'react-router-dom'
import PublicNavbar from '../Header/PublicNavbar'
import FloatingCharacters from '../components/FloaatingCharacters'

const PublicLayout = () => {
  return (
    <div className='relative min-h-screen text-base-content'>
      {/* gradient layer */}
      <div
        className='fixed inset-0 -z-10'
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(168,85,247,.35), transparent 45%),
            radial-gradient(circle at 80% 70%, rgba(59,130,246,.35), transparent 50%),
            linear-gradient(135deg, #0f0024, #1e1b6b, #2563eb)
          `
        }}
      />

      {/* star layer */}
      <div
        className='fixed inset-0 -z-10 opacity-25 pointer-events-none'
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      <FloatingCharacters />
      <PublicNavbar />

      <div className='relative z-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default PublicLayout
