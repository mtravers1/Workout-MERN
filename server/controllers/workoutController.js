const Workout = require("../models/workouts")
const mongoose = require("mongoose")
//get all workouts
const allWorkouts= async(req,res)=>{
    const {title, reps, load} = req.body

    const workout = await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workout)
}


//get a workout
const aWorkout = async(req, res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"no id found"})
    }
    const workout= await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error})
        
    }
    res.status(200).json(workout)
}


//post/create a workout

const createWorkout = async(req, res)=>{
    const {title, load, reps}=req.body
    try{
        const workout=await Workout.create({title, load, reps})
        res.status(200).json(workout)

    }catch(error){
        res.status(400).json({error})

    } 
}


//delete workout

const deleteWorkout = async(req, res)=>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"no id found"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    
    if(!workout){
        return res.status(404).json({error:"no workout"})
        
    }
    
    res.status(200).json(workout)
    // const delete = await Workout.delete
}
//update workout


const updateWorkout = async(req, res)=>{
    const {id}=req.params

    const workout = await Workout.findOneAndUpdate({_id: id}, {
         ...req.body   
        })

        if(!workout){
            return res.status(404).json({error:"no workout"})
            
        }
    res.status(200).json(workout)
}

module.exports={
    createWorkout,
    allWorkouts,
    aWorkout,
    deleteWorkout,
    updateWorkout
}