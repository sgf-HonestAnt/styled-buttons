import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./styles.css"; // Imported for all the styling

function ButtonsExamples() {
  return (
    <Container>
      <Row>
        <Col sm={12}>Buttons Examples Using CSS</Col>
        <Col>
          {[
            "Primary",
            "Secondary",
            "Success",
            "Danger",
            "Warning",
            "Info",
            "Light",
            "Dark",
          ].map((variant) => (
            <Button variant={variant.toLowerCase()} className={"m-1"}>
              {variant} Button
            </Button>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default ButtonsExamples;
