import React from 'react'

export default function Navbar() {
  return (
    <div className='container flex bg-transparent w-full absolute'>
      <img src="img/logo_ukmik.png" alt="" className='border border-primary-1 w-[75px] h-[75px]' />
      <div className="flex">
        <ul className='flex'>
          <li>Home</li>
          <li>Profile</li>
          <li>Blog</li>
        </ul>
       </div>
    </div>
  )
}
