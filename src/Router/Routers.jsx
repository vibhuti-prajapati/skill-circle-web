import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../../Pages/Login';
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default Routers
