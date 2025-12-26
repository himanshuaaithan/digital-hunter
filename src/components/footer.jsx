import React from 'react'

const footer = () => {
    return (
        <div className='h-fit w-full py-10 flex justify-between'>
            <div className='h-full w-1/3 px-5 flex items-center gap-1'>
                <img className='h-10' src="./imgs/logo.png" alt="" />
                <h1 className='text-white font-medium '>digital<br /> hunters.</h1>
            </div>

            <div className=' h-full w-[40%] flex justify-between'>
                <div className=' text-xl transition-c text-white font-sans ' >
                    <h1>Privacy Policy</h1>
                    <h1>Terms Of Service</h1>
                    <h1>Cookie Policy</h1>
                </div>

                <div>
                    <span className='text-4xl text-white'><i class="ri-twitter-fill"></i></span>
                    <span className='text-4xl text-white'>  <i class="ri-facebook-box-fill"></i></span>
                </div>
            </div>
        </div>
    )
}

export default footer