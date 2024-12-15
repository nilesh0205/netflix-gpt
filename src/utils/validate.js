import React from 'react'

export const validate = (email,password) => {
  console.log("email1111",email)

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    console.log("emailRegex",emailRegex)
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password);
     console.log("passwordRegex",passwordRegex)
      
      if(!emailRegex){
        return "Email is notvalid";
      }
      if(!passwordRegex){
        return "Password is not valid";
      }
      return null;

}
