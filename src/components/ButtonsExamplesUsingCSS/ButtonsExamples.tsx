import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { variants } from "../Variants";
import "./styles.css"; // Imported for all the styling

function ButtonsExamples() {
  return (
    <Container className={"p-2 border border-light"}>
      <h1>Buttons Examples Using CSS</h1>
      <Row>
        <Col sm={12}>Color-Styled Variants</Col>
        <Col>
          {variants.map((variant) => (
            <Button variant={variant} className={`m-1 btn-${variant}`}>
              {variant}
            </Button>
          ))}
        </Col>
        <Col sm={12}>Disabled</Col>
        <Col>
          {variants.map((variant) => (
            <Button variant={variant} className={`m-1 btn-${variant}`} disabled>
              {variant}
            </Button>
          ))}
        </Col>
        <Col sm={12}>Outline</Col>
        <Col>
          {variants.map((variant) => (
            <Button
              variant={`outline-${variant}`}
              className={`m-1 btn-outline-${variant}`}>
              {variant}
            </Button>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default ButtonsExamples;
