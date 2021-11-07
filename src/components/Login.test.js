import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

test("Should allow the user to login", () => {
  render(<Login />);

  userEvent.type(screen.getByTestId('UsernameField'), 'johndoe');
  userEvent.type(screen.getByTestId('PasswordField'), '123');
  userEvent.click(screen.getByText('Sign In'));

  //TODO figure out how to test route changes
});
