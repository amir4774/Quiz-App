import { render, screen } from "@testing-library/react";
import CreateExamStepper from "../../../Components/CreateExam/CreateExamStepper";

describe("CreateExamStepper", () => {
  it("Should render", () => {
    const steps = ["Category", "Difficulty", "Limit"];

    render(
      <CreateExamStepper
        activeStep={1}
        completed={[false, false, false]}
        steps={steps}
      />
    );

    steps.forEach((step) => expect(screen.getByText(step)).toBeInTheDocument());
  });
});
