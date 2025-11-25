"use client"
import React,{useContext, useState} from 'react'
import { assets } from '../../../public/assets'
import Image from "next/image";
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { useRouter } from 'next/navigation';
import {toast } from 'react-toastify';

const page = () => {
  const [state, setstate] = useState('Login')
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const {setShowLogin, backendUrl, settoken, setuser} = useContext(AppContext)
  const router = useRouter()

  const onSubmitHandler = async (e)=>{
    e.preventDefault()

    try {
      if (state === 'Login') {
        const {data} = await axios.post(backendUrl + '/api/user/login',{email, password})
        if(data.success){
          settoken(data.token)
          setuser(data.user)
          localStorage.setItem('token', data.token)
          router.push('/Result')
        }else{
          toast.error(data.message)
        }
      }else{
        const {data} = await axios.post(backendUrl + '/api/user/register',{name,email, password})
        if(data.success){
          settoken(data.token)
          setuser(data.user)
          localStorage.setItem('token', data.token)
          router.push('/Result')
        }else{
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


  
    return (
      <div className='absolute top-0 left-0 right-0 bottom-0 z-2 backdrop-blur-sm bg-black/30 flex justify-center items-center' onSubmit={onSubmitHandler}>
                  <form action="" className='relative bg-white p-10 rounded-xl text-slate-500' >
                      <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
                      <p className='text-sm'>Welcome back! Please sign in to continue</p>
          
                      {state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          
                          <Image 
                          src={assets.credit_star}
                          height={20}
                          width={20}
                          alt="Placeholder Image"
                          className=""/>
                          <input type="text" placeholder='Full Name' required className='outline-none text-sm' onChange={e=> setname(e.target.value)} value={name}/>
                      </div>}
                      <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          
                          <Image 
                          src={assets.email_icon}
                          height={20}
                          width={20}
                          alt="Placeholder Image"
                          className=""/>
                          <input type="text" placeholder='Email Id' required className='outline-none text-sm' onChange={e=> setemail(e.target.value)} value={email}/>
                      </div>
                      <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          
                          <Image 
                          src={assets.lock_icon}
                          height={15}
                          width={15}
                          alt="Placeholder Image"
                          className=""/>
                          <input type="Password" placeholder='Password' required className='outline-none text-sm' onChange={e=> setpassword(e.target.value)} value={password}/>
                      </div>
  
                      <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>
  
                      <button className='bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer'>{state === 'Login' ? 'Login' : 'Create Account'}</button>
  
  
                      {state === 'Login' ? 
                      <p className='mt-5 text-center'>Dont't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setstate('Sign Up')}>Sign up</span></p>
                      : 
                      <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setstate('Login')}>Login</span></p>
  }

                  </form>
              </div>
    )
  }
export default page