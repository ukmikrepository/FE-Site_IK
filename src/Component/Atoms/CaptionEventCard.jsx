import React from 'react'

export default function CaptionEventCard({title, date}) {
  return (
    <div className='py-8 px-4 bg-black/25 text-white'>
        <h1 className='font-bold'>{title}</h1>
        <span className='font-light'>{date}</span>
    </div>
  )
}
