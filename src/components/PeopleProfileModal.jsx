import GithubActivity from './GithubActivity'

const PeopleProfileModal = ({ user }) => {

  const skillsString = Array.isArray(user?.skills)
    ? user.skills.join(',')
    : user?.skills || '';

  return user && (
    <dialog id='profile_modal' className='modal'>
      <div className='modal-box max-w-lg p-0 overflow-hidden'>
        {/* Close button */}
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-3 top-3 z-10'>
            ✕
          </button>
        </form>

        {/* Banner */}
        {user?.bannerImage ? (
          <img
            src={ user?.bannerImage}
            className='w-full h-full object-cover'
          />
        ) : (
          <div className='h-32 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
        )}

        {/* Profile section */}
        <div className='px-6 pb-6'>
          {/* Avatar + basic info */}
          <div className='flex gap-4 -mt-10 items-end'>
            <img
              src={
                user.profileImage
                  ? user.profileImage
                  : 'https://placehold.net/avatar.svg'
              }
              className='w-24 h-24 rounded-full border-4 border-base-100 object-cover'
            />

            <div className='mb-2'>
              <h3 className='font-bold text-lg'>{user.name}</h3>
            </div>
          </div>

          {/* Description */}
          <div className='mt-4'>
            <h4 className='font-semibold mb-1'>About</h4>
            <p className='text-sm opacity-80'>{user.about}</p>
          </div>
          <div className='mt-4'>
            <GithubActivity username='vibhuti-prajapati' />
          </div>
          {/* Skills */}
          <div className='mt-4'>
            <h4 className='font-semibold mb-2'>Skills</h4>

            <div className='flex flex-wrap gap-2'>
              {skillsString
                .split(',')
                .filter(Boolean)
                .map((skill, i) => (
                  <span key={i} className='badge badge-primary'>
                    {skill.trim()}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  )
}

export default PeopleProfileModal
