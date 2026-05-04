import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio heading", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /i build clean, useful web experiences/i,
  });
  expect(heading).toBeInTheDocument();
});
