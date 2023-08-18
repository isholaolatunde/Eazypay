import React from 'react'
import styles from '../style'
import {  herodashboard} from '../assets'
import Button from './Button'
const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col
    ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart}> 
      flex-col xl:px-0 sm:px-16 px-6`}>
      <h1 className=" flex-1 font-popping font-semibold ss:text-[70px]
      text-[52px] text-[#11453B] ss:leading-[100px] leading-[75px]">
        Run Your Payroll <br className="sm:block hidden" /> {" "}
      <span className='text-[#B4A572]'>easily</span> in <span className='text-[#EA4E4B]'>seconds</span>{" "}
      </h1>
      <p className='font-poppins font-normal text-[#515251] text-[18px] leading-[30.8px] max-w-[483px] mt-5'>
      We ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, 
      bills, and relevant taxes all at once.
      </p>
      <div className='sm:py-6 py-4'>
      <Button text ="Start Using Free, Forever" className="py-8"/>
      </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter}
      md:my-0 my-10 relative`}>
        <img src={herodashboard} alt="Billing" 
        className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute  
      w-[40%] z-[0] h-[35%] top-0 pink__gradient"/>
      <div className="absolute  
      w-[50%] z-[0] h-[50%] 
      right-20 bottom-20 blue__gradient"/>
      
      </div>
    </section>
  )
}

export default Hero