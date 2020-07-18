import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders application", () => {
  render(<App />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
