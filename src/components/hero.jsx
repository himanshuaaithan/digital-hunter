import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen w-full  px-0 py-2 relative overflow-hidden'>
            <div className=' h-auto w-full overflow-hidden'>
                <h1 className=' h-auto text-white font-semibold text-center text-[15rem] leading-none mt-5'>DIGITAL</h1>
            </div>
            <div className='h-fit w-full overflow-hidden'>
                <h1 className='font-semibold text-center text-[15rem] leading-none text-transparent  [-webkit-text-stroke:2px_#4EE1C6] '>HUNTERS</h1>
            </div>

            <div className='h-fit w-full flex justify-between mt-5 px-5'>
                <button className='h-14 bg-[#4EE1C6] transition-all duration-500 ease cursor-pointer rounded-full px-5  font-medium text-black'>Discuss The Project</button>

                <h1 className=' w-55 text-right text-amber-50'>MOBILE AND XR  <br /> GAME  DEVELOPMENT STUDIO</h1>
            </div>


            <img className=' h-160 fixed top-[65vh] left-1/2 -translate-x-1/2 -translate-y-1/2' src="imgs/hero.png" alt="" />
        </div>

    )
}

export default Hero