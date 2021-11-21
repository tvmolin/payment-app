import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "../../App";
import render from "../../utils/customRender";

test("Should allow the user to login", async () => {
  const { history } = render(<App />, { routeHistory: ["/login"] });

  const usernameField = screen.getByTestId("UsernameField");
  const passwordField = screen.getByTestId("PasswordField");
  const signInButton = screen.getByText("Sign In");
  act(() => {
    userEvent.type(usernameField, "johndoe");
    userEvent.type(passwordField, "123");
    userEvent.click(signInButton);
  });

  await waitFor(() => {
    expect(history.location.pathname).toBe("/app/home");
  });
});
