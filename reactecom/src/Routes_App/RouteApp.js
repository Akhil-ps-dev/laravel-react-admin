import React from 'react'
import {  Route, Routes, } from 'react-router-dom'
import Home from '../components/frontend/Home'
import Dashboard from '../components/Dashboard'
import Login from '../components/frontend/auth/Login'
import Register from '../components/frontend/auth/Register'
import Profile from '../components/Profile'
import MasterLayout from '../layouts/admin/MasterLayout'

function RouteApp() {
  return (
    <Routes>
          <Route exact path="/" element={< Home/>} />
          <Route  path="/login" element={< Login/>} />
          <Route  path="/register" element={< Register/>} />



          <Route exact path="/admin" element={< MasterLayout/>} />
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/profile" element={<Profile />} />



        </Routes>
  )
}

export default RouteApp