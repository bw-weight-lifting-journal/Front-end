import React,{ useState, useEffect } from 'react'
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';
import {axiosWithAuth }from '../axiosWithAuth';
import { Link } from 'react-router-dom';

import './NewWorkoutForm.scss'

function NewWorkoutForm(props) {

    const { submitWorkout } = props;
  
    const [userData, setUserData] = useState();
    const [workoutType, setWorkoutType] = useState('arms');
    const [work, setWork]= useState({
      sets: '',
      reps: '',
      weight: '',
      difficulty: '',
      date: '',
      exercise: '',
      type: '', 
      id: ''
    })

    const [totalWorkout, setTotalWorkout] = useState([]);

    const handleChange = event => {
      setWork({...work, [event.target.name]: event.target.value })
      event.target.name === 'type' && setWorkoutType(event.target.value.toLowerCase())
    }

    const handleSubmit = event => {
      event.preventDefault();
      submitWorkout(work)
      setWork({
        sets: '',
        reps: '',
        weight: '',
        difficulty: '',
        date: '',
        exercise: '',
        type: '', 
        id: Date.now()
      })
    }

    const pushExercise = event => {
      event.preventDefault();
      // setTotalWorkout([
      //   ...totalWorkout,
      //   submitWorkout(work)])
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token)
        // console.log(token)
        axiosWithAuth()
            .get(`https://weightlifingjournalbackend.herokuapp.com/api/exercises/${workoutType}`)
            .then(res => {
                setUserData(res.data)
            })
            .catch(err => console.log(err))
    }, [workoutType]);



    return(
      <>
      <div className="siteContainer">
        <div className='new-workout-page'>
            <h1 className='title'>New Workout</h1>
            <form onSubmit={handleSubmit} className='workout-form'>
                <label className='form-label'>
                    Sets: <br />
                    <input 
                        className='number-input'
                        type='number'
                        name='sets'
                        value={work.sets}
                        onChange={handleChange}

                    />
                </label>
                <label className='form-label'>
                    Reps: <br />
                    <input 
                        className='number-input'
                        type='number'
                        name='reps'
                        value={work.reps}
                        onChange={handleChange}

                    />
                </label>
                <label className='form-label'>
                    Weight: <br />
                    <input 
                        className='number-input'
                        type='number'
                        name='weight'
                        value={work.weight}
                        onChange={handleChange}

                    />
                </label>
                <label className='form-label'>
                    Difficulty: <br />
                    <select component='select' name='difficulty' value={work.difficulty} className='difficulty' onChange={handleChange}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </label>
                <label className='form-label'>
                    Date: <br />
                    <input 
                        className='date'
                        type='date'
                        name='date'
                        value={work.date}
                        onChange={handleChange}

                    />
                </label>
                <label className='form-label'>
                    Type: <br />
                    <select component='select' name='type' onChange={handleChange} value={work.type} className='difficulty'>
                        <option>Arms</option>
                        <option>Shoulders</option>
                        <option>Back</option>
                        <option>Chest</option>
                        <option>Legs</option>
                        <option>Core</option>
                    </select>
                </label>
                <label className='form-label'>
                    Exercise: <br />
                    <select 
                        component='select'
                        className='workout'
                        type='text'
                        name='workout'
                        value={work.workout}
                        onChange={handleChange}

                    >
                        {!userData ? null : userData.map(user => <option>{user.exerciseName}</option>)}
                    </select>
                </label>
          
                <p className='buttons'>
                    <button type='reset' className='clear-btn'>Clear</button>
                    <button className='clear-btn' onClick={() => pushExercise}>Add Exercise</button>
                    <button className='add-btn' type='submit'>Submit Workout</button>

                </p>
            </form>
        </div>
        </div>
      </>
    )
}

export default NewWorkoutForm