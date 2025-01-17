 import { Col, Card, ListGroup,} from "react-bootstrap";
 import { useState } from 'react';
 


const GameCard = ({games}) => {

  const [show, setShow]=useState(false);

  return (


    <Col key={games.id} className="g-4  col-md-6 col-lg-4 card-start">
      <Card className="card-box" onClick={() => setShow(!show)}>
        {!show ? (
          <Card.Header className="card-face">
            <Card.Img className="card-Img" variant="top" src={games.image} />
            <Card.Title className="card-title">{games.title}</Card.Title>
          </Card.Header>
        ) : (
          <>
            <Card.Body className="card-back">
              <Card.Text className=" card-des">👾{games.description}</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="rating">⭐{games.rating}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </>
        )}
      </Card>
    </Col>
  );
}

export default GameCard
