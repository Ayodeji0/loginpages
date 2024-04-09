import React from 'react'
import handImg from '../assets/handImg.jpg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

function Login2() {
  return (
    <div className='relative w-full h-screen bg-zinc-900/50'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={handImg} alt='handbtc' />
      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8' >
            <h2 className='text-5xl font-bold text-center py-4'>Lumcoin</h2>
            <div className=' flex justify-between py-8'>
                <p className=' border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FaFacebookF className='mr-2' /> facebook</p>
                <p className=' border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'> <FcGoogle className='mr-2' /> Google</p>
            </div>
            <div className='flex flex-col mb-4'>
                <label>UserName</label>
                <input className='border relative bg-gray-100 p-2' type='text'/>
            </div>
            <div className='flex flex-col'>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2' type='password'/>
            </div>
            <button className='w-full py-3 mt-8 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-3l'>Sign in</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" /> Remember Me</p>
            <p className='text-center mt-8'>Not a Member Yet? Sign Up Now</p>
        </form>
      </div>
    </div>
  )
}

export default Login2