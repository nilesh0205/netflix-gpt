import React from 'react'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const user = useSelector((state) => state.user.userData);
  const navigate=useNavigate();
  const handelSignOut=()=>{
    signOut(auth).then(()=>{
      navigate("/")
    }).catch(()=>{
      navigate("/error");
    })
  }
  return (
    <div className='flex justify-between items-center z-10 w-screen px-8 py-2 absolute bg-gradient-to-b from-black '>
      <img className='object-cover w-52' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="logo"/>
    {user &&<div className='flex items-center'>
      <img className='w-12 h-12' src="https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg" alt="" />
      <span onClick={handelSignOut} className='text-white font-medium cursor-pointer'>(Sign Out)</span>
    </div>}
        
    </div>
  )
}

export default Header
