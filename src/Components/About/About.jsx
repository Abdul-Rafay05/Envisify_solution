import React from 'react'
import { Button } from "../../AllFilesAccess"
function About() {
    return (
        <>
            <div className="container flex justify-center py-2 px-5 flex-col md:flex-row md:flex md:p-20 md:px-5 min-w-full md:gap-4 gap-6 lg:p-20 lg:gap-20">
                <div className="hero_content w-full md:w-3/6 md:p-0 md:order-2 order-1">
                    <div className="content md:px-10 p-5 lg:p-10 ">
                        <h1 className='text-center md:text-start text-2xl font-bold uppercase text-[#6C4DE7] '>About <span className="text-[#584129]">Us</span></h1>
                        <p className='text-justify text-black my-5 md:text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi eius labore voluptatem nam recusandae dolor commodi unde quas repellat temporibus qui fuga ea deserunt quia in dolore aliquam, reprehenderit repudiandae quisquam quasi dicta excepturi laudantium dolores! Cupiditate eaque porro vel, quasi rerum animi repellendus. Voluptas ad dignissimos ipsa consequatur.
                        </p>
                        <Button title="See More" />
                    </div>
                </div>
                <div className="hero_image w-full md:w-3/6 grid place-content-center md:order-1 order-2">
                    <div className="image">
                        <img className='p-5 md:p-0' src="https://img.freepik.com/premium-vector/about-us_773186-1364.jpg" alt="Hello" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About