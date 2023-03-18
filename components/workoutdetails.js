import React from "react";

const Workoutdetails = ({workout})=>{
    return(
        <>
        <div>
        <h1 className='font-bold'>
          <p>Workout: {workout.title}</p>
            
          </h1>
          <p>Reps:{workout.reps}</p>
          <p>Weight: {workout.load}</p>

        </div>
        </>
    )
}

export default Workoutdetails