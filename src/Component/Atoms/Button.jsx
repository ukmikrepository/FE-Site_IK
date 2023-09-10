import React from 'react'

export default function Button({children, color = undefined, anotherClass, eventHandler = ()=>{}}) {

  return (
    <span onClick={eventHandler} className={`${color === undefined ? "bg-primary-1" : color} py-2 px-4 cursor-pointer rounded-xl ${anotherClass}`}>{children}</span>
  )
}
