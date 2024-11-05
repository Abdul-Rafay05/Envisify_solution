import React from 'react'
import { Button, AboutImage } from "../../AllFilesAccess"
import { useTheme } from '../ContextAPI/Mode'

function About() {
    const { Mode } = useTheme()
    return (
        <>
            <div className="container flex justify-center items-center py-2 px-5 flex-col md:flex-row md:flex md:p-20 md:px-5 min-w-full md:gap-4 gap-6 lg:p-20 lg:gap-10 xl:gap-20 dark:bg-[#0F172A]">
                <div className="hero_content w-full md:w-3/6 md:p-0 order-2">
                    <div className="content md:px-10 p-5 lg:p-10 ">
                        <h1 className='font-["Poppins"] text-center md:text-start text-2xl md:text-[35px] font-semibold uppercase text-[#6C4DE7] dark:text-white'>About <span className="text-black dark:text-[#38BDF8]">Us</span></h1>
                        <p className='font-Titillium text-base md:text-lg text-justify text-black my-5 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi eius labore voluptatem nam recusandae dolor commodi unde quas repellat temporibus qui fuga ea deserunt quia in dolore aliquam, reprehenderit repudiandae quisquam quasi dicta excepturi laudantium dolores! Cupiditate eaque porro vel, quasi rerum animi repellendus. Voluptas ad dignissimos ipsa consequatur.
                        </p>
                        <Button title="See More" textColor={Mode == "dark" ? "text-white" : "text-black"} />
                    </div>
                </div>
                <div className="hero_image w-full md:w-3/6 grid place-content-center order-1">
                    <div className="image flex justify-center md:flex md:justify-end md:items-center ">
                        <img className='p-5 md:p-0 rounded-2xl w-full md:w-3/4' src={AboutImage} alt="Hello" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About