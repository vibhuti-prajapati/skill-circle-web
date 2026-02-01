// routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import PublicLayout from '../Layout/PublicLayout'
import Login from '../Pages/public/Login'
import Home from '../Pages/public/Home'
import ExploreFeed from '../components/ExploreFeed'
import Spaces from '../Pages/app/Spaces'
import Register from '../Pages/public/Register'
import ForgotPassword from '../Pages/public/ForgotPassword'
import ConnectionRequest from '../components/ConnectionRequest'

const AppRoutes = () => (
  <Routes>
    <Route element={<PublicLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
    </Route>

    <Route element={<AppLayout />}>
      <Route path='/explore' element={<ExploreFeed />} /> 
      <Route path='/spaces/@me' element={<ConnectionRequest/>} />
      <Route path='/spaces/' element={<Spaces />} />
    </Route>
  </Routes>
)

export default AppRoutes
