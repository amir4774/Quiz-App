import { vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import DifficultyandLimit from "../../../../Components/CreateExam/Cards/DifficultyandLimit";
import { FormInputs } from "../../../../Components/CreateExam/Interfaces";

vi.mock("react-hook-form", () => ({
  useForm: vi.fn(() => ({
    register: vi.fn(),
    setValue: vi.fn(),
    formState: {
      errors: {},
    },
  })),
}));

describe("DifficultyandLimit", () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm<FormInputs>();

  it("should register the limit input and update its value correctly", async () => {
    render(
      <DifficultyandLimit
        errors={errors}
        register={register}
        setValue={setValue}
      />
    );

    const user = userEvent.setup();
    const limit = screen.getByRole("spinbutton", { name: /limit/i });

    await user.type(limit, "10");
    expect(limit).toHaveValue(10);

    expect(register).toHaveBeenCalledWith("limit", expect.anything());
  });

  it("should register the difficulty", async () => {
    render(
      <DifficultyandLimit
        errors={errors}
        register={register}
        setValue={setValue}
      />
    );

    const difficulty = screen.getByRole("combobox", { name: /difficulty/i });
    expect(difficulty).toBeInTheDocument();
});
});
