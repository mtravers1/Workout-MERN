require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const workoutRoutes = require('./routes/workouts')


app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use(express.json())
app.use(cors());



// app.get('/', (req,res)=>{
//     res.json({mssage:"welcome to the app"})
// })

// app.get('/', (req,res)=>{
//     res.json({mess:"get all workouts"})
// })

// app.get('/:id', (req, res)=>{
//     res.json({message:"get a workout"})
// })

// app.post('/', (req, res)=>{
//     res.json({mess:"posted a workout"})
// })

// app.delete('/:id', (req, res)=>{
//     res.json({mess:"delete a workout"})
// })

// app.patch('/:id', (req, res)=>{
//     res.json({mess:"update a workout"})
// })
app.use("/api/workouts", workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log("listening to ", process.env.PORT)
        })

    }).catch(()=>{
        console.log("we have a error")
    })

// app.listen(process.env.PORT, ()=>{
//     console.log("listening to ", process.env.PORT)
// })