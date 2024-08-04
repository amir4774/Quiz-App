import { render, screen } from "@testing-library/react";
import CardError from "../../../../Components/CreateExam/Cards/CardError";

describe("CardError", () => {
  it("renders with the provided text", () => {
    const errorMessage = "Some Error";
    render(<CardError text={errorMessage} />);

    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toHaveTextContent(errorMessage);
  });
});
