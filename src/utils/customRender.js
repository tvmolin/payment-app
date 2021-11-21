import { createMemoryHistory } from "history";
import { render as rtlRender } from "@testing-library/react";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

export default function render(
  ui,
  {
    preloadedState = {},
    routeHistory = [],
    initialRouteIndex,
    ...renderOptions
  }
) {
  const memoryHistoryArgs = {};
  if (routeHistory.length > 0) {
    memoryHistoryArgs.initialEntries = routeHistory;
    memoryHistoryArgs.initialIndex = initialRouteIndex;
  }

  const history = createMemoryHistory({ ...memoryHistoryArgs });
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  }

  const renderResult = rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
  return { ...renderResult, history };
}
