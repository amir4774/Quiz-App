import { render, screen } from "@testing-library/react";
import LandingText from "../../../Components/Landing/LandingText";

describe("LandingText", () => {
  it("should render a text", () => {
    const text = "Some text";
    render(<LandingText text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
