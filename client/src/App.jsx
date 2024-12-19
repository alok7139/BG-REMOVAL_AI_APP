import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Buycredit from './pages/Buycredit'

function App() {
  return (
    <div className='bg-red-400'>
       <Routes>
         <Route path='/' element= {<Home/>}/>
         <Route path='/result' element={<Result/>}/>
         <Route path='/buy/credit' element={<Buycredit/>}/>
       </Routes>
    </div>
  )
}

export default App
