import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "../../App";
import render from "../../utils/customRender";

test("Should show payment form after selecting payment receiver", async () => {
  // const { history } = render(<App />, { routeHistory: ["/app/new-payment"] });

  // const paymentReceiverField = screen.getByTestId("PaymentReceiverField");
  // act(() => {
  //   userEvent.type(paymentReceiverField, "johndoe");
  // });

  // await waitFor(() => {
  //   expect(history.location.pathname).toBe("/app/home");
  // });
});