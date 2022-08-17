import React from "react";
import { render, screen } from "utils/test-utils";
import NotFound from "components/NotFound/NotFound";

test("renders Not Found page", () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/404 page/i);
  expect(linkElement).toBeInTheDocument();
});
