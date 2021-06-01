import { render, screen } from "@testing-library/react";
import Search from "./Search";

describe("Componente Search", () => {
  test("o componente deve ser renderizado", () => {
    render(<Search data-testid="search-testing" />);
    expect(screen.getByTestId("search-testing")).toBeInTheDocument();
  });

  test("o componente deve exibir apenas um input de texto", () => {
    render(<Search data-testid="search-testing" />);
    expect(screen.getByTestId("search-testing")).toBeEmptyDOMElement();
  });
});
