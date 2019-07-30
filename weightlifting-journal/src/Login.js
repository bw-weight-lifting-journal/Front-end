import React from 'react';
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'

function Login () {
    return (
        <Form>
          <div className="Fields-login"> 
            <label htmlFor="email">UserName:</label>
            
            <Field className='inputs'
                name='userName'
                type='text'
            />
            <label htmlFor="password">Password:</label>
            <Field className='inputs'
                name='password'
                type='password'
            />
            </div>
            <button className='buttons'>Login</button>
            
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
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.Token)
            })
            .catch(err => console.log(err))
    }

})(Login)

export default FormikLogin;