import React from "react";
import { useState } from "react";
const AddWorkout = ()=>{
    const [title, setTitle]=useState('')
    const [reps, setReps]=useState('')
    const [load, setLoad]=useState('')
    
    
    const handleSubmit =async (e:any)=>{
        e.preventDefault()
        const data ={title, reps, load}
        const res = await fetch('http://localhost:5000/api/workouts',{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const json = await res.json()
        if (res.ok){
            setTitle('')
            setLoad('')
            setReps('')
        }
      }
    return(
        <div>
            
      <div >
        <h1 className='text-2xl'>Workout Buddy</h1>
        <form 
        className='flex flex-col justify-center  items-center'
        onSubmit={handleSubmit}>
        <h1>Enter Workout</h1>
        <input 
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        className='w-1/2 border-black border'/>
        <h1>Enter Reps</h1>
        <input
        onChange={(e)=>setReps(e.target.value)}
        value={reps}
        className='w-1/2 border-black border'/>
        <h1>Enter Load</h1>
        <input 
        onChange={(e)=>setLoad(e.target.value)}
        value={load}
        className='w-1/2 border-black border'/>
        <button className="border border-black mt-12">Enter</button>
        </form>
    
        </div>
        </div>
    )
}
export default AddWorkout