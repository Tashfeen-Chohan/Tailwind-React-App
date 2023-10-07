import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div id='analytics' className='w-full bg-white'>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row md:justify-center md:items-center py-10 px-4'>
        <img className='w-[90%] md:w-1/2 mx-auto' src={Laptop} alt="/" />
        <div className='flex flex-col gap-1'>
          <p className='text-green-400 font-bold mt-5' >DATA ANALYTICS DASHBOARD</p>
          <h1 className='font-bold text-black text-xl md:text-3xl'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Idluptatum perspiciatis mollitia suscipit quisquam odit eaque. Est laudantium fugit voluptates maxime odit numquam illum exercitationem laborum modi dolorem delectus fuga perferendis officiis eveniet aliquam labore, ullam ut dolor! Nam minima eum cumque.</p>
          <button className='bg-green-400 w-28 mx-auto md:mx-0 mt-3 hover:bg-green-500 transition-colors duration-300  rounded-lg py-2 px-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
