import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";
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
import { getMovies } from "api/movieService";
import userEvent from "@testing-library/user-event";

describe("SearchBar testing", () => {
  test("snapshot for SearchBar", () => {
    const { baseElement } = renderWithProviders(
      <ErrorBoundary>
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      </ErrorBoundary>
    );
    expect(baseElement).toMatchSnapshot();
  });
  test("fire input event, search event and calling fetchMovies", async () => {
    const mock = jest.fn();

    let result = mock("getMovies");
    act(() => {
      renderWithProviders(
        <ErrorBoundary>
          <MemoryRouter>
            <SearchBar />
          </MemoryRouter>
        </ErrorBoundary>
      );
    });

    await waitFor(() => {
      userEvent.type(
        screen.getByPlaceholderText("What do you want to watch?"),
        "mockname"
      );
    });

    await act(async () => {
      await waitFor(() => {
        fireEvent.click(screen.getByText(/Search/i));
      });
    });
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
