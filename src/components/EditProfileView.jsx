import { useEffect, useState } from 'react'


// TODO : make the api call to save everything in db 
// TODO : no api call if the data is the same as previous

const EditProfileView = ({ user }) => {
  const [form, setForm] = useState({})
  const skillsString = Array.isArray(form?.skills)
    ? form.skills.join(',')
    : form?.skills || ''

  const [bannerPreview, setBannerPreview] = useState(null)
  const [profilePreview, setProfilePreview] = useState(null)

  useEffect(() => {
    if (user) {
      setForm(user)
    }
  }, [user])
  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  // banner preview
  const handleBannerChange = e => {
    const file = e.target.files[0]
    if (file) {
      setBannerPreview(URL.createObjectURL(file))
    }
  }
  // profile preview
  const handleProfileChange = e => {
    const file = e.target.files[0]
    if (file) {
      setProfilePreview(URL.createObjectURL(file))
    }
  }
  return (
    <>
      {/* Banner */}
      <div className='h-32 w-full bg-base-300 relative overflow-hidden'>
        {/* {bannerPreview && ( */}
        <img
          src={bannerPreview || form?.bannerImage}
          className='w-full h-full object-cover'
        />
        {/* )} */}

        <input
          type='file'
          accept='image/*'
          onChange={handleBannerChange}
          className='file-input file-input-sm absolute bottom-2 right-2'
        />
      </div>

      <div className='px-6 pb-6'>
        <div className='flex gap-4 -mt-10 items-end'>
          <div className='relative'>
            <img
              src={profilePreview || form?.profileImage}
              className='w-24 h-24 rounded-full border-4 border-base-100 object-cover'
            />

            <input
              type='file'
              accept='image/*'
              onChange={handleProfileChange}
              className='input input-sm mt-2 w-56'
              placeholder='Avatar URL'
            />
          </div>

          <div className='mb-2 w-full'>
            <input
              name='name'
              value={form?.name || ' '}
              onChange={handleChange}
              className='input input-bordered w-full mb-2'
              placeholder='Name'
            />

            <input
              name='email'
              value={form?.email || ' '}
              onChange={handleChange}
              className='input input-bordered w-full'
              placeholder='Email'
            />
          </div>
        </div>

        {/* About */}
        <div className='mt-4'>
          <h4 className='font-semibold mb-1'>About</h4>
          <textarea
            name='about'
            value={form?.about || ' '}
            onChange={handleChange}
            className='textarea textarea-bordered w-full'
            rows={3}
          />
        </div>

        {/* Skills */}
        <div className='mt-4'>
          <h4 className='font-semibold mb-2'>Skills</h4>

          <input
            name='skills'
            value={skillsString}
            onChange={handleChange}
            className='input input-bordered w-full mb-2'
            placeholder='Comma separated skills'
          />

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

        {/* Save */}
        <div className='mt-6 flex justify-end gap-2'>
          <button className='btn btn-ghost'>Cancel</button>
          <button className='btn btn-primary'>Save Changes</button>
        </div>
      </div>
    </>
  )
}

export default EditProfileView
