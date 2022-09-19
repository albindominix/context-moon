import React, { useContext } from 'react'
import { Context } from '../context/Context'

export default function Child1() {
    const name= useContext(Context)
  return (
    <div><h1>{name.state}</h1></div>
  )
}
