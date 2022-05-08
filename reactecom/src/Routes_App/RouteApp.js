import React from 'react'
import {  Route, Routes, } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'
import MasterLayout from '../layouts/admin/MasterLayout'

function RouteApp() {
  return (
    <Routes>

          <Route path="/admin" element={< MasterLayout/>} />
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/profile" element={<Profile />} />



        </Routes>
  )
}

export default RouteApp