import React, {Component} from 'react';


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
            <form>
            <label htmlFor="email">UserName:</label>
            <input
                id="email"
                email="email"
                value={this.state.email}
                onChange={this.handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                password="password"
                value={this.state.password}
                onChange={this.handleChange}
            />
            <button>Login</button>
        </form>
        )
    }
        
    }

export default Login;