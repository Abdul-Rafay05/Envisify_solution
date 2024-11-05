import React from 'react'

import ServiceCard from './ServiceCard'

function Service() {
    return (
        <>
            <div className="container p-5 flex flex-col gap-4 min-w-full dark:bg-[#0F172A]">
                <div className="content text-center">
                    <h1 className='font-Poppins text-2xl md:text-[35px] font-bold uppercase text-[#6C4DE7] dark:text-white'>Our <span className="text-black dark:text-[#38BDF8]">Services</span></h1>
                    <p className='font-Titillium text-black text-base md:text-lg mt-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi eius labore voluptatem nam recusandae dolor
                    </p>
                </div>
                <div className="services_portion flex flex-wrap gap-5 justify-center items-center w-full p-2 md:p-5 lg:p-8">
                    <ServiceCard title="Web Development" image="https://cdn-icons-png.flaticon.com/512/11096/11096817.png" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at magnam ex aspernatur ullam suscipit architecto?" />
                    <ServiceCard title="App Development"
                        image="https://png.pngtree.com/png-vector/20200310/ourmid/pngtree-modern-flat-design-concept-of-mobile-app-development-with-characters-building-png-image_2157836.jpg"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at magnam ex aspernatur ullam suscipit architecto?" />
                    <ServiceCard title="WordPress Development" image="https://www.digitalchef.com.au/wp-content/uploads/2022/06/wordpress-development.png" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at magnam ex aspernatur ullam suscipit architecto?" />
                    <ServiceCard title="Graphic Design" image="https://cdn-icons-png.flaticon.com/512/2901/2901284.png" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at magnam ex aspernatur ullam suscipit architecto?" />
                    <ServiceCard title="Vedio Editing" image="https://cdn-icons-png.flaticon.com/512/8152/8152756.png" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at magnam ex aspernatur ullam suscipit architecto?" />
                    <ServiceCard title="SEO" image="https://uxwing.com/wp-content/themes/uxwing/download/seo-marketing/seo-icon.png" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at magnam ex aspernatur ullam suscipit architecto?" />
                </div>
            </div>
        </>
    )
}

export default Service