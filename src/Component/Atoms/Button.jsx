import React from 'react'

export default function Button({children, color = undefined, anotherClass, eventHandler = undefined}) {

  return (
    <button onClick={eventHandler} className={`${color === undefined ? "bg-primary-1" : color} py-2 px-4 rounded-xl ${anotherClass}`}>{children}</button>
  )
}
