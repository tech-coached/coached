import React, { useState } from 'react'
import top from '../Assets/faq-arrow.svg'
import top1 from '../Assets/faq-arrow1.svg'
import '../Styles/questions.scss'

const question = [
  {
    que: 'What roles can I hire CoachEd Drifters for?',
    ans: ' To save a draft of your Tweet, click the X icon in the top left corner of the compose box, then click Save. To schedule your Tweet to be sent at a later date/time, click on the calendar icon at the bottom of the compose box and make your schedule selections, then click Confirm. To access your drafts and scheduled Tweets, click on Unsent Tweets from the Tweet compose box.',
  },
  {
    que: 'What roles can I hire CoachEd Drifters for?',
    ans: ' To save a draft of your Tweet, click the X icon in the top left corner of the compose box, then click Save. To schedule your Tweet to be sent at a later date/time, click on the calendar icon at the bottom of the compose box and make your schedule selections, then click Confirm. To access your drafts and scheduled Tweets, click on Unsent Tweets from the Tweet compose box.',
  },
  {
    que: 'What roles can I hire CoachEd Drifters for?',
    ans: ' To save a draft of your Tweet, click the X icon in the top left corner of the compose box, then click Save. To schedule your Tweet to be sent at a later date/time, click on the calendar icon at the bottom of the compose box and make your schedule selections, then click Confirm. To access your drafts and scheduled Tweets, click on Unsent Tweets from the Tweet compose box.',
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
              className='row-span-3 bg-[#ffffff] rounded-[10px] p-4 shadow-[0px_4px_8px_#F3F3F3] relative'
              key={index}
            >
              <span className='font-bold'>{item.que}</span>
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
