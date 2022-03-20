import React from 'react'
import warrior1 from '../Assets/warrior1.svg'
import warrior2 from '../Assets/warrior2.svg'
import warrior3 from '../Assets/warrior3.svg'
import warrior4 from '../Assets/warrior4.png'
import leftArrow from '../Assets/leftArrow.svg'
import '../Styles/warrior.scss'
import Questions from './Questions'
import FewTweet from './FewTweet'

const Warrior = () => {
  return (
    <>
      <span className='text-3xl font-bold px-14 mt-4 warrior-text'>
        Our CoachEd Warriors are
      </span>
      <div className='px-14 grid grid-cols-3 gap-10 pt-4 mb-10 py-10 warrior-card-wrap'>
        <div className='h-[250px] py-6 rounded-[10px] flex  justify-start flex-col items-start mt-2'>
          <div className='pb-4'>
            <img src={warrior1} alt='' className='pb-4' />
            <span className='font-bold'>Industry ready</span>
          </div>
          <div className='pt-2 h-[20rem] flex justify-center flex-col'>
            <span>
              Our grads are{' '}
              <span className='font-bold'>prepared for the industry. </span>{' '}
            </span>{' '}
            <br />
            <span>
              Our{' '}
              <span className='font-bold'>
                intensive mentorship program + career
              </span>{' '}
              <br></br>
              <span className='font-bold'>awareness sessions</span> makes our
              students <br></br> industry prepped and ready!
            </span>
          </div>
        </div>
        <div className='h-[250px] py-6 rounded-[10px] flex  justify-start flex-col items-start mt-2'>
          <div className='pb-4'>
            <img src={warrior2} alt='' className='pb-4' />
            <span className='font-bold'>Industry ready</span>
          </div>
          <div className='pt-2 h-[20rem] '>
            <span className='font-bold'>Hungry for growth</span>
            <span> and keen on</span>
            <span className='font-bold'> solving problems</span>
            <span>
              {' '}
              using the right knowledge is what we define a perfect culture fit
              for your company
            </span>
          </div>
        </div>
        <div className='h-[250px] py-6 rounded-[10px] flex  justify-start flex-col items-start mt-2'>
          <div className='pb-4'>
            <img src={warrior3} alt='' className='pb-4' />
            <span className='font-bold'>Skilled and Qualified</span>
          </div>
          <div className='pt-2 h-[20rem] flex justify-center flex-col'>
            <span>
              Our grads showcase some of the sought after
              <span className='font-bold'>
                {' '}
                skills and all the right qualities
              </span>
              <span>… all in one package.</span>
            </span>
          </div>
        </div>
      </div>
      <FewTweet />
      <div className='h-[80px] bg-[#ffffff] mx-14 rounded-[10px] relative flex justify-between items-center mb-10  my-10 warrior-values'>
        <span className='font-bold pl-20 bg-linear text-3xl'>
          Are you looking for top performers to join your team?
        </span>
        <span className='warrior-perform'>Performers who are</span>
        <div className='px-10 py-2 text-[#ffffff] fast-paced rounded-[10px]'>
          <div>Fast paced </div>
        </div>
      </div>
      <div className='h-[80px] bg-[#ffffff] mx-14 rounded-[10px] relative flex justify-between items-center mb-10 border-[#FFD52E] border-[1px] my-10 warrior-mail py-4'>
        <img
          src={warrior4}
          alt=''
          className='absolute rounded-[10px] left-[0rem]'
        />
        <span className='font-bold pl-20 text-[#000000] pt-2'>
          Hire from us today!
        </span>
        <div className='mail col-span-2 w-[22rem] text-[#ffffff]'>
          <div className='imageWrapper'>
            <img src={leftArrow} alt='' />
          </div>
          <div>Mail us today at hello@coached.co.in </div>
        </div>
      </div>
      <Questions />
    </>
  )
}

export default Warrior
