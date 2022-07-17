import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FooterNav() {
  return (
    <footer>
      <Form className="footer">
        <div>
          <Form.Group className="mb-3 footer__form" controlId="formBasicName">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="name" placeholder="Enter full name" />
          </Form.Group>

          <Form.Group className="mb-3 footer__form" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 footer__form" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Sign up for newsletter" />
          </Form.Group>
        </div>
        <div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div className="mb-3 footer__button">
            <Button variant="primary" type="submit" className="cta-footer">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </footer>
  );
}

export default FooterNav;
