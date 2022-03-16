import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.svg'
import '../Styles/Navbar.scss'
import leftArrow from '../Assets/leftArrow.svg'
import navIcon from '../Assets/navIcon.svg'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const [icon, setIcon] = useState(true)
  const location = useLocation()

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
          <Link to='/' className={location.pathname === '/' ? 'font-bold' : ''}>
            Home
          </Link>
        </div>
        <div className='flex items-center justify-center cursor-pointer'>
          <Link
            to='/company'
            className={location.pathname === '/company' ? 'font-bold' : ''}
          >
            Hire from us
          </Link>
        </div>
        <div className='flex items-center justify-center cursor-pointer'>
          <Link
            to='/students'
            className={location.pathname === '/students' ? 'font-bold' : ''}
          >
            Student
          </Link>
        </div>
        {/* <div className='flex items-center justify-center cursor-pointer'>
          <Link
            to='/mentors'
            className={location.pathname === '/mentors' ? 'font-bold' : ''}
          >
            Mentors
          </Link>
        </div> */}
        <div className='flex items-center justify-center cursor-pointer '>
          <Link
            to='/about'
            className={location.pathname === '/about' ? 'font-bold' : ''}
          >
            About Us
          </Link>
        </div>
        <div className='flex items-center justify-center login col-span-2 mx-8 '>
          <div className='imageWrapper'>
            <img src={leftArrow} alt='' />
          </div>
          <div className='pr-4 text-white'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLScQpviL9WdV6-d79VWqoXAaulu2dr5_6mFZkQXKNX2GqlBhzg/viewform'>
              Surprise
            </a>
          </div>
        </div>
      </div>
      <div className='navIcon absolute right-[2.5rem]'>
        {icon ? (
          <img
            src={navIcon}
            alt=''
            onClick={() => setIcon((prevState) => !prevState)}
          />
        ) : (
          <svg
            class='h-8 w-8 text-black'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='currentColor'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            onClick={() => setIcon((prevState) => !prevState)}
          >
            <path stroke='none' d='M0 0h24v24H0z' />{' '}
            <line x1='18' y1='6' x2='6' y2='18' />{' '}
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        )}
      </div>
      {!icon && (
        <div className='absolute right-[2.5rem] top-[3rem] nav-dropdown w-[10rem] flex items-center justify-center flex-col px-6 bg-[#ffffff] pb-4 rounded-[10px]'>
          <span className='p-2'>
            <Link
              to='/'
              className={location.pathname === '/' ? 'font-bold' : ''}
            >
              Home
            </Link>
          </span>
          <span className='p-2'>
            <Link
              to='/company'
              className={location.pathname === '/company' ? 'font-bold' : ''}
            >
              Hire from us
            </Link>
          </span>
          <span className='p-2'>
            <Link
              to='/students'
              className={location.pathname === '/students' ? 'font-bold' : ''}
            >
              Students
            </Link>
          </span>
          {/* <span className='p-2'>
            <Link
              to='/mentors'
              className={location.pathname === '/mentors' ? 'font-bold' : ''}
            >
              Mentors
            </Link>
          </span> */}
          <span className='p-2'>
            <Link
              to='/about'
              className={location.pathname === '/about' ? 'font-bold' : ''}
            >
              About Us
            </Link>
          </span>
          <div className='flex items-center justify-center login col-span-1 '>
            <div className='imageWrapper'>
              <img src={leftArrow} alt='' />
            </div>
            <div className='pr-4 text-[#ffffff]'>
              <a href='https://docs.google.com/forms/d/1AwN6x1zMlr_362zLZlBa7nJ2fFfmS44MlIxsMCB1Gkk/edit'>
                Surprise
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
