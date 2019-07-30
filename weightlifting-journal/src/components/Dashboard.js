import React from 'react'
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';
import './Dashboard.scss'

function Dashboard() {
    return(
      <>
      <TopNav />
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
      <Footer />
      </>
    )
}

export default Dashboard