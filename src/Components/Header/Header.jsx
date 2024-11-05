import React, { useState, useRef } from 'react'
import { Logo, Logo1 } from '../../AllFilesAccess'
import { useTheme } from '../ContextAPI/Mode'


function Header() {
  const [ToggleNav, setToggleNav] = useState(false)
  const [Onscroll, setOnscroll] = useState(false)

  const { Mode, Dark, light } = useTheme()

  const ToggleTheme = (e) => {
    if (e.currentTarget.checked) {
      Dark()
    } else {
      light()
    }
  }

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

  const ChangeBackground = () => {
    if (window.scrollY >= 20) {
      setOnscroll(true)
    } else {
      setOnscroll(false)
    }
  }
  window.addEventListener("scroll", ChangeBackground)
  return (

    <>
      <header
        className={`header shadow-lg flex justify-between items-center py-2 px-6 sm:px-9 md:px-10 lg:px-16 fixed top-0 left-0 duration-200  z-10 w-full ${Onscroll ? "bg-white text-black" : "bg-transparent text-white"}`}>
        <div className='Logo cursor-pointer'>
          <img className='w-[140px] md:w-[180px]' src={Onscroll ? Logo : Logo1} alt="logo" />
        </div>
        <div onClick={() => setToggleNav(!ToggleNav)} className='toggle-btn md:hidden text-2xl cursor-pointer'>
          <i ref={toggleRef} className={`fa-solid duration-200 ${ToggleNav ? "fa-xmark rotate-90" : "fa-bars"}`}></i>
        </div>
        <nav className={`shadow-lg md:shadow-none flex flex-col items-end text-end md:flex-row absolute top-14 md:static md:z-auto w-full md:w-fit py-10 px-5 md:p-0 gap-5 md:gap-10 transition-all duration-200 ease-in-out z-5 ${ToggleNav ? "right-0" : "right-[800px]"} md:pb-0 pb-12 md:bg-transparent 
        ${Onscroll ? "bg-white" : "bg-[#0F172A]"} z-0 `}>
          <ul className='flex flex-col md:flex-row gap-8 text-xl md:text-[15px] uppercase md:flex font-semibold md:gap-12 '>
            {
              links.map((links) => <li className={`font-Titillium hover:text-[#6C4DE7] duration-100`}><a href={links.link} >{links.name}</a></li>)
            }
          </ul>
          <div className='flex justify-center items-end md:items-center gap-3 flex-col md:flex-row'>
            <div className="wrapper flex justify-center items-center gap-4 order-1 md:order-2 ">
              <div className='order-2'>
                <i className={`bi text-2xl ${Mode === "dark" ? "bi-moon-stars-fill" : "bi-sun"} ${Onscroll ? "text-black" : "text-white"}`}></i>
              </div>
              <div className='order-1'>
                <label className="relative inline-flex items-center cursor-pointer ">
                  <input
                    ref={DarkMode}
                    type="checkbox"
                    className="sr-only peer"
                    onChange={ToggleTheme}
                    checked={Mode === "dark"}
                  />
                  <div className={`w-11 h-6 ${Onscroll ? "bg-[#0F172A]" : "bg-gray-700"} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}></div>
                </label>
              </div>
            </div>
            <div className='SocialMedia flex gap-5 text-3xl md:text-xl order-1'>
              {
                SocialMedia.map((className) => <a href={className.links}><i className={`fa-brands ${className.ClassName} duration-150 
                ${Onscroll ? "text-black" : "text-white"} hover:text-[#6C4DE7]`}></i> </a>)
              }
            </div>
          </div>
        </nav>

      </header >
    </>
  )
}

export default Header