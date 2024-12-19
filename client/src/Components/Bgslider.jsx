import React, { useState } from 'react'
import { assets } from '../assets/assets';

function Bgslider() {

    const [sliderposition, setsliderposition] = useState(50)

    const handlesliderchange = (e) => {
        setsliderposition(e.target.value);
    }
  return (
    <div>
         {/* title */}
        <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl 
        mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 
        bg-clip-text text-transparent'>Remove Background with High <br/> Quality and Accuracy</h1>

        <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
            <img src={assets.image_w_bg} alt='img' style={{clipPath:`inset(0 ${100.2-sliderposition}% 0 0)`}}/>

            {/* for ground image */}
            <img className='absolute top-0 left-0 w-full h-full' src={assets.image_wo_bg} style={{clipPath:`inset(0 0 0 ${sliderposition}% )`}} alt='withoutimg'/>

            {/* slider */}
            <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type='range' min={0} max={100} value={sliderposition} onChange={handlesliderchange}/>
        </div>
    </div>
  )
}

export default Bgslider
