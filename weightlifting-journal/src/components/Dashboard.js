import React,{ useState, useEffect } from 'react'
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';
import WorkoutCard from './WorkoutCard';
// import T from './TESTFORM'
import NewWorkoutForm from './NewWorkoutForm'
import { Link as WorkoutLink, Route } from "react-router-dom";
import './Dashboard.scss'

function Dashboard() {


    const [workout, setWorkout] = useState([])

    const addWorkout = work => {
      setWorkout([...workout, work])
    }

    return(
      <>
      <TopNav />
      <div className="siteContainer">
        <div className='dashboard-page'>
            <h1 className='title' >Welcome!</h1>
            <NewWorkoutForm submitWorkout={addWorkout}/>
            <section className='dashboard'>
                {workout.map(data => <WorkoutCard
                    key={data.id}
                    data={data}/>
                )}
            </section>
        </div>
        </div>
      <Footer />
      </>
    )
}

export default Dashboard