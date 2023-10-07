import React from 'react'

function Newsletter() {
  return (
    <div id="newsletter" className='max-w-5xl px-3 py-10 mx-auto text-white md:flex  md:items-center md:gap-5'>
      <div className='md:w-[65%] w-full' >
        <h2 className='font-bold text-lg md:text-3xl'>Want tips & tricks to optimze your flow?</h2>
        <p>Sign up to our Newsletter and stay upto data.</p>
      </div>
      <div className='flex flex-col  mt-5 md:w-[35%]'>
        <input className='p-2 text-black rounded-md' type="email" placeholder='Enter you email' />
        <button className='bg-green-400 w-28 mx-auto md:mx-0 mt-3 hover:bg-green-500 transition-colors duration-300  rounded-lg py-1 px-3 text-black'>Notify Me</button>
        <p className='pt-4'>We care about protection of your data. Read our <span className='text-green-400'>Privacy Policy</span></p>
      </div>
    </div>
  )
}

export default Newsletter
