import React from 'react'
import { withFormik, Form, Field } from 'formik'

import './NewWorkoutForm.scss'

function NewWorkoutForm() {
    return(
        <div className='new-workout-page'>
            <h1 className='title'>New Workout</h1>
            <Form className='workout-form'>
                <label className='form-label'>
                    Sets: <br />
                    <Field 
                        className='number-input'
                        type='number'
                        name='sets'
                    />
                </label>
                <label className='form-label'>
                    Reps: <br />
                    <Field 
                        className='number-input'
                        type='number'
                        name='reps'
                    />
                </label>
                <label className='form-label'>
                    Weight: <br />
                    <Field 
                        className='number-input'
                        type='number'
                        name='weight'
                    />
                </label>
                <label className='form-label'>
                    Difficulty: <br />
                    <Field component='select' name='difficulty' className='difficulty'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </Field>
                </label>
                <label className='form-label'>
                    Date: <br />
                    <Field 
                        className='date'
                        type='date'
                        name='date'
                    />
                </label>
                <label className='form-label'>
                    Workout: <br />
                    <Field 
                        className='workout'
                        type='text'
                        name='workout'
                    />
                </label>
                <button type='reset' className='clear-btn'>Clear</button>
                <button type='submit' className='add-btn'>Add</button>
            </Form>
        </div>
    )
}

const FormikNewWorkoutForm = withFormik({
    mapPropsToValues() {
        return {
            sets: '',
            reps: '',
            weight: '',
            difficulty: '',
            date: '',
            workout: ''
        }
    },

    handleSubmit(values) {
        console.log(values)
    }
})(NewWorkoutForm)

export default FormikNewWorkoutForm