import React from "react";
import MainButton from "./Mainbuttons.js";
import { Jumbotron } from 'reactstrap';
import "./MainButtonContainer.scss";

function MainButtonContainer() {
  return (
    <Jumbotron fluid>
    <div className="mainbtncontainer">
    <MainButton 
      title = "Track Your Workout"
      content = "Track your workouts by weight, sets, reps, exercise, and much more"
      arrow = "→"
    />
    <MainButton 
      title = "Crush Your Workout"
      content = "Making gains has become that much easier"
    />
    <MainButton 
      title = "Post Your Progress"
      content = "Upload your progress shots, see your body change in real-time"
      arrow = "→"
    />
    </div>
    </Jumbotron>
  );
}

export default MainButtonContainer;