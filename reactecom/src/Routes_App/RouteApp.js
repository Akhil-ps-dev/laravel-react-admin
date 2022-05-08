import React from 'react'
import {  Route, Routes, } from 'react-router-dom'
import Home from '../components/admin/frontend/Home'
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'
import MasterLayout from '../layouts/admin/MasterLayout'

function RouteApp() {
  return (
    <Routes>
          <Route exact path="/" element={< Home/>} />

          <Route exact path="/admin" element={< MasterLayout/>} />
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/profile" element={<Profile />} />



        </Routes>
  )
}

export default RouteApp