const express = require("express")
const {
    createWorkout,
    allWorkouts,
    aWorkout,
    deleteWorkout,
    updateWorkout

}=require('../controllers/workoutController')
const router = express.Router()
//get all workouts
router.get('/', allWorkouts)

router.get('/:id', aWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports = router