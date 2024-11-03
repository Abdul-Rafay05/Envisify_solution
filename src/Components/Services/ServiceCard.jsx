import React from 'react'
import { Button } from "../../AllFilesAccess"

function ServiceCard(props) {

    return (
        <>
            <div
                className="container bg-white shadow-lg w-full md:w-[45%] lg:w-[30%] p-5 flex flex-col justify-center items-center text-center border-b-[#6C4DE7] border-b-8 rounded-xl  duration-300 cursor-pointer hover:scale-105">
                <div className="image w-[100px] border-2 p-4 rounded-full bg-white hover:scale-110 duration-300">
                    <img className='w-full h-auto' src={props.image} alt="" />
                </div>
                <div className="heading mt-4 mb-2">
                    <h1 className='text text-center text-xl font-bold uppercase text-[#6C4DE7] duration-150'>
                        {props.title}
                    </h1>
                </div>
                <div className="text text-center text-sm">
                    <p>{props.content}</p>
                </div>
                <div className="button mt-4 cursor-pointer">
                    <Button title="More Detials" />
                </div>

            </div>
        </>
    )
}

export default ServiceCard