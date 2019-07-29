import React from 'react'
import { withFormik, Form, Field } from 'formik'

function NewWorkoutForm() {
    return(
        <div>
            form
            <Form>
                <label>
                    Sets:
                    <Field 
                        type='number'
                        name='sets'
                    />
                </label>
                <label>
                    Reps:
                    <Field 
                        type='number'
                        name='reps'
                    />
                </label>
                <label>
                    Weight:
                    <Field 
                        type='number'
                        name='weight'
                    />
                </label>
                <label>
                    Difficulty:
                    <Field component='select' name='difficulty'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </Field>
                </label>
                <label>
                    Date:
                    <Field 
                        type='date'
                        name='date'
                    />
                </label>
                <label>
                    Workout:
                    <Field 
                        type='text'
                        name='workout'
                    />
                </label>
                <button type='reset'>Cancel</button>
                <button type='submit'>Save</button>
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