import { vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import Category from "../../../../Components/CreateExam/Cards/Category";
import { FormInputs } from "../../../../Components/CreateExam/Interfaces";

vi.mock("react-hook-form", () => ({
  useForm: vi.fn(() => ({
    register: vi.fn(),
    formState: {
      errors: {},
    },
  })),
}));

describe("Category", () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormInputs>();

  const categories = [
    "Linux",
    "DevOps",
    "Code",
    "Docker",
    "SQL",
    "CMS",
    "Random",
  ];

  it("should render all categories as unchecked", () => {
    render(<Category register={register} errors={errors} />);

    categories.forEach((category) => {
      expect(screen.getByRole("radio", { name: category })).not.toBeChecked();
    });
  });

  it("should render all categories as checked when clicked", () => {
    render(<Category register={register} errors={errors} />);

    const user = userEvent.setup();

    categories.forEach(async (category) => {
      await user.click(screen.getByRole("radio", { name: category }));
      expect(screen.getByRole("radio", { name: category })).toBeChecked();
    });
  });
});
