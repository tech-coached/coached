import React, { useState } from 'react'
import top from '../Assets/faq-arrow.svg'
import top1 from '../Assets/faq-arrow1.svg'
import '../Styles/questions.scss'

const question = [
  {
    que: 'What CoachEd is for?',
    ans: 'CoachEd is here to make you the ultimate best and irreplaceable across the Industry. We do this by providing industry-driven best cohort-based training and mentorship on  market-relevant high leverage skills and mapping you to startups and companies in various fields.',
  },
  {
    que: 'What kind of mentorship am I getting into?',
    ans: 'Our Industry Chiefs would be assisting you at every point of your journey. Along with our Industry driven cohort-based training, you would be supported and assisted with 1:1 sessions with your mentors to help you grow tremendously.',
  },
  {
    que: 'How do I access the CoachEd Kingdom?',
    ans: ' As you have decided to give wings to your career, we would see you at the top soon. The process is fairly simple. At the comfort of your home, take an assessment test that would help us to know you better, and accordingly, you can join our exclusive cohorts tosupercharge your career in less than 10 weeks. Welcome to CoachEd kingdom!!',
  },
  {
    que: 'Who else hires from CoachEd?',
    ans: 'Our Warriors have made a loud commotion across the Industry through their talent and skills. They have been referred successfully by our CoachEd Mentors in companies like Synopsys, PwC, Wipro, Stonex, and more. Not only this, but we got a large pool of hiring partners and have placed our well-trained and highly skilled warriors in companies like Thoughtwiz, Oska, Karkhana, Roado, and many more.',
  },
  {
    que: 'Why CoachEd warriors?',
    ans: 'Our super talented and highly skilled drifters are all prepared to win the corporate world. They are well trained and would resonate well with your company’s culture and mission. They would soothe your soul by maximizing your company’s growth and profit levels to crazy levels.',
  },
  {
    que: 'Why should I hire from CoachEd?',
    ans: 'If you are looking for Talented and highly skilled individuals that can grow your organization at crazy levels then CoachEd can be your only stop. We cut the cumbersome hiring and talent hunt procedure for you by channelizing our well-trained individuals directly to your organization.',
  },
]

const Questions = () => {
  const [state, setState] = useState([false, false, false])

  const onHandleChange = (index) => {
    let temp = [...state]
    temp[index] = !state[index]
    setState(temp)
  }

  return (
    <div className='mt-10'>
      <span className='text-3xl font-bold px-14 mt-4'>Popular Questions</span>
      <div className='grid grid-cols-3 gap-6 px-14 py-4 mb-10 questions-wrapper'>
        {question.map((item, index) => {
          return (
            <div
              className='row-span-3 bg-[#ffffff] rounded-[10px] p-4 shadow-[0px_4px_8px_#F3F3F3] relative w-[100%]'
              key={index}
            >
              <span className='font-bold question-question'>{item.que}</span>
              {state[index] && (
                <img
                  src={top}
                  alt=''
                  onClick={() => onHandleChange(index)}
                  className='absolute right-[1rem] top-[1.5rem] question-arrow1'
                />
              )}
              {!state[index] && (
                <img
                  src={top1}
                  alt=''
                  onClick={() => onHandleChange(index)}
                  className='absolute right-[1rem] top-[1.5rem] question-arrow1'
                />
              )}
              {state[index] && (
                <>
                  <div
                    style={{ border: '1px solid #E6E6E6' }}
                    className='my-2'
                  ></div>

                  <span>{item.ans}</span>
                </>
              )}
            </div>
          )
        })}
        {/* <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4 shadow-[0px_4px_8px_#F3F3F3] relative'>
          <span className='font-bold'>
            What roles can I hire CoachEd Drifters for?
          </span>
          {state2 && (
            <img
              src={top}
              alt=''
              onClick={() => setState2((prevState) => !prevState)}
              className='absolute right-[1rem] top-[1.5rem]'
            />
          )}
          {!state2 && (
            <img
              src={top1}
              alt=''
              onClick={() => setState2((prevState) => !prevState)}
              className='absolute right-[1rem] top-[1.5rem]'
            />
          )}
          {state2 &&
            (<div
              style={{ border: '1px solid #E6E6E6' }}
              className='my-2'
            ></div>)(
              <span>
                To save a draft of your Tweet, click the X icon in the top left
                corner of the compose box, then click Save. To schedule your
                Tweet to be sent at a later date/time, click on the calendar
                icon at the bottom of the compose box and make your schedule
                selections, then click Confirm. To access your drafts and
                scheduled Tweets, click on Unsent Tweets from the Tweet compose
                box.
              </span>
            )}
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4 shadow-[0px_4px_8px_#F3F3F3] relative'>
          <span className='font-bold'>Who ele hires from CoachEd?</span>
          {state3 && (
            <img
              src={top}
              alt=''
              onClick={() => setState3((prevState) => !prevState)}
              className='absolute right-[1rem] top-[1.5rem]'
            />
          )}
          {!state3 && (
            <img
              src={top1}
              alt=''
              onClick={() => setState3((prevState) => !prevState)}
              className='absolute right-[1rem] top-[1.5rem]'
            />
          )}
          {state3 &&
            (<div
              style={{ border: '1px solid #E6E6E6' }}
              className='my-2'
            ></div>)(
              <span>
                To save a draft of your Tweet, click the X icon in the top left
                corner of the compose box, then click Save. To schedule your
                Tweet to be sent at a later date/time, click on the calendar
                icon at the bottom of the compose box and make your schedule
                selections, then click Confirm. To access your drafts and
                scheduled Tweets, click on Unsent Tweets from the Tweet compose
                box.
              </span>
            )}
        </div> */}
      </div>
    </div>
  )
}

export default Questions
