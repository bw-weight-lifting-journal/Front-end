import React from 'react'

import AddExercise from './editexerciseforms/AddExercise'

function EditExerciseForm() {

    return(
        <div>
            <AddExercise />
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
                <button>Delete Exercise</button>
            </form>
        </div>
    )
}

export default EditExerciseForm