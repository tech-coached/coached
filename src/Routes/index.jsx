import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../Pages/About'
import Company from '../Pages/Company'
import Home from '../Pages/Home'
import Manifesto from '../Pages/Manifesto'
import Privacy from '../Pages/Privacy'
import Student from '../Pages/Student'
import Terms from '../Pages/Terms'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='about' element={<About />} />
      <Route path='mentors' element={<Home />} />
      <Route path='company' element={<Company />} />
      <Route path='students' element={<Student />} />
      <Route path='/manifesto' element={<Manifesto />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
