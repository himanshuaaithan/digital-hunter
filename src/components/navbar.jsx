import React from 'react'

const Navbar = () => {
    return (
        <div className='h-16 w-full flex justify-between items-center px-0 py-2 fixed z-2 bg-[#1D1D1D]'>
            {/* logo */}
            <div className='h-full w-1/3 px-5 flex items-center gap-1'>
                <img className='h-10' src="./imgs/logo.png" alt="" />
                <h1 className='text-white font-medium '>Digital<br /> Hunters.</h1>
            </div>
            {/* a tags */}
            <div className='h-11 w-auto bg-[#353439] flex items-center gap-10 rounded-3xl px-3 text-white'>
                <a className='rounded-3xl px-3 py-1 hover:bg-[#4EE1C6] transition-all duration-500 ease font-medium ' href="#">Home</a>
                <a className='rounded-3xl px-3 py-1 hover:bg-[#4EE1C6] transition-all duration-500 ease font-medium' href="#">Team</a>
                <a className='rounded-3xl px-3 py-1 hover:bg-[#4EE1C6] transition-all duration-500 ease font-medium' href="#">Projects</a>
                <a className='rounded-3xl px-3 py-1 hover:bg-[#4EE1C6] transition-all duration-500 ease font-medium' href="#">News</a>
            </div>
            {/* nav left  */}
            <div className='h-full w-1/3 flex items-center justify-end pr-5'>
                <button className='h-11 bg-[#4EE1C6] cursor-pointer rounded-3xl px-5 font-medium text-white transition duration-300 hover:scale-110'>Contact Us</button>
            </div>
        </div>
    )
}




export default Navbar