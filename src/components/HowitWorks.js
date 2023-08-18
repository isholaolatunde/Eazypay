import React from 'react'

import {how} from '../assets'
const HowitWorks = () => {
  return (
    <section>
      <div className='justify-items-center text-center'>

      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] 
      text-[#11453B] xs:leading-[76.8px] leading-[66.8px] w-full'>How Eazipay <br 
     className="m :block hidden"/>
       Works
     </h2>
     <p>Get started in 3 simple steps.</p>
     <img src={how} alt="Billing" 
        className="w-[1128px] h-[320px] justify-center flex justify-items-center" />

      </div>
    </section>
  )
}

export default HowitWorks