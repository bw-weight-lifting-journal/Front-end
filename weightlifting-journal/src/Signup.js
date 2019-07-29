import React, {useState} from 'react';

const Form = (props) => {
    const {setPeople} = props;
    const [person, setPerson] = useState ({name:"", email:""});
    const handleChange = event =>{
        setPerson({...person, [event.target.name]: event.target.value})
    };
    
    const handleSubmit = event => {
     event.preventDefault();
     setPeople(people => [...people, person]);
     setPerson({name:"", email:""});
     console.log(person);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder='name' 
            value={person.name}
            name='name'
            onChange={handleChange}
            />
            <input placeholder='email'
             value={person.email}
             name="email"
             onChange={handleChange}/>
          <button type="submit">Sign Up</button>
        </form>
    );
};

export default Form;