import React from 'react'
import styles, { layout } from '../style'
import {slide,menu,herodashboard} from '../assets'
const Business = () => {
  return (
    <section>
      <div className='justify-items-center text-center'>

      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] 
      text-[#11453B] xs:leading-[76.8px] leading-[66.8px] w-full'>For Individuals and <br 
     className="m :block hidden"/>
       Businesses
     </h2>
     <p>Join 200+ businesses using Eazipay's easy solution.</p>
     <img src={slide} alt="Billing" className={`${styles.flexCenter} my-4`}/>
        <p> We are happy to answer your queries. Please, reach us at <br/>hello@myeazipay.com and expect our response shortly after.</p>
      </div>
      
    </section>
  )
}

export default Business