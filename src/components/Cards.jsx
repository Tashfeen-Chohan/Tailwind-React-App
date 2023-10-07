import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='w-full bg-white'>
      <div className='grid md:grid-cols-3 md:items-center gap-5 py-20 max-w-5xl mx-auto'>

        {/* Card 1 */}
        <div id='cards' className='w-[90%] hover:scale-110 duration-300 mx-auto md:w-full shadow-lg rounded-md p-5 flex flex-col justify-center'>
          <img className='w-20 mx-auto' src={Single} alt="" />
          <h2 className='font-bold text-2xl text-center py-2'>Single User</h2>
          <p className='text-3xl font-bold text-center'>$149</p>
          <div>
            <p className='py-2 border-b text-center'>500 GB Storage</p>
            <p className='py-2 border-b text-center'>1 Granted User</p>
            <p className='py-2 border-b text-center'>Send upto 2 GB</p>
          </div>
          <button className='bg-green-400 mx-auto mt-3 hover:bg-green-500 transition-colors duration-300  rounded-lg py-2 px-4 text-black'>Start Trial</button>
        </div>

        {/* Card 2 */}
        <div className='w-[90%] hover:scale-110 duration-300  bg-gray-100 mx-auto md:w-full shadow-lg rounded-md p-5 flex flex-col justify-center'>
          <img className='w-20 mx-auto' src={Double} alt="" />
          <h2 className='font-bold text-2xl text-center py-2'>Double User</h2>
          <p className='text-3xl font-bold text-center'>$299</p>
          <div>
            <p className='py-2 border-b text-center'>1500 GB Storage</p>
            <p className='py-2 border-b text-center'>2 Granted User</p>
            <p className='py-2 border-b text-center'>Send upto 5 GB</p>
          </div>
          <button className='bg-black mx-auto mt-3 hover:bg-green-500 transition-colors duration-300  rounded-lg py-2 px-4 text-white'>Start Trial</button>
        </div>

        {/* Card 3 */}
        <div className='w-[90%] hover:scale-110 duration-300 mx-auto md:w-full shadow-lg rounded-md p-5 flex flex-col justify-center'>
          <img className='w-20 mx-auto' src={Triple} alt="" />
          <h2 className='font-bold text-2xl text-center py-2'>Multiple User</h2>
          <p className='text-3xl font-bold text-center'>$999</p>
          <div>
            <p className='py-2 border-b text-center'>5000 GB Storage</p>
            <p className='py-2 border-b text-center'>5 Granted User</p>
            <p className='py-2 border-b text-center'>Send upto 15 GB</p>
          </div>
          <button className='bg-green-400 mx-auto mt-3 hover:bg-green-500 transition-colors duration-300  rounded-lg py-1 px-3 text-black'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
