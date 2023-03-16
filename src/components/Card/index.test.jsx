import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  test("it should render the component correctly", () => {
    render(<Card data-testid="card-testing" />);

    expect(screen.getAllByTestId("card-testing")).toBeInTheDocument();
  });
});
