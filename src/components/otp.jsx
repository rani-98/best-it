import { Link } from "react-router-dom";
import { useState } from "react";


export default function Otp() {
  const [data,setData] = useState({});
  const form = data

  const onSubmit = ()=>{
    
    console.log(setData)

  }
  

  return (
    <div className='flex flex-col p-6 gap-7 w-1/2 h-1/2 bg-gray-300 text-xl'>

        <h1 className='font-extrabold'>Enter otp here :</h1>
      <form onClick={onSubmit} className=' flex gap-3 '>

        <input type='text' maxLength={1} className='border-black border-2 w-10 h-10 rounded-lg text-center'></input>
        <input type='text' maxLength={1} className='border-black border-2 w-10 h-10 rounded-lg text-center'></input>
        <input type='text' maxLength={1} className='border-black border-2 w-10 h-10 rounded-lg text-center'></input>
 
        <input type='text' maxLength={1} className='border-black border-2 w-10 h-10 rounded-lg text-center'></input>
        
        
      </form>
      <Link to="/dashboard"><button className='bg-orange-500 border-2 border-black w-20 h-10 rounded-xl'>submit</button></Link>
    </div>
   
     
    


   
  );
}
