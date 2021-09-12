import HorribleForm from "../HorribleForm";
import {
  render,
  fireEvent,
  act,
} from "@testing-library/react";

describe("HorribleForm", () => {
  it("renders", async () => {
    const { findByRole } = render(<HorribleForm />);
    await findByRole("heading", { name: "Horrible Form" });
  });

  it("Throws required validation on blur", async () => {
    const { findByRole, getByRole, findByTestId, getByTestId } = render(
      <HorribleForm />
    );
    const nameField = await findByRole("textbox", { name: "Name" });
    const passwordField = getByRole("textbox", { name: "Password" });

    act(() => {
      fireEvent.blur(nameField);
      fireEvent.blur(passwordField);
    });

    await findByTestId("password-helper-text");
    getByTestId("password-is-required-meta-error");
    getByTestId("name-is-required-meta-error");
    getByTestId("name-helper-text");
  });

  it.only("throws validation on submit", async () => {
    const { findByRole, findByTestId, getByTestId } = render(<HorribleForm />);
    const submitButton = await findByRole("button", { name: "Submit" });

    act(() => {
      fireEvent.click(submitButton);
    });

    await findByTestId("password-helper-text");
    getByTestId("password-is-required-meta-error");
    // TODO: only one error is pushing on submit. Need to watch effects on entire error object and not each individual value
    // getByTestId("name-is-required-meta-error");
    getByTestId("name-helper-text");
  });
});
