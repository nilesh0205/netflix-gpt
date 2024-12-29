import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser, setUser } from '../utils/userSlice'

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const navigate=useNavigate();
  const handelSignOut=()=>{
    signOut(auth).then(()=>{
    }).catch(()=>{
      navigate("/error");
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          setUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(clearUser());
        navigate("/")
      }
    });
  }, []);
  return (
    <div className='flex justify-between items-center z-10 w-full px-8 py-2 absolute bg-gradient-to-b from-black '>
      <img className='object-cover w-52' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="logo"/>
    {user &&<div className='flex items-center'>
      <img className='w-12 h-12' src="https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg" alt="" />
      <span onClick={handelSignOut} className='text-white font-medium cursor-pointer'>(Sign Out)</span>
    </div>}
        
    </div>
  )
}

export default Header
