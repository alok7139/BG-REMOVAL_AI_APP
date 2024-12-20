import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
        <img width={150} src={assets.logo} alt='logo'/>
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright bg.removal | All right reserved.</p>
        <div className='flex gap-1'>
            <img src={assets.facebook_icon} width={40} />
            <img width={40} src={assets.twitter_icon}/>
            <img width={40} src={assets.google_plus_icon}/>
        </div>
    </div>
  )
}

export default Footer
