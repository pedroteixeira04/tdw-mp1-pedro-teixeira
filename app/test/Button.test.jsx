import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("render the button with the correct text", () => {
  render(<Button label="Clica aqui" />);
  const buttonElement = screen.getByText(/Clica aqui/i);
  expect(buttonElement).toBeInTheDocument();
});

test("call function  onClick when pressed", () => {
  const handleClick = jest.fn();
  render(<Button label="Clica aqui" onClick={handleClick} />);
  const buttonElement = screen.getByText(/Clica aqui/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
