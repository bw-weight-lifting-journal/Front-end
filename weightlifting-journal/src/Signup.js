import React from 'react';
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'
import  './components/Signupstyles.css'

const Signup = () => {
    return(
        <div className='header'>
            <h1>Weight Lifting Journal</h1>
            <Form>
                <div className="Fields">
                <label>First Name</label>
                <Field className='inputs' 
                    name='firstName'
                    type='text'
                />
                <label>Last Name</label>
                <Field className='inputs'
                    name='lastName'
                    type='text'
                />
                <label>Username</label>
                <Field className='inputs'
                    name='userName'
                    type='text'
                />
                <label>Email</label>
                <Field className='inputs'
                    name="email"
                    type='text'
                />
                <label>Password</label>
                <Field className='inputs'
                    name="password"
                    type='password'
                />
                    </div>
                <button className='buttons' type="submit">SIGNUP</button>
            </Form>
            <img src="https://i.ibb.co/LYMJt95/alora-griffiths-PLm-A2-IY8z3-U-unsplash-1.jpg" alt="alora-griffiths-PLm-A2-IY8z3-U-unsplash-1" border="0"></img>
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
