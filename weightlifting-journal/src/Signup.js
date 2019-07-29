
import React, {useState} from 'react';


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
        <div>
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
        </div>
    );
};

export default Signup;







// import React, {Component} from "react";

// class Signup extends Component {
//   constructor(props) {
//       super(props);
//       this.state ={username:"", password:""};
//   }

//   handleChange(evt){
//       this.setState({username:evt.target.value});
//       this.setState({password:evt.target.value});
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit(evt){
//     alert(`Entered: ${this.state.username}`);
//     this.setState({username:""});
//     alert(`Entered: ${this.state.password}`);
//     this.setState({password:""});
//   }

//   render() {
//       return (
//           <div>
//               <h1>Weight Lifting Journal </h1>
//               <form onSubmit= {this.handleSubmit}>
//                   <input type='text' value={this.state.username} onChange= {this.handleChange}/>
//                   <input type='text' value={this.state.password} onChange= {this.handleChange}/>
//                   <button>SIGNUP</button>
//                   <button>LOGIN</button>
//               </form>
//           </div>
//       );
//   }
// }

// export default Signup;
