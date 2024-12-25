import React from 'react'
import { useSelector } from 'react-redux';
import Header from './Header';

const Browser = () => {
  const user = useSelector((state) => state.user.userData);
  return (
    <div>
     <Header/>
    </div>
  )
}

export default Browser
