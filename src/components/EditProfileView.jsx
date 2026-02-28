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

  const [bannerFile, setBannerFile] = useState(null)
  const [profileFile, setProfileFile] = useState(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      setForm(user)
    }
  }, [user]);

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
      setBannerPreview(URL.createObjectURL(file))
    }
  }
  // profile preview
  const handleProfileChange = e => {
    const file = e.target.files[0]
    if (file) {
      setProfileFile(file)
      setProfilePreview(URL.createObjectURL(file))
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
      let updatedFields = getChangedFields()

      if (bannerFile) {
        const bannerUrl = await uploadImage(bannerFile, 'bannerImage')
        updatedFields.bannerImage = bannerUrl
      }
      if (profileFile) {
        const profileUrl = await uploadImage(profileFile, 'profileImage')
        updatedFields.profileImage = profileUrl
      }
      if (Object.keys(updatedFields).length === 0) {
        console.log('Nothing changed')
        return
      }
      const res = await axios.patch(BASE_URL + '/profile/edit', updatedFields, {
        withCredentials: true
      })
      dispatch(addUser(res.data.data))
      setSuccess('profile updated!')
      navigate("/app/spaces")
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  }
  return (
    <>
      {/* Banner */}
      <div className='h-32 w-full bg-base-300 relative overflow-hidden'>
        {form?.bannerImage ? (
          <img
            src={bannerPreview || form?.bannerImage}
            className='w-full h-full object-cover'
          />
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
        <label
          htmlFor='bannerUpload'
          className='absolute bottom-2 right-2 p-2 bg-black/50 rounded-full cursor-pointer hover:bg-black/70 text-white'
        >
          <FaCamera size={18} />
        </label>
      </div>

      <div className='px-6 pb-6'>
        <div className='flex gap-4 mt-4 items-end'>
          <div className='relative w-24 h-24 shrink-0'>
            <img
              src={profilePreview || form?.profileImage}
              className='w-full h-full rounded-full border-4 border-base-100 object-cover'
            />

            <input
              id='profileUpload'
              type='file'
              accept='image/*'
              onChange={handleProfileChange}
              className='hidden'
            />

            <label
              htmlFor='profileUpload'
              className='absolute bottom-0 right-0 p-2 bg-black/50 rounded-full cursor-pointer hover:bg-black/70 text-white'
            >
              <FaCamera size={14} />
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
          <select defaultValue={form?.gender || ""} className='select '>
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
    </>
  )
}

export default EditProfileView
