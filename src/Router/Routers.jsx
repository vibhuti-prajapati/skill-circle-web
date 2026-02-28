// routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import PublicLayout from '../Layout/PublicLayout'
import Login from '../Pages/public/Login'
import Home from '../Pages/public/Home'
import Explore from '../Pages/app/Explore'
import Spaces from '../Pages/app/Spaces'
import Register from '../Pages/public/Register'
import ForgotPassword from '../Pages/public/ForgotPassword'
import Friends from '../components/Friends'
import PendingRequest from '../components/PendingRequest'
import SentRequests from '../components/SentRequests'
const AppRoutes = () => (
  <Routes>
    <Route element={<PublicLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
    </Route>

    <Route path='/app' element={<AppLayout />}>
      <Route path='explore' element={<Explore />} /> 
      <Route path='connections' element={<Friends/>} />
       <Route path='requests-pending' element={<PendingRequest/>} /> 
     <Route path='requests-sent' element={<SentRequests />}/>
      <Route path='spaces' element={<Spaces />} />
    </Route>

  </Routes>
)

export default AppRoutes
