<<<<<<< HEAD:weightlifting-journal/src/components/Signup.js
import React, {useState} from 'react';
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';


const Signup = (props) => {
    const {setPeople} = props;
    const [person, setPerson] = useState ({Username:"", Password:"", Confirm_Password:""});
    const handleChange = event =>{
        setPerson({...person, [event.target.name]: event.target.value})
    };
    
    const handleSubmit = event => {
     event.preventDefault();
     setPeople(people => [...people, person]);
     setPerson({Username:"", Password:"",Confirm_Password:"" });
    };

    return(
      <>
      <TopNav />
        <div className="siteContainer">
        <h1>Weight Lifting Journal</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
            <input placeholder='youremail@user.com' 
            value={person.name}
            name='name'
            onChange={handleChange}
            />
            <label htmlFor='Password'>Password</label>
            <input placeholder='Password'
             value={person.email}
             name="email"
             onChange={handleChange}/>
             <label htmlFor='Confirm_Password'>Confirm Password</label>
             <input placeholder='Confirm_Password'
             value={person.email}
             name="email"
             onChange={handleChange}/>
          <button type="submit">SIGNUP</button>
        </form>
=======
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
>>>>>>> 1a5d5fd9bcd95d856ea2e9dacf3ed558ce18968a:weightlifting-journal/src/Signup.js
        </div>
        <Footer />
        </>
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
