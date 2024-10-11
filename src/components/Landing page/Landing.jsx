import { useNavigate } from "react-router-dom"

const Landing = () => {
   let navigate =useNavigate()
    const Sign=()=>{
        navigate('/signin')
        
    }
  return (
    <>
    <div className="background">
    
      <div className="container text-center   crisp">
        <h1 className="rainbow-text">Welcome to Crispy Kitchen</h1>
        <p   >Home to Healthy Eating !</p>
        <button className="btn btn-danger w-50 " onClick={Sign}>Eat With Us Now!!</button>
      </div>
    </div>
    </>
  )
}
export default Landing