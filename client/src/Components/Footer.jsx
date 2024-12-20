import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
        <img src={assets.logo} alt='logo'/>
        <p>Copyright bg.removal | All right reserved.</p>
        <div>
            <img src={assets.facebook_icon} width={40} />
            <img width={40} src={assets.twitter_icon}/>
            <img width={40} src={assets.google_plus_icon}/>
        </div>
    </div>
  )
}

export default Footer
