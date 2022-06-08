import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

function ButtonsExamples() {
  return (
    <Container>
      <Row>
        <Col sm={12}>Buttons Examples Using Styled-Components</Col>
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
            <MyButton variant={variant.toLowerCase()} className={"m-1"}>
              {variant} Button
            </MyButton>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default ButtonsExamples;

type ButtonProps = {
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
};

const MyButton = styled(Button)<ButtonProps>`
  --blue-green-color-wheel: 166, 97%, 14%;
  --castleton-green: 164, 93%, 17%;
  --caribbean-green: 158, 60%, 48%;
  --honeydew: 154, 61%, 92%;
  
`;
