import React from 'react'
import { Button, BackgroundVideo } from "../../AllFilesAccess"
function Hero() {
  return (
    <>
      <div className="bgContainer w-full h-screen relative ">
        <div className="overlay">
          <video className='w-full h-[100vh] object-cover' src={BackgroundVideo} muted loop autoPlay />
          <div className="container absolute md:w-2/3 h-fit top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] p-5 flex flex-col justify-center items-center text-center rounded-lg">
            <h1 className='text-[28px] md:text-6xl font-semibold capitalize text-white font-Poppins '><span className='font-bold text-[#6C4DE7]'>Envisify Solution </span>Services Saler Company </h1>
            <p className='my-5 text-white font-Titillium md:text-[27px] leading-10 text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi eius labore voluptatem nam recusandae dolor commodi.
            </p>
            <Button title="Instant Talk" text_color="text-white" />
          </div>
        </div>
      </div >
    </>

  )
}

export default Hero