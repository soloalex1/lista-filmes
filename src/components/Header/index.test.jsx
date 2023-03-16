import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Componente Header", () => {
  test("o componente é renderizado normalmente", () => {
    render(<Header data-testid="header-test" />);
    expect(screen.getByTestId("header-test")).toBeInTheDocument();
  });

  test("o componente mostra um título", () => {
    render(<Header name="teste" />);
    expect(screen.getByText(/teste/i)).toBeInTheDocument();
  });

  test("o componente deve mostrar uma barra de pesquisa", () => {
    render(<Header />);
    expect(screen.getByRole("search")).toBeInTheDocument();
  });
});
