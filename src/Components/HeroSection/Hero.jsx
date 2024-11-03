import React from 'react'
import { Button, Hero_image } from "../../AllFilesAccess"
function Hero() {
  return (
    <>
      <div className="container flex justify-center py-20 px-5 flex-col md:flex-row md:flex md:p-20 md:px-5 min-w-full md:gap-4 gap-6 lg:p-20 lg:gap-0">
        <div className="hero_content w-full md:w-3/6 md:p-0 md:order-1 order-2">
          <div className="content md:px-10 p-5 lg:p-10 lg:px-5 lg:ps-20">
            <h1 className='text-xl md:text-2xl font-bold uppercase text-[#6C4DE7] '>Lorem ipsum dolor sit amet.</h1>
            <p className='text-justify text-black my-5 md:text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi eius labore voluptatem nam recusandae dolor commodi unde quas repellat temporibus qui fuga ea deserunt quia in dolore aliquam, reprehenderit repudiandae quisquam quasi dicta excepturi laudantium dolores! Cupiditate eaque porro vel, quasi rerum animi repellendus. Voluptas ad dignissimos ipsa consequatur.
            </p>
            <Button title="Instant Talk" />
          </div>
        </div>
        <div className="hero_image w-full md:w-3/6 grid place-content-center md:order-2 order-1">
          <div className="image">
            <img className='p-5 md:p-0' src={Hero_image} alt="Hello" />
          </div>
        </div>
      </div>
    </>

  )
}

export default Hero