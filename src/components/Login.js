import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg" alt='bgImg'/>
      </div>
      <form className='w-3/12 absolute bg-black py-12 px-5 my-36 mx-auto right-0 left-0 flex flex-col gap-6'>
        <h4 className='text-white font-bold text-2xl'>Sign In</h4>
        <input type="email" id="Email" className=" p-2 bg-slate-600 w-full" placeholder="Email" required />
        <input type="password" id="password" className=" p-2 bg-slate-600 w-full" placeholder="password" required />
        <button className='bg-red-500 p-2 text-white font-medium w-full'>Sign In</button>
    </form>
    </div>
  )
}

export default Login
