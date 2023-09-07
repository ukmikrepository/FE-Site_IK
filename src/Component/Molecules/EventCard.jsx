import React from 'react'
import CaptionEventCard from '../Atoms/CaptionEventCard'

export default function EventCard({imageUrl, title, date}) {
  return (
    <div className='relative group'>
      <img src={imageUrl} alt="" className='object-cover w-full h-[300px] group-hover:blur-sm transition-all duration-500 ease-in-out' />
      <CaptionEventCard title={title} date={date} />
    </div>
  )
}
