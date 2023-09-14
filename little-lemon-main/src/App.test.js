import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./BookingForm";

// test("Adds one", () => {
//   // render the App component
//   render(<App />);

//   // save the heading in a variable
//   const heading = screen.getByTestId("currentNumber");

//   // save the button in a variable
//   const btn = screen.getByTestId("addOne");

//   // click the btn
//   fireEvent.click(btn);

//   // test assumption
//   expect(heading).toHaveTextContent("2");
// });

// describe('BookingForm', () => {
//   it('renders the form elements', () => {
//     render(<BookingForm availableTimes={[]} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

//     // Check if form elements are present
//     expect(screen.getByText('Book a Table')).toBeInTheDocument();
//     expect(screen.getByLabelText('Date')).toBeInTheDocument();
//     expect(screen.getByLabelText('Time')).toBeInTheDocument();
//     expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
//     expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
//     expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
//   });