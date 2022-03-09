import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.svg'
import '../Styles/Navbar.scss'
import leftArrow from '../Assets/leftArrow.svg'
import navIcon from '../Assets/navIcon.svg'

const Navbar = () => {
  return (
    <div className='pt-2 pb-2 px-14 shadow-[0_4px_8px_#E6E6E6] grid grid-cols-12 gap-4 text-[#090809] flex items-center justify-center w-[100%] relative'>
      <div className='col-span-5'>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
      </div>
      <div className='flex justify-center items-center col-span-7 grid grid-cols-6 gap-4 nav-wrapper'>
        <div className='cursor-pointer flex items-center justify-center hover:font-bold'>
          {' '}
          <Link to='/'>Home</Link>
        </div>
        <div className='flex items-center justify-center cursor-pointer'>
          <Link to='/company'>Company</Link>
        </div>
        <div className='flex items-center justify-center cursor-pointer'>
          <Link to='/student'>Student</Link>
        </div>
        <div className='flex items-center justify-center cursor-pointer'>
          Mentors
        </div>
        <div className='flex items-center justify-center cursor-pointer '>
          About Us
        </div>
        <div className='flex items-center justify-center login col-span-1 '>
          <div className='imageWrapper'>
            <img src={leftArrow} alt='' />
          </div>
          <div>Login</div>
        </div>
      </div>
      <div className='navIcon absolute right-[2.5rem]'>
        <img src={navIcon} alt='' />
      </div>
    </div>
  )
}

export default Navbar
