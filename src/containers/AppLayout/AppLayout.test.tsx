import { MemoryRouter } from "react-router-dom";
import ErrorBoundary from "HOC/ErrorBoundary/ErrorBoundary";
import { renderWithProviders, screen, fireEvent } from "utils/test-utils";
import AppLayout from "containers/AppLayout/AppLayout";
import { waitFor } from "@testing-library/react";

test("AppLayout testing", async () => {
  renderWithProviders(
    <ErrorBoundary>
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>
    </ErrorBoundary>
  );

  expect(screen.getByText(/Find your movie/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Add movie/i));

  expect(screen.getByText(/Reset/i)).toBeInTheDocument();
});
