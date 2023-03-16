import { render, screen } from "@testing-library/react";
import List from "./List";

describe("Componente List", () => {
  test("o componente renderiza normalmente", () => {
    render(<List data-testid="list-testing" />);

    expect(screen.getByTestId("list-testing")).toBeInTheDocument();
  });

  test("o componente renderiza itens de uma lista", () => {
    render(<List data-testid="list-testing" list={[1, 2, 3]} />);

    expect(screen.getByTestId("list-testing")).not.toBeEmptyDOMElement();
  });

  test("o componente renderiza as informações dos itens", () => {
    const lista = [
      { id: 1, nome: "teste1" },
      { id: 2, nome: "teste2" },
      { id: 3, nome: "teste3" },
    ];

    render(<List data-testid="list-testing" list={lista} />);

    expect(screen.getByText(/teste1/i)).toBeInTheDocument();
    expect(screen.getByText(/teste2/i)).toBeInTheDocument();
    expect(screen.getByText(/teste3/i)).toBeInTheDocument();
  });
});
