import Card from "react-bootstrap/Card";
import image from "../../img/headling-image-small.jpg";
import Button from "react-bootstrap/Button";

function Cards() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={image} alt="Some text" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate odit sint aliquid omnis cumque officia voluptatem blanditiis saepe nemo incidunt error consectetur ipsam nisi, tempore accusantium ab fuga eos, delectus quisquam optio iste rerum praesentium totam.</Card.Text>
          <Button variant="primary" type="submit" className="cta-card">
            Read more
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Published in Feiring, by Ali</small>
        </Card.Footer>
      </Card>
    </>
  );
}

export default Cards;
