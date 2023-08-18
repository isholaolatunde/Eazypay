import { useState } from "react"
import {logo, menuicon,closeicon}  from "../assets"
import {navLinks} from '../constants'
import Button from "./Button"
const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
     <img src={logo} alt="Logo" className="w-[122px] h-[32px]" />
     <ul className="list-none sm:flex hidden
    justify-end items-center flex-1">
    {navLinks.map((nav,index) => (
      <li
       key={nav.id}
       className={`font-poppins font-normal cursor-pointer 
       text-[16px] text-[#515251] mr-10 
       ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`}
      >
      <a href={`#${nav.id}`}>
      {nav.title}
      </a>
      </li>
    ))}
    </ul>
    <div className="list-none sm:flex hidden
    justify-center items-center flex-1 ">
     <Button text ="Login"/>
     <Button text ="Register"/>
    </div>
    <div className="sm:hidden flex flex-1 justify-end items-center">
     <img 
     src={toggle ? closeicon : menuicon }
     alt = "menu"
     className="w-[28px] h-[28px]
     object-contain" onClick={()=>setToggle((prev) =>!prev)}/>
     <div
      className={`${toggle? 'flex' : 'hidden'} p-6 
      bg-buttoncolor 
      absolute top-20 right-0 
      mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

     <ul className="list-none flex flex-col 
    justify-end items-center flex-1">
    {navLinks.map((nav,index) => (
      <li
       key={nav.id}
       className={`font-poppins font-normal cursor-pointer 
       text-[16px] text-[#FFFFFF] mr-10 
       ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'}`}
      >
      <a href={`#${nav.id}`}>
      {nav.title}
      </a>
      </li>
    ))}
    <li className='font-poppins font-normal cursor-pointer 
       text-[16px] text-[#FFFFFF] mr-10 mb-4'>Login</li>
    <li className='font-poppins font-normal cursor-pointer 
       text-[16px] text-[#FFFFFF] mr-10 mb-4'>Register</li>
    </ul>
     </div>
    </div>
    </nav>
  )
}

export default NavBar