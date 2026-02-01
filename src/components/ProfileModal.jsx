import GithubActivity from './GithubActivity'

const ProfileModal = () => (
  <dialog id='profile_modal' className='modal'>
    <div className='modal-box max-w-lg p-0 overflow-hidden'>
      {/* Close button */}
      <form method='dialog'>
        <button className='btn btn-sm btn-circle btn-ghost absolute right-3 top-3 z-10'>
          ✕
        </button>
      </form>

      {/* Banner */}
      <div className='h-32 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'>
        {/* banner image optional */}
        {/* <img src="/banner.jpg" className="w-full h-full object-cover" /> */}
      </div>

      {/* Profile section */}
      <div className='px-6 pb-6'>
        {/* Avatar + basic info */}
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

        {/* Description */}
        <div className='mt-4'>
          <h4 className='font-semibold mb-1'>About</h4>
          <p className='text-sm opacity-80'>
            Full stack developer passionate about building scalable web
            applications and exploring modern backend technologies.
          </p>
        </div>
        <div className='mt-4'>
          <GithubActivity username='vibhuti-prajapati' />
        </div>
        {/* Skills */}
        <div className='mt-4'>
          <h4 className='font-semibold mb-2'>Skills</h4>

          <div className='flex flex-wrap gap-2'>
            <span className='badge badge-primary'>Java</span>
            <span className='badge badge-secondary'>Spring Boot</span>
            <span className='badge badge-accent'>React</span>
            <span className='badge badge-info'>MySQL</span>
            <span className='badge badge-success'>REST APIs</span>
          </div>
        </div>
      </div>
    </div>
  </dialog>
)

export default ProfileModal
