import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export default function WorkoutCard(props) {
const { data } = props;
  return (
    <>
      <Card key={Date.now()}>
        <CardBody>
          <CardTitle>{data.date}</CardTitle>
          <CardText>Type: {data.type}</CardText>
          <CardText>Exercise: {data.workout}</CardText>
          <CardText>Sets: {data.sets}</CardText>
          <CardText>Reps: {data.reps}</CardText>
          <CardText>Weight: {data.weight}</CardText>
          <CardText>Difficulty: {data.difficulty}</CardText>
        </CardBody>
      </Card>
    </>
  );
}