import { render } from "@testing-library/react";
import CardTitle from "../../../../Components/CreateExam/Cards/CardTitle";

describe("CardTitle", () => {
  it("Should renders", () => {
    const title = "Some Title";
    render(<CardTitle text={title} />);
  });
});
