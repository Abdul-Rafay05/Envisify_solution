import React, { useState, useRef } from 'react'
import { Logo, ToggleBtn } from '../../AllFilesAccess'

function Header() {
  const [ToggleNav, setToggleNav] = useState(false)
  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Services", link: "/" },
    { name: "Info", link: "/" },
    { name: "Contact", link: "/" }
  ]
  let SocialMedia = [
    { ClassName: "fa-linkedin", links: "/" },
    { ClassName: "fa-instagram", links: "/" },
    { ClassName: "fa-whatsapp", links: "/" },
    { ClassName: "fa-facebook", links: "/" },
  ]
  let toggleRef = useRef()

  window.addEventListener("click", (e) => e.target === toggleRef.current ? (() => setToggleNav(!ToggleNav)) : setToggleNav(false));

  return (
    <>
      <header className='shadow-lg flex justify-between items-center py-2 px-6 sm:px-9 md:px-16 z-100 sticky top-0 bg-white'>
        <div className='Logo cursor-pointer'>
          <img className='w-[140px] md:w-[180px]' src={Logo} alt="logo" />
        </div>
        <div onClick={() => setToggleNav(!ToggleNav)} className='toggle-btn md:hidden text-2xl cursor-pointer'>
          <i ref={toggleRef} className={`fa-solid duration-200 ${ToggleNav ? "fa-xmark rotate-90" : "fa-bars"}`}></i>
        </div>
        <nav className={`shadow-lg md:shadow-none flex flex-col items-end text-end md:flex-row absolute top-14 md:static w-full md:w-fit py-5 px-5 md:p-0 gap-5 md:gap-10 transition-all duration-200 ease-in-out z-5 ${ToggleNav ? "right-0" : "right-[800px]"} md:pb-0 pb-12 md:bg-transparent bg-white z-0`}>
          <div className="wrap flex flex-col md:flex md:flex-col md:items-end order-2 md:order-1 gap-7 md:gap-2">
            <div className='SocialMedia flex gap-5 text-3xl md:text-xl md:order-1 order-2'>
              {
                SocialMedia.map((className) => <a href={className.links}><i className={`fa-brands ${className.ClassName} text-[#254592] hover:text-[#6D6E72] duration-150`}></i> </a>)
              }
            </div>
            <div className='md:order-2 order-1'>
              <ul className='flex flex-col md:flex-row gap-8 text-xl md:text-[15px]  text-[#6D6E72] uppercase md:flex font-semibold md:gap-8'>
                {
                  links.map((links) => <li><a href={links.link} >{links.name}</a></li>)
                }
              </ul>
            </div>
          </div>
          <div className="wrap md:order-2 order-1">
            <ToggleBtn />
          </div>
        </nav>
      </header >
    </>
  )
}

export default Header