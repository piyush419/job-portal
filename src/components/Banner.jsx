import React from 'react'
import banner from '../asset/banner.jpeg'
const Banner = () => {
  return (
    <div className='mt-10'>
        <img src={banner} alt="" className='w-screen h-96 object-cover' />
    </div>
  )
}

export default Banner