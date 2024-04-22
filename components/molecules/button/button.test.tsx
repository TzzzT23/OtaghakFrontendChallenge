import React from "react";
import { render } from "@testing-library/react";
import Button from "./";

import "@testing-library/jest-dom";

test("renders the button with child content", () => {
  const buttonText = "Click me";

  const { getByText } = render(<Button key="test">{buttonText}</Button>);

  const buttonElement = getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
});
