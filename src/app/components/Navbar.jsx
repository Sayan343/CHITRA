'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const {user,setuser,logout, Credit} = useContext(AppContext)
  console.log("USER:", user)
console.log("CREDIT:", Credit)

  return (
    <div className='flex justify-between items-center py-4'>
        <Link href="/"><Image
            src="/logo.svg"
            width={150}
            height={150}
            alt="Logo of the Brand"
        /></Link>
        <div>
          {
            user ? 
            // logged in user 
            <div className='flex items-center gap-2 sm:gap-3'>
              <Link href='/BuyCredit'>
              <button className='flex items-center gap-2 bg-blue-100 px-3 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700' >
                <Image
                    src="/credit_star.svg"
                    width={20}
                    height={20}
                    alt="Logo of the Brand"
                />
                <p className='text-xs sm-text-sm font-medium text-gray-600'>Credit Left: {Credit}</p>
              </button>
              </Link>
              <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name} </p>
              <div className='relative group'>
                <Image
                      src="/profile_icon.png"
                      width={20}
                      height={20}
                      alt="Logo of the Brand"
                />
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded-xl pt-12'>
                  <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                    <li className='py-1 px-2 cursor-pointer pr-10' onClick={logout}>Logout</li>
                  </ul>
                </div>
              </div>
            </div>
            : 
            //  logged out user 
            <div className='flex items-center gap-2 sm:gap-5'>
              <Link href='/BuyCredit'><p className='cursor-pointer'>Pricing</p></Link>
              <Link href='/auth'><button className='bg-zinc-800 text-white py-2 sm:px-2 text-sm rounded-xl'>Login</button></Link>
            </div>

          }
            
            
        </div>
    </div>
  )
}

export default Navbar