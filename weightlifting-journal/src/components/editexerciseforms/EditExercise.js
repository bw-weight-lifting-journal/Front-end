import React from 'react';
import { axiosWithAuth } from '../../axiosWithAuth';

function EditExercise() {

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if(token)
    //     console.log(token)
    //     axiosWithAuth()
    //         .get(`https://weightlifingjournalbackend.herokuapp.com/api/exercises/${workoutType}`)
    //         .then(res => {
    //             console.log(res)
    //             setUserData(res.data)
    //         })
    //         .catch(err => console.log(err))
    // }, [ workoutType ]);

    return(
        <form>
            <select name='exercise'>
                <option>select</option>
                <option>Arms</option>
                <option>Shoulders</option>
                <option>Back</option>
                <option>Chest</option>
                <option>Legs</option>
                <option>Core</option>
            </select>
            <select>
                <option>...</option>
            </select>
            <button>Edit Exercise</button>
        </form>
    )
}

export default EditExercise