import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.svg'
import '../Styles/Navbar.scss'
import leftArrow from '../Assets/leftArrow.svg'

const Navbar = () => {
  return (
    <div className='pt-2 pb-2 pl-10 shadow-[0_4px_8px_#E6E6E6] grid grid-cols-12 gap-4 flex text-[#090809] items-center justify-center'>
      <div className='col-span-5'>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
      </div>
      <div className='flex justify-center items-center col-span-7 grid grid-cols-12 gap-4'>
        <div className='cursor-pointer hover:font-bold'>
          {' '}
          <Link to='/'>Home</Link>
        </div>
        <div className='cursor-pointer'>
          <Link to='/company'>Company</Link>
        </div>
        <div className='cursor-pointer'>
          <Link to='/student'>Student</Link>
        </div>
        <div className='cursor-pointer'>Mentors</div>
        <div className='cursor-pointer '>About Us</div>
        <div className='login col-span-2'>
          <div className='imageWrapper'>
            <img src={leftArrow} alt='' />
          </div>
          <div>Login</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
