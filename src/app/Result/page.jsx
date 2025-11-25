"use client"
import React, {useContext, useState} from 'react'
import { assets } from '../../../public/assets'
import Image from 'next/image'
import { AppContext } from '../context/AppContext'

const page = () => {

  
  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [input, setinput] = useState('')
  

  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async(e)=>{
    console.log('hello world');
    e.preventDefault();
    setLoading(true)
    console.log('hello world 2');
    
    if(input){
      console.log(input);
      
      const image = await generateImage(input)
      console.log(image);
      if(image){
        setIsImageLoaded(true)
        console.log(image);
        
        setImage(image)
      }
    }
    setLoading(false)
  }

  return (
    <form className='flex flex-col min-h-[90vh] justify-center items-center ' onSubmit={onSubmitHandler}>
    <div>
      <div className='relative'>
        <Image  
        src={image}
        height={500}
        width={500}
        alt="Placeholder Image"
        className="max-w-sm rounded"/>
        <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${Loading ? ' w-full transition-all duration-[10s]' : 'w-0'}`}/>
      </div>
      
      <p className={!Loading? 'hidden': ''}>Loading....</p>
    </div>

    {!isImageLoaded && 
    <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5  mt-10 rounded-full'>
      <input type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' onChange={e => setinput(e.target.value)} value={input}/>
      <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>Generate</button>
    </div>
    }
    
    {isImageLoaded &&  
    <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
      <p className='bg-transparent border border-y-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer' onClick={()=>{setIsImageLoaded(false)}}>Generate Another</p>
      <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
    </div>
    }
   
    </form>
  )
}

export default page