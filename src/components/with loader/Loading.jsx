import { useState, useEffect } from 'react';
import Loader from '../loader/Loader';


const Loading = (WrappedComponent) => {
  
        const [isLoading, setIsLoading] = useState(true);
    
        useEffect(() => {
          const timer = setTimeout(() => {
            setIsLoading(false); // Simulate loading
          }, 1000); // Adjust time as needed
    
          return () => clearTimeout(timer);
        }, []);
    
        return(props)=>{
            <>
            {isLoading? (<Loader />) :(<WrappedComponent {...props} />)}
            </>
        }
       
      };


export default Loading