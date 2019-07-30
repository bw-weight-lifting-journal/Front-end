import React from 'react';
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'

const Signup = () => {
    return(
        <div>
            <h1>Weight Lifting Journal</h1>
            <Form>
                <label>First Name</label>
                <Field 
                    placeholder='youremail@user.com' 
                    name='firstName'
                    type='text'
                />
                <label>Last Name</label>
                <Field 
                    placeholder='youremail@user.com' 
                    name='lastName'
                    type='text'
                />
                <label>Username</label>
                <Field 
                    placeholder='youremail@user.com' 
                    name='userName'
                    type='text'
                />
                <label>Email</label>
                <Field 
                    placeholder='Password'
                    name="email"
                    type='text'
                />
                <label>Password</label>
                <Field 
                    placeholder='Password'
                    name="password"
                    type='password'
                />
                <button type="submit">SIGNUP</button>
            </Form>
        </div>
    );
};

const FormikSignup = withFormik({
    mapPropsToValues() {
        return {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: ''
        }
    },

    handleSubmit(values) {
        console.log(values)
        axios
        .post('https://weightlifingjournalbackend.herokuapp.com/api/auth/register', values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

})(Signup)

export default FormikSignup;
