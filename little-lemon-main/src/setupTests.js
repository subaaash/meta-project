// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/jest-dom';
import BookingForm from './BookingForm';

// test('Renders the BookingForm heading', () => {
//     render(<BookingForm />);
//     const headingElement = screen.getByText("Choose Date:");
//     expect(headingElement).toBeInTheDocument();
// })



// Mock the dispatch and submitForm functions
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

beforeEach(() => {
  mockDispatch.mockClear();
  mockSubmitForm.mockClear();
});

describe('BookingForm', () => {
  it('renders the form elements', () => {
    render(<BookingForm availableTimes={[]} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

    // Check if form elements are present
    expect(screen.getByText('Book Your Reservation')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose Date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose Time:')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Guests:')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion:')).toBeInTheDocument();
    expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
  });

  it('updates form data when inputs change', () => {
    render(<BookingForm availableTimes={[]} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

    // Simulate input changes
    fireEvent.change(screen.getByLabelText('Choose Date:'), { target: { value: '2023-09-12' } });
    fireEvent.change(screen.getByLabelText('Choose Time:'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Number of Guests:'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Occasion:'), { target: { value: 'Birthday' } });

    // Check if form data is updated
    // expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: '2023-09-12' });
    expect(mockSubmitForm).not.toHaveBeenCalled(); // Submit should not be called yet
  });

  it('submits the form when the submit button is clicked', () => {
    render(<BookingForm availableTimes={["18:00"]} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

    // Simulate input changes
    fireEvent.change(screen.getByLabelText('Choose Date:'), { target: { value: '2023-09-19' } });
    fireEvent.change(screen.getByLabelText('Choose Time:'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Number of Guests:'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Occasion:'), { target: { value: 'Birthday' } });

    // Simulate form submission
    fireEvent.click(screen.getByText('Make Your Reservation'));

    // Check if submitForm is called with the correct form data
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2023-09-23',
      time: '19:00',
      guests: '4',
      occasion: 'Birthday',
    });
  });
});