/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ColoredText from "components/ColoredText";

describe("ColoredText component", () => {
  test("renders ColoredText component with correct text and styling", () => {
    const text = "Hello Joao!";
    const size = 20;

    const { getByRole } = render(<ColoredText text={text} size={size} />);
    const styledH1 = getByRole("heading");

    // Check if the text is present
    expect(styledH1).toHaveTextContent(text);

    // Check if the font size has the pixels applied as it should be
    expect(styledH1).toHaveStyle(`font-size: ${size}px`);
  });
});
