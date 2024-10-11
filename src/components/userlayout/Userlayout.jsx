import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import Loader from "../loader/Loader"


const Userlayout = () => {
  const[loading, setLoading] = useState(true)
    
    useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false)
      }, 2000)
      return () => clearTimeout(timer);
    },[])
  return (
  <>
    {loading ? (<Loader/>):(
      <>
     
      <Outlet/>
    
      </>
  )}
  </>
  )
}

export default Userlayout