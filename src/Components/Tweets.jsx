import React from 'react'
import '../Styles/tweets.scss'
// import Mentor1 from '../Assets/mentor1.svg'
// import TwitterImg from '../Assets/twitterImg.svg'
// import TweetImg from '../Assets/tweetImg.svg'

const Tweets = () => {
  return (
    <div className='w-full tweets pl-14 py-10'>
      <span className='text-[#ffffff] text-3xl font-bold '>
        #DilKiBaat from our CoachEd mentees
      </span>
      <div className='grid grid-cols-3 grid-rows-8 gap-4 p-10 pl-0 tweet-grid-wrap'>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              CoachEd was instrumental in getting placed in my current role at
              Blackbuck! The attention to detail in them prepping me was
              amazing. Thanks CoachEd!
            </p>
            {/* <p className='pt-6'>11:19 · 6 Jan 2022</p> */}
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-0'>
            {/* <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div> */}
            <div className='flex justify-center items-start flex-col'>
              <span className='text-xl font-semibold py-1'>Mihir </span>
              <span>NITK Surathkal</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              When I said that I wanted to learn something about web
              development, we started with basic things like what exactly it is,
              and later I worked on assignments related to web development. I am
              happy that I have learned something new in my life and that too in
              this pandemic situation.
            </p>
            {/* <p className='pt-4'>
              {' '}
              Great job team at curating such a diverse bunch.
            </p> */}
            {/* <p className='pt-6'>11:19 · 6 Jan 2022</p> */}
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center'>
            {/* <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div> */}
            <div className='flex justify-center items-start flex-col'>
              <span className='text-xl font-semibold py-1'>Nafisha Bilagi</span>
              <span>BEC Bagalkot</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              "CoachEd is a great platform to explore more about different
              career opportunities and how to choose the best-suited one for
              oneself. "
            </p>
            {/* <p className='pt-4'>
              {' '}
              Great job team at curating such a diverse bunch.
            </p> */}
            {/* <p className='pt-6'>11:19 · 6 Jan 2022</p> */}
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center'>
            {/* <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div> */}
            <div className='flex justify-center items-start flex-col'>
              <span className='text-xl font-semibold py-1'>
                Rajashri Javali
              </span>
              <span>KLS Gogte Institute of Technology, Belgaum</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              "During this pandemic, I had a lot of time and did not know how to
              use it wisely. I attended a webinar conducted by CoachEd. After
              signing up on their platform, they connected me with a mentor in
              my field of interest. It is a good platform that guides you to
              make better decisions concerning your career."
            </p>
            {/* <p className='pt-4'>
              {' '}
              Great job team at curating such a diverse bunch.
            </p> */}
            {/* <p className='pt-6'>11:19 · 6 Jan 2022</p> */}
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center'>
            {/* <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div> */}
            <div className='flex justify-center items-start flex-col'>
              <span className='text-xl font-semibold py-1'>
                Shivkumar Angadi
              </span>
              <span>BEC Bagalkot</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              "CoachEd has helped me in making a difference in my lifestyle and
              helped me transform into a professional. Upon proper guidance, I
              improved my vocabulary, conversational skills & redefined my
              personality. I am positively sure that I will be utilizing all the
              tips & tricks taught to me by the CoachEd Team."
            </p>
            {/* <p className='pt-4'>
              {' '}
              Great job team at curating such a diverse bunch.
            </p> */}
            {/* <p className='pt-6'>11:19 · 6 Jan 2022</p> */}
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center'>
            {/* <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div> */}
            <div className='flex justify-center items-start flex-col'>
              <span className='text-xl font-semibold py-1'>
                Aishwarya Patil Hiremath
              </span>
              <span>BEC Bagalkot</span>
            </div>
          </div>
        </div>
        {/* <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              Witnessing and experiencing a whole new side of me during the case
              weekend here at @CoachEd
            </p>
            <p>Loving the whole process of solving a real-world problem.</p>
            <p>
              {' '}
              Here to many more weekends like this. @AkankJu @AskSat@ansh2693,
              Neet and Gutham Thanks, Sirji @wherei
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              Completion rate is an important metric to look at when choosing
              which online learning platform to learn from. I read terrible
              reviews of UpGrad on Quora, and went for the much cooler, time and
              cost effective @CoachEd.
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div>
        <div className='row-span-6 bg-[#ffffff] rounded-[10px] p-4'>
          <div className='p-2 flex justify-start items-center bg-[#EAE0F4] w-[8rem] rounded-[10px] my-2'>
            <span>Pulled from</span>
            <div>
              <img src={TwitterImg} alt='' />
            </div>
          </div>
          <div>
            <p>
              Width 360px Height 71px Blend Pass through Fixed width Fixed
              height Witnessing and experiencing a whole new side of me during
              the case weekend here at @CoachEd
            </p>
            <div className='my-4 mb-0'>
              <img src={TweetImg} alt='' />
            </div>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              Completion rate is an important metric to look at when choosing
              which online learning platform to learn from. I read terrible
              reviews of UpGrad on Quora, and went for the much cooler, time and
              cost effective @CoachEd.
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              Completion rate is an important metric to look at when choosing
              which online learning platform to learn from. I read terrible
              reviews of UpGrad on Quora, and went for the much cooler, time and
              cost effective @CoachEd.
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div> */}
        {/* <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div className='p-2 flex justify-start items-center bg-[#EAE0F4] w-[8rem] rounded-[10px] my-2'>
            <span>Pulled from</span>
            <div>
              <img src={TwitterImg} alt='' />
            </div>
          </div>
          <div>
            <p>
              Increasingly surprised with the breadth and quality of people at
              @CoachEd
            </p>
            <p className='pt-4'>
              {' '}
              Great job team at curating such a diverse bunch.
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Tweets
