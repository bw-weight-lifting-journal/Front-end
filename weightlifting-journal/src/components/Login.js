import React from 'react';
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';


import { withFormik, Form, Field } from 'formik'
import axios from 'axios'

function Login () {

  // const [loggedInStatus, setLoggedInStatus] = useState(false);
  // const token = localStorage.getItem('token');


  // useEffect(() => {
  //   token && setLoggedInStatus(true);
  // }, [token, loggedInStatus])
  

    return (
      <>
        {/* {loggedInStatus ? <h1>Logged In!</h1> : <TopNav />} */}
        <TopNav />
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
        <Footer />
      </>
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
        axios
            .post('https://weightlifingjournalbackend.herokuapp.com/api/auth/login', values)
            .then(res => {
                localStorage.setItem('token', res.data.Token)
                console.log(res.data.Token)
            })
            .catch(err => console.log(err))
    }

})(Login)

export default FormikLogin;