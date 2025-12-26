import React from 'react'

const games = () => {

    let games = [
        "imgs/hunter1.jpg",
        "imgs/hunter2.jpg"
    ]
    let games2 = [
        "imgs/hunter3.jpg",
        "imgs/hunter4.jpg",

    ]
    return (
        <div className=' flex gap-10 px-10 py-5'>
            {games.map((img, idx) => (
                <div className='h-53 w-53 overflow-hidden rounded-4xl -rotate-12  hover:rotate-0  transition-transform duration-300 ease-out' >
                    <img key={idx} className=' object-cover ' src={img} alt="" />
                </div>
            ))}

            <div className='h-55 w-55 overflow-hidden '>
                <img className=' h-full w-full object-cover rounded-4xl' src="imgs/hunter5.jpg" alt="" />
            </div>

            {games2.map((img, idx) => (
                <div className='h-53 w-53 rounded-4xl overflow-hidden rotate-12 hover:rotate-0  transition-transform duration-300 ease-out' >
                    <img key={idx} className=' object-cover' src={img} alt="" />

                </div>
            ))}
        </div>
    )
}

export default games