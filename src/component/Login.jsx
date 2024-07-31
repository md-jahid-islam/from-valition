
import React, { useState } from 'react'
import Lottie from "lottie-react";
import animation from "../../public/animations/Animation - 1721135189137.json"
import './Login.css'
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast } from 'react-toastify';
function Login() {

// ========================variable part start


const [email , setEmail]                  = useState ('')
const [emailError , setEmailError ]       = useState ('')

const [password , setPassword]            = useState ('')
const [passwordError , setPasswordError]  = useState ('')


// ========================functions part start


const handelEmail = (e)=>{
   setEmail(e.target.value)
   setEmailError('')
}

const handelPassword = (e)=>{
    setPassword(e.target.value)
    setPasswordError('')
}


// ==========================submit
const handelSubmit = (e)=>{
  
    e.preventDefault()
   
    if(!email){
       setEmailError('enter your email')
    }
     else if(!password){
        setPasswordError('enter your password')
    }
    else{
        toast('🦄 success login!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }

}


  return (
   <>
   
   <div className=' flex h-screen justify-center items-center '>
  
    <div className=' w-[550px] '>
    <Lottie animationData={animation} />;
    </div>
     <div className='login'>
        <h2>login</h2>
        <form onSubmit={handelSubmit} className='main_form'>
          <label>Email</label>
          <br />
          <input onChange={handelEmail} type="email" placeholder=' Enter your email' />
          <br />
          <p className=' error'>{emailError}</p>
          <label>Password</label>
          <br />
          <div className=' main_icons'>
          <IoMdEyeOff className=' icons' />
          <IoEyeSharp className=' icons' />
          <input onChange={handelPassword} type="password" placeholder=' Enter your password' />
          </div>
          <p className=' error'>{passwordError}</p>
          <button  type='submit' className='Button'>Login</button>
        </form>
       
     </div>


   </div>
   
   </>
  )
}

export default Login