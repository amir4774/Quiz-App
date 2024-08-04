import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateExam from "../../Pages/CreateExam";

describe("CreateExam", () => {
  it("should render", () => {
    render(
      <BrowserRouter>
        <CreateExam />
      </BrowserRouter>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/start/i);
  });
});
