import React from 'react';
import { Container, CardBody, CardTitle, CardText } from 'reactstrap';
import "./WorkoutCard.scss";

export default function WorkoutCard(props) {
const { data } = props;
  return (
    <Container className="exerciseCard">
        <CardBody className="exerciseCardContent">
          <CardText>Type: {data.type}</CardText>
          <CardText>Exercise: {data.workout}</CardText>
          <CardText>Sets: {data.sets}</CardText>
          <CardText>Reps: {data.reps}</CardText>
          <CardText>Weight: {data.weight}</CardText>
          <CardText>Difficulty: {data.difficulty}</CardText>
        </CardBody>
    </Container>
  );
}