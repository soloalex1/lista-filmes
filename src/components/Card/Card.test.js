import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Componente Card", () => {
  test("o componente deve renderizar normalmente", () => {
    render(<Card data-testid="card-testing" />);

    expect(screen.getAllByTestId("card-testing")).toBeInTheDocument();
  });
});
