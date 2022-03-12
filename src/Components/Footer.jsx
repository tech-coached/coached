import React from 'react'
import logo from '../Assets/logo.svg'
import leftArrow from '../Assets/leftArrow.svg'
import linkedinIcon from '../Assets/linkedinIcon.svg'
import fbIcon from '../Assets/fbIcon.svg'
import Twittericon from '../Assets/Twittericon.svg'
import instaIcon from '../Assets/instaIcon.svg'
import playstore from '../Assets/playstore.svg'
import apple from '../Assets/apple.svg'
import '../Styles/footer.scss'

const Footer = () => {
  return (
    <div className=' h-[500px] '>
      <div className=' bg-[#E5E5E5] px-4 py-5 pb-1 pt-10 grid grid-cols-12 gap-1 footer-grid-wrap'>
        <div className='col-span-2 grid grid-rows-5'>
          <span className='font-bold'>Navigate</span>
          <span>Home</span>
          <span>Company</span>
          <span>Student</span>
          <span>Mentor</span>
        </div>
        <div className='col-span-2 grid  grid-rows-5'>
          <span className='font-bold'>Support</span>
          <span>Account</span>
          <span>Contact Us</span>
          <span>Help</span>
          <span>Credits</span>
        </div>
        <div className='col-span-2 grid  grid-rows-5'>
          <span className='font-bold'>Legal</span>
          <span>Privacy policy</span>
          <span>Terms of Use</span>
        </div>
        <div className='col-span-4 grid  grid-rows-5 px-2'>
          <div className='row-span-2 p-4'>
            <img src={logo} alt='' className='w-[30%]' />
          </div>
          <span className='font-bold'>Your passport to an amazing career.</span>
          <div className='footer'>
            <div className='imageWrapper'>
              <img src={leftArrow} alt='' />
            </div>
            <div>FIND OUT MORE</div>
          </div>
        </div>
        <div className='col-span-2 grid  grid-rows-5'>
          <div className='flex justify-center items-center social-icons'>
            <img src={linkedinIcon} alt='' />

            <span className='pl-4 pt-1 footer-social'>Linkedin</span>
          </div>
          <div className='flex justify-center items-center social-icons'>
            <img src={fbIcon} alt='' />

            <span className='pl-4 pt-1 footer-social'>Facebook</span>
          </div>
          <div className='flex justify-center items-center social-icons'>
            <img src={Twittericon} alt='' />

            <span className='pl-4 pt-1 footer-social'>Twitter</span>
          </div>
          <div className='flex justify-center items-center social-icons'>
            <img src={instaIcon} alt='' />

            <span className='pl-4 pt-1 footer-social'>Instagram</span>
          </div>
        </div>
      </div>
      <div className='bg-[#ffffff] px-4 flex justify-between items-center relative footer-download-wrapper pb-6'>
        <span className='font-bold w-[20rem]'>Made with love @ CoachEd</span>
        <div className='flex justify-center items-center'>
          <span className='font-bold w-[15rem]'>Download the app from</span>
          <img src={playstore} alt='' />
          <img src={apple} alt='' className='ml-4' />
        </div>
      </div>
    </div>
  )
}

export default Footer
