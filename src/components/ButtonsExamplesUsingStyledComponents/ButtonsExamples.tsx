import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button as BootstrapButton } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";
import { variants } from "../Variants";

const theme = {
  cancelled: "60, 2%, 78%",
  pending: "44, 61%, 47%",
  inprogress: "331, 48%, 53%",
  completed: "64, 46%, 42%",
};

function ButtonsExamples() {
  return (
    <ThemeProvider theme={theme}>
      <Container className={"p-2 border border-light"}>
        <h1>Buttons Examples Using CSS</h1>
        <Row>
          <Col sm={12}>Color-Styled Variants</Col>
          <Col>
            {variants.map((variant) => (
              <Button variant={variant} className={`m-1`}>
                {variant}
              </Button>
            ))}
          </Col>
          <Col sm={12}>Disabled</Col>
          <Col>
            {variants.map((variant) => (
              <Button variant={variant} className={`m-1`} disabled>
                {variant}
              </Button>
            ))}
          </Col>
          <Col sm={12}>Outline</Col>
          <Col>
            {variants.map((variant) => (
              <OutlineButton variant={`outline-${variant}`} className={`m-1`}>
                {variant}
              </OutlineButton>
            ))}
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default ButtonsExamples;

// ? https://styled-components.com/docs/basics#getting-started
// The CSS rules are automatically vendor prefixed, styled-components takes care of that for you! Styled components uses stylis.js package under the hood for prefixing the css rules. For additional information about the supported prefixes in stylis.js visit their repository.
// ? https://stylis.js.org/

type ButtonProps = {
  variant: string;
};

function color(variant: string) {
  return [
    "inprogress",
    "outline-inprogress",
    "completed",
    "outline-completed",
  ].includes(variant)
    ? "#fff"
    : "#000";
}

function split(variant: string) {
  return variant.split("-")[1];
}

function bg(variant: string, alpha?: number) {
  return alpha ? `hsla(${variant}, ${alpha})` : `hsl(${variant})`;
}

const Button = styled(BootstrapButton)<ButtonProps>`
  border-radius: 0;
  text-transform: uppercase;
  font-size: 18px;
  color: ${(props) => color(props.variant)};
  background-color: ${({ theme, variant }) => bg(theme[variant])};
  border-color: ${({ theme, variant }) => bg(theme[variant])};
  &:hover {
    color: ${(props) => color(props.variant)};
    background-color: ${({ theme, variant }) =>
      `hsla(${theme[variant]}, 0.95)`};
    border-color: ${({ theme, variant }) => bg(theme[variant], 0.9)};
  }
  &:focus {
    color: ${(props) => color(props.variant)};
    background-color: ${({ theme, variant }) => bg(theme[variant], 0.95)};
    box-shadow: ${({ theme, variant }) =>
      `0 0 0 0.25rem ${bg(theme[variant], 0.5)}`};
    border-color: ${({ theme, variant }) => bg(theme[variant], 0.85)};
  }
  &:not(:disabled):not(.disabled).active {
    background-color: ${({ theme, variant }) => bg(theme[variant], 0.85)};
    border-color: ${({ theme, variant }) => bg(theme[variant], 0.8)};
  }
`;

const OutlineButton = styled(Button)<ButtonProps>`
  color: ${({ theme, variant }) => `hsl(${theme[split(variant)]})`};
  background-color: inherit;
  border-color: ${({ theme, variant }) => `hsl(${theme[split(variant)]})`};
  border-width: 2px;
  &:hover {
    color: ${({ theme, variant }) => `hsl(${theme[split(variant)]})`};
  }
  &:focus {
    color: ${({ variant }) => color(variant)};
    background-color: ${({ theme, variant }) =>
      `hsla(${theme[split(variant)]}, 0.95)`};
    box-shadow: ${({ theme, variant }) =>
      `0 0 0 0.25rem hsla(${theme[split(variant)]}, 0.5)`};
    border-color: ${({ theme, variant }) =>
      `hsla(${theme[split(variant)]}, 0.85)`};
  }
  &:not(:disabled):not(.disabled).active {
    color: ${({ variant }) => color(variant)};
    background-color: ${({ theme, variant }) =>
      `hsl(${theme[split(variant)]})`};
    border-color: ${({ theme, variant }) => `hsl(${theme[split(variant)]})`};
  }
`;
