import React from "react";
import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import { initializeTimes } from "./ReserveForm";
import ReserveForm from "./ReserveForm";

describe("initializeTimes", () => {
  test("returns the correct array of available times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];

    const result = initializeTimes(); // Call the function without passing a date

    expect(result).toEqual(expectedTimes);
  });
});

test('Renders the ReserveForm heading', () => {
  render(<ReserveForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

describe("ReserveForm", () => {
  test("should submit form with valid date", async () => {
    const { getByLabelText, getByText, queryByText } = render(<ReserveForm />);
    const dateInput = getByLabelText("Choose date");
    const submitButton = getByText("Make Your reservation");

    fireEvent.change(dateInput, { target: { value: "2023-06-30" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(queryByText("Please choose a date")).toBeNull();
    });
    expect(submitButton).toBeDisabled(); // Optional: Verify button state after submit

    // Add assertions for other form inputs if needed
  });

  test("should show error message when form is submitted without a date", async () => {
    const { getByText } = render(<ReserveForm />);
    const submitButton = getByText("Make Your reservation");

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("Please choose a date")).toBeInTheDocument();
    });
    expect(submitButton).toBeDisabled(); // Optional: Verify button state after submit

    // Add assertions for other form inputs if needed
  });
});