import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../axiosWithAuth';

import './EditExercise.scss'

function EditExercise() {

    const token = localStorage.getItem('token');

    const [userData, setUserData] = useState();
    const [exerciseType, setExerciseType] = useState('');
    const [exercise, setExercise] = useState();
    const [toggle, setToggle] = useState(false);
    // const [objectID, setObjectID] = useState();
    let objectID = ''

    console.log('WORKOUT', objectID)

    useEffect(() => {
        if(exerciseType)
        axiosWithAuth()
            .get(`https://weightlifingjournalbackend.herokuapp.com/api/exercises/${exerciseType}`)
            .then(res => {
                console.log(res)
                setUserData(res.data)
            })
            .catch(err => console.log(err))
    }, [ exerciseType ]);

    const toggleFunc = (event, par) => {
        event.preventDefault();
        return setToggle(par)
    }

    return(
        <form>
            <select onChange={(e) => setExerciseType(e.target.value.toLowerCase())} name='exercise'>
                <option>select</option>
                <option>Arms</option>
                <option>Shoulders</option>
                <option>Back</option>
                <option>Chest</option>
                <option>Legs</option>
                <option>Core</option>
            </select>
            <select onChange={(e) => setExercise(e.target.value)} className={toggle ? 'hide' : ''}>
                {!userData ? null : userData.map(user => {
                    // setObjectID(user.id)
                    objectID = user.id
                    return <option key={user.id} >{user.exerciseName}</option>
                })}
            </select>
            <input className={!toggle ? 'hide' : ''}
                value={exercise}
            />
            { !toggle 
                ? 
                <button onClick={(event) => toggleFunc(event, true)} >
                    Edit Exercise
                </button> 
                : 
                <button onClick={(event) => toggleFunc(event, false)}>
                    button
                </button>
            }
        </form>
    )
}

export default EditExercise