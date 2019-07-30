import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import './BottomCTA.scss'

const BottomCTA = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container className="homepage-bottom-cta" fluid>
          <h1 className="display-3">Ready to try forLife Fitness?</h1>
          <Button className="lead">Join Now</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default BottomCTA;