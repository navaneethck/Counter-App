import { useState } from "react";

const Counter =()=>{

    const [Count,setCount]= useState(0)

    const increment=()=>{setCount(Count+1)}
    const decrement=()=>{setCount(Count-1)}
    const reset=()=>{setCount(0)}

    return(
        <div className="flex flex-col items-center justify-center h-screen bg-green-200">
            <h1 className="text-4xl font-bold mb-4" >THE COUNTER:{Count}</h1>
         <Mybutton label="increment" click={increment}/>
         <Mybutton label="decrement" click={decrement}/>
         <Mybutton label="reset" click={reset}/>
        </div>
    ) 
}

const Mybutton =({label,click})=>{
    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3" onClick={click}>
            {label}</button>
    )
}
export default Counter;