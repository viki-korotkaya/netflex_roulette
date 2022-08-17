import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import ErrorBoundary from "HOC/ErrorBoundary/ErrorBoundary";
import { Provider } from "react-redux";
import SearchBar from "components/Search/SearchBar/SearchBar";
import {
  render,
  renderWithProviders,
  screen,
  fireEvent,
} from "utils/test-utils";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../../../features/movies/moviesSelector";
import modalWindowReducer from "../../../features/modalWindow/modalWindowSelector";
import { waitFor } from "@testing-library/react";

describe("SearchBar testing", () => {
  test("snapshot for SearchBar", () => {
    const store = configureStore({
      reducer: { movies: moviesReducer, modalWindow: modalWindowReducer },
    });
    const tree = renderer
      .create(
        <ErrorBoundary>
          <Provider store={store}>
            <MemoryRouter>
              <SearchBar />
            </MemoryRouter>
          </Provider>
        </ErrorBoundary>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    // const { baseElement } = render(
    //   <ErrorBoundary>
    //     <Provider store={store}>
    //       <MemoryRouter>
    //         <SearchBar />
    //       </MemoryRouter>
    //     </Provider>
    //   </ErrorBoundary>
    // );
    // expect(baseElement).toMatchSnapshot();
  });
  test("fire event", async () => {
    const handleClick = jest.fn();
    renderWithProviders(
      <ErrorBoundary>
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      </ErrorBoundary>
    );
    await waitFor(() => {
      fireEvent.change(
        screen.getByPlaceholderText("What do you want to watch?"),
        {
          target: {
            value: "mockname",
          },
        }
      );
    });

    await waitFor(() => {
      fireEvent.click(screen.getByText(/Search/i));
    });
    // const { baseElement } = render(
    //   <ErrorBoundary>
    //     <Provider store={store}>
    //       <MemoryRouter>
    //         <SearchBar />
    //       </MemoryRouter>
    //     </Provider>
    //   </ErrorBoundary>
    // );
    // expect(baseElement).toMatchSnapshot();
  });
});
