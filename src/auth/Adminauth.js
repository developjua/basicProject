import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Adminauth({children}) {
    const location = useLocation()
    const admin = location.state.adminauth
  return (
    <div>{admin === false &&admin === null ? <h1 className='text-2xl font-extrabold text-center mt-20'>
    Your Not Authorized
   
    </h1>:children}</div>
  )
}
 