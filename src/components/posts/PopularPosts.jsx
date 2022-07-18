import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import image from "../../img/headling-image-small.jpg";
import Button from "react-bootstrap/Button";

function PopularPosts() {
  return (
    <CardGroup className="card-group-featured">
      <Card className="card-full-width">
        <Card.Img variant="top" src={image} alt="Some text" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
          <Button variant="primary" type="submit" className="cta-card">
            Read more
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Published 1 january 2022</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={image} alt="Some text" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
          <Button variant="primary" type="submit" className="cta-card">
            Read more
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Published 1 january 2022</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={image} alt="Some text" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
          <Button variant="primary" type="submit" className="cta-card">
            Read more
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Published 1 january 2022</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default PopularPosts;
