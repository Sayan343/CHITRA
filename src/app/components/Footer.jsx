import Image from 'next/image'
import React from 'react'
import { assets } from '../../../public/assets'

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
                <Image  
                src={assets.logo}
                height={100}
                width={100}
                alt="Placeholder Image"
                className=""/>
          <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">Copyright @Deb | All right reserved.</p>
          <div className="flex gap-2.5">
                <Image  
                src={assets.facebook_icon}
                height={35}
                width={35}
                alt="Placeholder Image"
                className=""/>
                <Image  
                src={assets.twitter_icon}
                height={35}
                width={35}
                alt="Placeholder Image"
                className=""/>
                <Image  
                src={assets.instagram_icon}
                height={35}
                width={35}
                alt="Placeholder Image"
                className=""/>
                
          </div>

      </div>
  )
}

export default Footer