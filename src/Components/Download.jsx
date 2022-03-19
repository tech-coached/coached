import React from 'react'
import playstore from '../Assets/playstore1.svg'
import '../Styles/download.scss'

const Donwload = () => {
  return (
    <div className='flex justify-start items-center px-4 py-2 rounded-[3rem] absolute bottom-[2rem] download' style={{border:'1px solid #000000'}} >
      <span className='font-bold'>Download the app from </span>
      <img src={playstore} alt="" className='px-4' />
    </div>
  )
}

export default Donwload