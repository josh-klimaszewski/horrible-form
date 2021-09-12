import { render, fireEvent, act } from "@testing-library/react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import TextField from "../lib/TextField";

const TEST_NAME = "testName";
const TEST_LABEL = "Test Label";
const TEST_INITIAL_VALUE = "Initial value";
const TEST_ERROR = "Test error";

type FormProps = { [TEST_NAME]: string };
type SubjectProps = Partial<{
  initialValue: string;
}>;

const Subject: FC<SubjectProps> = ({ initialValue = "" }) => {
  const { control } = useForm<FormProps>({
    defaultValues: { [TEST_NAME]: initialValue },
    mode: "all",
    resolver: async (_values) => {
      return await {
        values: { [TEST_NAME]: { required: true } },
        errors: { [TEST_NAME]: { type: "required", message: TEST_ERROR } },
      };
    },
  });
  return (
    <form>
      <TextField name={TEST_NAME} label={TEST_LABEL} control={control} />
    </form>
  );
};

describe("TextField", () => {
  describe("Accessibility", () => {
    it("Finds by test id", async () => {
      const { findByTestId } = await render(<Subject />);
      await findByTestId(`${TEST_NAME}-text-input`);
    });

    it("Finds by role", async () => {
      const { findByRole } = await render(<Subject />);
      const field = await findByRole("textbox", { name: TEST_LABEL });
      expect(field).toHaveAttribute("aria-disabled", "false");
      expect(field).toHaveAttribute("aria-label", TEST_LABEL);
      expect(field).toHaveAttribute("data-testid", `${TEST_NAME}-text-input`);
      expect(field).toHaveAttribute("name", TEST_NAME);
    });
  });
  describe("Form interaction", () => {
    it("accepts initial value", async () => {
      const { findByRole } = render(
        <Subject initialValue={TEST_INITIAL_VALUE} />
      );
      const field = await findByRole("textbox", { name: TEST_LABEL });
      expect(field).toHaveValue(TEST_INITIAL_VALUE);
    });

    it("validates on blur", async () => {
      const { findByRole, findByText } = render(<Subject />);
      const field = await findByRole("textbox", { name: TEST_LABEL });

      act(() => {
        fireEvent.blur(field);
      });

      await findByText(TEST_ERROR);
    });
  });
});
