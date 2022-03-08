import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Company from '../Pages/Company'
import Home from '../Pages/Home'
import Student from '../Pages/Student'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='company' element={<Company />} />
      <Route path='student' element={<Student />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
