import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protected({children,authentication=true}) 
{
  const navigate=useNavigate();
  const [loader, setloader] = useState(true);
  const authStatus=useSelector(state=>state.auth.status)

  useEffect(()=>{
    //to make you understand
    // if(authStatus==true){
    //   navigate("/")
    // }
    // else if(authStatus==false){
    //   navigate("/login")
    // }


    if(authentication && authStatus!==authentication){
      navigate("/login")
    }else if(!authentication && authStatus !==authentication){
      navigate("/")
    }
    setloader(false)
  }
  ,[authentication,authStatus,navigate])
  return loader? <h1>Loading...</h1>:<>{children}</>
}


