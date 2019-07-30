import React from 'react';
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'

function Login () {
    return (
        <Form>
            <label htmlFor="email">UserName:</label>
            <Field
                name='userName'
                type='text'
            />
            <label htmlFor="password">Password:</label>
            <Field
                name='password'
                type='password'
            />
            <button>Login</button>
        </Form>
    )
}
        
const FormikLogin = withFormik({
    mapPropsToValues() {
        return {
            userName: '',
            password: ''
        }
    },

    handleSubmit(values) {
        console.log(values)
        axios
            .post('https://weightlifingjournalbackend.herokuapp.com/api/auth/login', values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

})(Login)

export default FormikLogin;