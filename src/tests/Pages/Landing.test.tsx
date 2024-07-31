import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Landing from "../../Pages/Landing";

describe("Landing", () => {
  it("Should render buttons, link, and Image", () => {
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent(/start/i);
    expect(buttons[1]).toHaveTextContent(/know more/i);

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent(/start/i);
    expect(link).toHaveAttribute("href", "/create-exam");

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();

    screen.debug();
  });
});
