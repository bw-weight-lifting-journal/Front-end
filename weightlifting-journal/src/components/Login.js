<<<<<<< HEAD:weightlifting-journal/src/components/Login.js
import React, {Component} from 'react';
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';


class Login extends Component {
    constructor(props){
        super(props);
        this.state= {email:'', password:''};
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt){
        this.setState({
          [evt.target.email]: evt.target.value  
        })
    }

    render(){
        return (
          <>
          <TopNav />
          <div className="siteContainer">
            <form>
=======
import React from 'react';
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'

function Login () {
    return (
        <Form>
>>>>>>> 1a5d5fd9bcd95d856ea2e9dacf3ed558ce18968a:weightlifting-journal/src/Login.js
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
<<<<<<< HEAD:weightlifting-journal/src/components/Login.js
        </form>
        </div>
        <Footer />
        </>
        )
    }
=======
        </Form>
    )
}
>>>>>>> 1a5d5fd9bcd95d856ea2e9dacf3ed558ce18968a:weightlifting-journal/src/Login.js
        
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