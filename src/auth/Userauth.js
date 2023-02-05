import {useLocation } from "react-router-dom"
function Userauth({children}){

    const location = useLocation();
    const userdata = location.state
    return <div>{userdata === null ? <h1 className='text-2xl font-extrabold text-center mt-20'>
      Your Not Login Go Home and Login
     
      </h1>:children}</div>
  }

export default Userauth;