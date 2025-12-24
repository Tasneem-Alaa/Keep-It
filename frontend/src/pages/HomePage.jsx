import React from 'react'
import Navbar from "../components/Navbar"
import { useState } from 'react'
import RateLimitUI from '../components/RateLimitUI'


const HomePage = () => {
  const {isRateLimited,setIsRateLimited} = useState(false)
  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimitUI/>}
    </div>
  )
}

export default HomePage