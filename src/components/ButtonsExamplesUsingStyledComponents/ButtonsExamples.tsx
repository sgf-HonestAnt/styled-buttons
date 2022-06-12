import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button as BootstrapButton } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";
import { OutlineVariants, Variants, variants } from "../Variants";

function ButtonsExamples() {
  return (
    <ThemeProvider theme={theme}>
      <Container className={"p-2 border border-light"}>
        <h1>Buttons Examples Using Styled-Components</h1>
        <Row>
          <Col sm={12}>Color-Styled Variants</Col>
          <Col>
            {variants.map((variant, index) => (
              <Button
                key={index}
                variant={variant ?? "primary"}
                className={"m-1"}>
                {variant ?? "default"}
              </Button>
            ))}
          </Col>
          <Col sm={12}>Disabled</Col>
          <Col>
            {variants.map((variant, index) => (
              <Button
                key={index}
                variant={variant ?? "primary"}
                className={"m-1"}
                disabled>
                {variant ?? "default"}
              </Button>
            ))}
          </Col>
          <Col sm={12}>Outline</Col>
          <Col>
            {variants.map((variant, index) => (
              <Button
                key={index}
                variant={`outline-${variant ?? "primary"}`}
                className={"m-1"}>
                {variant ?? "default"}
              </Button>
            ))}
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default ButtonsExamples;

type ButtonProps = {
  variant?: Variants | OutlineVariants;
  outline?: boolean;
  disabled?: boolean;
  children?: React.ReactNode | string;
};

// ? https://styled-components.com/docs/basics#getting-started
// The CSS rules are automatically vendor prefixed, styled-components takes care of that for you! Styled components uses stylis.js package under the hood for prefixing the css rules. For additional information about the supported prefixes in stylis.js visit their repository.
// ? https://stylis.js.org/

const Button = styled(BootstrapButton)<ButtonProps>``;

/* border-color: ${(props, theme) => `hsl(${theme[props.variant]}))`};
background-color: ${(props, theme) => `hsl(${theme[props.variant]}))`}; */

// const Button = styled(BootstrapButton)<ButtonProps>`
//   border-color: ${(props) => `${props.theme.main[props.variant ?? "primary"]}`};
//   background-color: ${(props) =>
//     `${props.theme.main[props.variant ?? "primary"]}`};
//   color: ${({ variant }) =>
//     variant && ["warning", "info", "light"].includes(variant)
//       ? "black"
//       : "white"};
//   &:hover {
//     font-weight: 500;
//     background-color: ${({ variant }) =>
//       `darken(var${(variant = "primary")}, 7%)`};
//     border-color: ${({ variant }) =>
//       `darken(var${(variant = "primary")}, 11%)`};
//   }
//   &:focus {
//     border-color: ${({ variant }) =>
//       `box-shadow: 0 0 0 0.25rem transparentize(${(variant =
//         "primary")}, 0.5)`};
//   }
//   &:not(:disabled, .disabled) {
//     &:active,
//     &.active {
//       background-color: ${({ variant }) =>
//         `darken(var${(variant = "primary")}, 7%)`};
//       border-color: ${({ variant }) =>
//         `darken(var${(variant = "primary")}, 11%)`};
//     }
//   }
// `;

// const OutlineButton = styled(StyledButton)<ButtonProps>`
//   color: ${({ variant }) => `hsl(var(${(variant = "primary")}))`};
//   background-color: inherit;
//   &:hover,
//   &:focus {
//     background-color: inherit;
//   }
//   &:not(:disabled, .disabled) {
//     &:active,
//     &.active {
//       background-color: inherit;
//     }
//   }
// `;

const theme = {
  bluegreencolorwheel: "166, 97%, 14%",
  primary: "164, 93%, 17%",
  secondary: "158, 60%, 48%",
  light: "154, 61%, 92%",
};

/* @function convert-color($hex, $fr) {
  @return rgba(red($hex), green($hex), blue($hex), $fr);
}

@function text-color($color) {
  @if (lightness($color) > 50) {
    @return #000;
  } @else {
    @return #fff;
  }
}

@mixin common-mixin($color) {
  border-color: $color;
  &:hover {
    background-color: darken($color, 7%);
    border-color: darken($color, 11%);
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem transparentize($color, 0.5);
  }
  &:not(:disabled, .disabled) {
    &:active,
    &.active {
      background-color: darken($color, 7%);
      border-color: darken($color, 11%);
    }
  }
}

@mixin btn-mixin($color) {
  @include common-mixin($color);
  background-color: $color;
  color: text-color($color);
}

@mixin outline-mixin($color) {
  @include common-mixin($color);
  background-color: convert-color($color, 0);
  color: $color;
  &:hover {
    color: text-color($color);
  }
  &:not(:disabled, .disabled) {
    &:active,
    &.active {
      color: text-color($color);
    }
  }
} */
