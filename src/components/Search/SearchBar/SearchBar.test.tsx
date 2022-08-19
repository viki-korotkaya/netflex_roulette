import { MemoryRouter } from "react-router-dom";
import ErrorBoundary from "HOC/ErrorBoundary/ErrorBoundary";
import SearchBar from "components/Search/SearchBar/SearchBar";
import { renderWithProviders, screen, fireEvent } from "utils/test-utils";
import { moviesAction } from "features/movies/moviesSelector";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("features/movies/moviesSelector", () => ({
  moviesAction: {
    resetState: jest.fn(),
  },
}));

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
  test("fire input event, search event and check if it calls the resetState action in movies reduces", async () => {
    renderWithProviders(
      <ErrorBoundary>
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      </ErrorBoundary>
    );

    userEvent.type(
      screen.getByPlaceholderText("What do you want to watch?"),
      "mockname"
    );
    fireEvent.click(screen.getByText(/Search/i));
    await waitFor(() => expect(moviesAction.resetState).toBeCalled());
  });
});
