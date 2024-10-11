import { useState, useEffect } from "react"
import Loader from "../loader/Loader"
import Navbar from "../navbar/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
const Layouts = () => {
    const[loading, setLoading] = useState(true)
    
    useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false)
      }, 2000)
      return () => clearTimeout(timer);
    },[])
  return (
    <>
    {loading? (<Loader/>):(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )}
    </>
  )
}

export default Layouts