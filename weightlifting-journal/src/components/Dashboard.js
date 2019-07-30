import React, { useState, useEffect } from 'react'
import './Dashboard.scss'
import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth';

function Dashboard() {

    const [userData, setUserData] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token)
        console.log(token)
        axios
            .get('https://weightlifingjournalbackend.herokuapp.com/api/users/1', {
                headers: {
                    'token': `${token}`
                }
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, []);

    return(
        <div className='dashboard-page'>
            <h1 className='title' >Welcome User!</h1>
            <section className='dashboard'>
                <div className='mapped-workouts'>
                    <h2 className='workouts'>Monday, July 29</h2>
                    <h2 className='workouts'>Push Day</h2>
                </div>
                <div className='btn-container'>
                    <button className='new-workout-btn'>New Workout</button>
                </div>
            </section>
        </div>
    )
}

export default Dashboard