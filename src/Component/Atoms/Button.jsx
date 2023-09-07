import React from 'react'

export default function Button({children, type = "primary-1", anotherClass, eventHandler = undefined}) {

  return (
    <button onClick={eventHandler} className={`bg-${type} py-2 px-4 rounded-xl ${anotherClass}`}>{children}</button>
  )
}
