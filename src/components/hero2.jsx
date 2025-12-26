import React from 'react'
import Games from './games'
import Footer from './footer'

export const hero2 = () => {
    return (
        <div className='h-screen bg-[#1D1D1D] relative '>
            <div className=' whitespace-nowrap h-110 w-full bg-[#29282E] rounded-tl-[100px]  rounded-tr-[100px] overflow-hidden'>
                <Games />
                <div className=' h-15 w-full bg-[#22ded4] -rotate-3 mt-10 flex items-center gap-2 justify-between '>
                    <span className='text-4xl'><i class="ri-gamepad-fill"></i></span>
                    <span className='text-4xl'><i class="ri-discord-fill"></i></span>
                    <span className='text-4xl'><i class="ri-game-fill"></i></span>
                    <span className='text-4xl'><i class="ri-chess-fill"></i></span>
                    <span className='text-4xl'><i class="ri-game-2-fill"></i></span>
                    <span className='text-4xl'><i class="ri-gamepad-fill"></i></span>
                    <span className='text-4xl'><i class="ri-discord-fill"></i></span>
                    <span className='text-4xl'><i class="ri-game-fill"></i></span>
                    <span className='text-4xl'><i class="ri-chess-fill"></i></span>
                    <span className='text-4xl'><i class="ri-game-2-fill"></i></span>
                </div>
                 <div className=' h-15 w-full bg-[#22ded4] rotate-3 -mt-15  flex items-center gap-2 justify-between [box-shadow:0_20px_40px_rgba(0,0,0,0.25)]'>
                    <span className='text-4xl'><i class="ri-gamepad-fill"></i></span>
                    <span className='text-4xl'><i class="ri-discord-fill"></i></span>
                    <span className='text-4xl'><i class="ri-game-fill"></i></span>
                    <span className='text-4xl'><i class="ri-chess-fill"></i></span>
                    <span className='text-4xl'><i class="ri-game-2-fill"></i></span>
                    <span className='text-4xl'><i class="ri-gamepad-fill"></i></span>
                    <span className='text-4xl'><i class="ri-discord-fill"></i></span>
                    <span className='text-4xl'><i class="ri-game-fill"></i></span>
                    <span className='text-4xl'><i class="ri-chess-fill"></i></span>
                    <span className='text-4xl'><i class="ri-game-2-fill"></i></span>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default hero2