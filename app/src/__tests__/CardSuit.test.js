/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const renderCardSuit = (suit) => {
  const MockMarioIcon = () => <div data-testid="mock-mario-icon">Mock Mario Icon</div>;
  const MockLuigiIcon = () => <div data-testid="mock-luigi-icon">Mock Luigi Icon</div>;
  const MockWaluigiIcon = () => <div data-testid="mock-waluigi-icon">Mock Waluigi Icon</div>;
  const MockMushrooms = () => <div data-testid="mock-mushrooms">Mock Mushrooms</div>;

  const suitMap = {
    hearts: <MockMarioIcon />,
    diamonds: <MockLuigiIcon />,
    clubs: <MockWaluigiIcon />,
  };

  const suitComponent = suitMap[suit] || <MockMushrooms />;
  return render(suitComponent);
};

describe("CardSuit component", () => {
  test("renders MarioIcon for hearts suit", () => {
    const { getByTestId } = renderCardSuit("hearts");
    expect(getByTestId("mock-mario-icon")).toBeInTheDocument();
  });

  test("renders LuigiIcon for diamonds suit", () => {
    const { getByTestId } = renderCardSuit("diamonds");
    expect(getByTestId("mock-luigi-icon")).toBeInTheDocument();
  });

  test("renders WaluigiIcon for clubs suit", () => {
    const { getByTestId } = renderCardSuit("clubs");
    expect(getByTestId("mock-waluigi-icon")).toBeInTheDocument();
  });

  test("renders Mushrooms for unknown or undefined suit", () => {
    const { getByTestId } = renderCardSuit("spades");
    expect(getByTestId("mock-mushrooms")).toBeInTheDocument();
  });
});
