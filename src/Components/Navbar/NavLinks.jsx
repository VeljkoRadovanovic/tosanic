import React from 'react'

const NavLinks = () => {
    const Links = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Services",
            link: "/",
        },
        {
            name: "Order Form",
            link: "/",
        },
        {
            name: "Contact",
            link: "/",
        },
        {
            name: "About Us",
            link: "/",
        },
    ]
  return (
    <>
        {
            Links.map((link, i)=>(
                <li key={i} className='font-semibold hover:text-secondary'>
                    <a href={link.link}>{link.name}</a>
                </li>
            ))
        }
    
    </>
  )
}

export default NavLinks