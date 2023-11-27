/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Loading from "components/Loading";

describe("Loading component", () => {
  test("renders Loading component with loading text", () => {
    const { getByText } = render(<Loading />);

    // Check if the colored text is present using its prop value
    const coloredText = getByText((content) => {
      return content === "Loading...";
    });

    expect(coloredText).toBeInTheDocument();
  });
});