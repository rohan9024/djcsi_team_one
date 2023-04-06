import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.png"
import more from "../assets/more.svg"


function Header() {
  return (
    <div className='flex p-10 w-full justify-between'>
      
      <Image 
      src={logo}
      width={90}
      height={90}
      className=''
      />
         <Image 
      src={more}
      width={20}
      height={20}
      className=''
      />
    </div>
  )
}

export default Header