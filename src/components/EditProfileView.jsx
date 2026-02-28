import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice.js'
import { useNavigate } from 'react-router-dom'
// TODO : make the api call to save everything in db
// TODO : no api call if the data is the same as previous
// TODO FIX : api call to /edit
const EditProfileView = ({ user }) => {
  const [form, setForm] = useState({})
  const skillsString = Array.isArray(form?.skills)
    ? form.skills.join(',')
    : form?.skills || ''

  const [bannerPreview, setBannerPreview] = useState(null)
  const [profilePreview, setProfilePreview] = useState(null)
  const [removeBanner, setRemoveBanner] = useState(false)
  const [removeProfile, setRemoveProfile] = useState(false)
  const [bannerFile, setBannerFile] = useState(null)
  const [profileFile, setProfileFile] = useState(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [bannerModalOpen, setBannerModalOpen] = useState(false)
  const [profileModalOpen, setProfileModalOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      setForm(user)
    }
  }, [user])

  useEffect(() => {
    return () => {
      if (bannerPreview) URL.revokeObjectURL(bannerPreview)
      if (profilePreview) URL.revokeObjectURL(profilePreview)
    }
  }, [bannerPreview, profilePreview])

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate('/app/spaces')
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [success, navigate])

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  // banner preview
  const handleBannerChange = e => {
    const file = e.target.files[0]
    if (file) {
      setBannerFile(file)
      setRemoveBanner(false)
      setBannerPreview(URL.createObjectURL(file))
      setBannerModalOpen(false)
    }
  }
  // profile preview
  const handleProfileChange = e => {
    const file = e.target.files[0]
    if (file) {
      setProfileFile(file)
      setRemoveProfile(false)
      setProfilePreview(URL.createObjectURL(file))
      setProfileModalOpen(false)
    }
  }
  const getChangedFields = () => {
    const changes = {}

    Object.keys(form).forEach(key => {
      if (form[key] !== user[key]) {
        changes[key] = form[key]
      }
    })

    return changes
  }

  const handleSave = async () => {
    try {
      setError(null)
      const updatedFields = getChangedFields()
      const formData = new FormData()

      Object.keys(updatedFields).forEach(key => {
        formData.append(key, updatedFields[key])
      })

      if (bannerFile) {
        formData.append('bannerImage', bannerFile)
      }
      if (profileFile) {
        formData.append('profileImage', profileFile)
      }
      if (removeBanner) {
        formData.append('removeBannerImage', true)
      }

      if (removeProfile) {
        formData.append('removeProfileImage', true)
      }

      if (
        Object.keys(updatedFields).length === 0 &&
        !bannerFile &&
        !profileFile &&
        !removeBanner &&
        !removeProfile
      ) {
        console.log('Nothing changed')
        return
      }
      const res = await axios.patch(BASE_URL + '/profile/edit', formData, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      dispatch(addUser(res.data.data))
      setSuccess('profile updated!')
      navigate('/app/spaces')
    } catch (err) {
      setError(err.response?.data?.message || err.message)
    }
  }
  return (
    <>
      {/* Banner */}
      <div className='h-32 w-full bg-base-300 relative overflow-hidden'>
        {bannerPreview ? (
          <img src={bannerPreview} className='w-full h-full object-cover' />
        ) : form?.bannerImage ? (
          <img src={form.bannerImage} className='w-full h-full object-cover' />
        ) : (
          <div className='h-32 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
        )}

        {/* Hidden input */}
        <input
          id='bannerUpload'
          type='file'
          accept='image/*'
          onChange={handleBannerChange}
          className='hidden'
        />

        {/* Camera button */}
        {/*        <label
          htmlFor='bannerUpload'
          className='absolute bottom-2 right-2 p-2 bg-black/50 rounded-full cursor-pointer hover:bg-black/70 text-white'
        >
          <FaCamera size={18} />
        </label>*/}
        <label
          onClick={() => setBannerModalOpen(true)}
          className='absolute bottom-2 right-2 p-2 bg-black/50 rounded-full cursor-pointer hover:bg-black/70 text-white'
        >
          <FaCamera size={18} />
        </label>
      </div>

      <div className='px-6 pb-6'>
        <div className='flex gap-4 mt-4 items-end'>
          <div className='relative w-24 h-24 shrink-0'>
            {profilePreview ? (
              <img
                src={profilePreview}
                className='w-full h-full rounded-full border-4 border-base-100 object-cover'
              />
            ) : form?.profileImage ? (
              <img
                src={form.profileImage}
                className='w-full h-full rounded-full border-4 border-base-100 object-cover'
              />
            ) : (
              <div className='h-full object-cover w-full rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
            )}
            {/* <img
              src={profilePreview || form?.profileImage}
              className='w-full h-full rounded-full border-4 border-base-100 object-cover'
            /> */}

            <input
              id='profileUpload'
              type='file'
              accept='image/*'
              onChange={handleProfileChange}
              className='hidden'
            />

            {/* <label
              htmlFor='profileUpload'
              className='absolute bottom-0 right-0 p-2 bg-black/50 rounded-full cursor-pointer hover:bg-black/70 text-white'
            >
              <FaCamera size={14} />
            </label>
             */}

            <label
              onClick={() => setProfileModalOpen(true)}
              className='absolute bottom-2 right-2 p-2 bg-black/50 rounded-full cursor-pointer hover:bg-black/70 text-white'
            >
              <FaCamera size={18} />
            </label>
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
          {/* gender */}
        </div>
        <div className='mt-4'>
          <h4 className='font-semibold mb-1'>Gender</h4>
          <select
            name='gender'
            value={form?.gender || ''}
            onChange={handleChange}
          >
            {' '}
            <option disabled={true}>gender</option>
            <option value={'male'}>male</option>
            <option value={'female'}>female</option>
            <option value={'other'}>other</option>
          </select>
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

        <div className='toast toast-top toast-center'>
          {error && (
            <div className='alert alert-error'>
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className='alert alert-success'>
              <span>{success}</span>
            </div>
          )}
        </div>
        {/* Save */}
        <div className='mt-6 flex justify-end gap-2'>
          <button className='btn btn-ghost'>Cancel</button>
          <button className='btn btn-primary' onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
      {bannerModalOpen && (
        <div className='modal modal-open'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg mb-4'>Update Banner</h3>

            <div className='flex flex-col gap-3'>
              <label htmlFor='bannerUpload' className='btn btn-primary'>
                Choose New Photo
              </label>

              <button
                className='btn btn-error'
                onClick={() => {
                  setRemoveBanner(true)
                  setBannerFile(null)
                  setBannerPreview(null)
                  setForm(prev => ({ ...prev, bannerImage: null }))
                  setBannerModalOpen(false)
                }}
              >
                Remove Current Photo
              </button>

              <button className='btn' onClick={() => setBannerModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {profileModalOpen && (
        <div className='modal modal-open'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg mb-4'>Update profile</h3>

            <div className='flex flex-col gap-3'>
              <label htmlFor='profileUpload' className='btn btn-primary'>
                Choose New Photo
              </label>

              <button
                className='btn btn-error'
                onClick={() => {
                  setRemoveProfile(true)
                  setProfileFile(null)
                  setProfilePreview(null)
                  setForm(prev => ({ ...prev, profileImage: null }))
                  setProfileModalOpen(false)
                }}
              >
                Remove Current Photo
              </button>

              <button
                className='btn'
                onClick={() => setProfileModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditProfileView
