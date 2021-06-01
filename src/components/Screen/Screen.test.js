import { render, screen } from "@testing-library/react";
import Screen from "./Screen";

describe("Componente Screen", () => {
  test("a tela renderiza normalmente", () => {
    render(<Screen data-testid="screen-testing"></Screen>);
    expect(screen.getByTestId("screen-testing")).toBeInTheDocument();
  });

  test("a tela renderiza seu conteúdo normalmente", () => {
    render(<Screen>Renderizado</Screen>);
    expect(screen.getByText(/Renderiza/i)).toBeInTheDocument();
  });

  test("a tela renderiza mesmo sem conteúdo", () => {
    render(<Screen data-testid="screen-testing" />);
    expect(screen.getByTestId("screen-testing")).toBeInTheDocument();
  });

  test("a tela sempre renderiza um header", () => {
    render(<Screen data-testid="screen-testing"></Screen>);
    expect(screen.getByTestId("screen-testing")).not.toBeEmptyDOMElement();
  });

  test("a tela exibe um título", () => {
    render(<Screen title="título" />);
    expect(screen.getByText(/título/i)).toBeInTheDocument();
  });
});
