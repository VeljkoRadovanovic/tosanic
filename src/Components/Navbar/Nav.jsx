import React, { useEffect, useState } from "react";
import Logo from '../../assets/Logo.png'
import NavLinks from './NavLinks';

const Nav = () => {
  const [open, setOpen] = useState(true)
  return (
    <nav className='flex justify-between'>
        <img src={Logo} alt="" srcset="" className='cursor-pointer h-28' />
        <ul className='md:flex hidden items-center gap-16'>
          <NavLinks />
        </ul>
        {/* Mobile */}
        <ul className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500 ${open ? 'right-0' : "right-[-100%]"}`}>
          <NavLinks />
        </ul>
        <div className="text-4xl md:hidden z-50" onClick={()=> setOpen(!open)}>
        {open ? <ion-icon name="close"></ion-icon> : <ion-icon name="menu"></ion-icon>}
        </div>
    </nav>
  )
}

export default Nav