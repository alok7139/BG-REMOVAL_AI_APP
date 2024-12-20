import React from 'react'
import { assets  , plans} from '../assets/assets'

function Buycredit() {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className=''>Out Plans</button>
      <h1>Choose the plan that's right for you</h1>
      <div>
         {plans.map((item,ind) => {
           return (
              <div key={ind}>
                <img src={assets.logo_icon}  alt=''/>
                 <p>{item.div}</p>
                 <p>{item.desc}</p>
                 <p>
                  <span>${item.price} </span> / {item.credits} credit
                 </p>
              </div>
           )
         })}
      </div>
       
    </div>
  )
}

export default Buycredit
