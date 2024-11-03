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
  let DarkMode = useRef()

  window.addEventListener("click", (e) => {
    if (e.target === toggleRef.current) {
      (() => setToggleNav(!ToggleNav))
    } else if (e.target === DarkMode.current) {
      setToggleNav(true)
    } else {
      setToggleNav(false)
    }
  });

  return (
    <>
      <header className='shadow-lg flex justify-between items-center py-2 px-6 sm:px-9 md:px-10 lg:px-16 sticky top-0 bg-white'>
        <div className='Logo cursor-pointer relative z-100'>
          <img className='w-[140px] md:w-[180px]' src={Logo} alt="logo" />
        </div>
        <div onClick={() => setToggleNav(!ToggleNav)} className='toggle-btn md:hidden text-2xl cursor-pointer'>
          <i ref={toggleRef} className={`fa-solid duration-200 ${ToggleNav ? "fa-xmark rotate-90" : "fa-bars"}`}></i>
        </div>
        <nav className={`shadow-lg md:shadow-none flex flex-col items-end text-end md:flex-row absolute top-14 md:static w-full md:w-fit py-5 px-5 md:p-0 gap-5 md:gap-10 transition-all duration-200 ease-in-out z-5 ${ToggleNav ? "right-0" : "right-[800px]"} md:pb-0 pb-12 md:bg-transparent bg-white z-0`}>
          <div className="wrap flex flex-col md:flex md:flex-col md:items-end order-2 md:order-1 gap-7 md:gap-2">
            <div className='SocialMedia flex gap-5 text-3xl md:text-xl md:order-1 order-2'>
              {
                SocialMedia.map((className) => <a href={className.links}><i className={`fa-brands ${className.ClassName} text-[#6C4DE7] hover:text-[#6D6E72] duration-150`}></i> </a>)
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
            <div className='flex gap-2 md:flex md:flex-col md:justify-center md:items-center'>
              <div className='order-2 md:order-1'>
                <i className="fa-solid fa-sun"></i>
              </div>
              <div className='order-1 md:order-2'>
                <label className="relative inline-flex items-center cursor-pointer ">
                  <input
                    ref={DarkMode}
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </nav>
      </header >
    </>
  )
}

export default Header