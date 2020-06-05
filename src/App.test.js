import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
})

test('Will add contact information to the inputs', async () => {
  render(<ContactForm />)

  const firstNameInput = screen.getByLabelText(/first name/i)
  const lastNameInput = screen.getByLabelText(/last name/i)
  const emailInput = screen.getByLabelText(/email/i)

  fireEvent.change(firstNameInput, { target: { value: 'Jorge' } })
  fireEvent.change(lastNameInput, { target: { value: 'Manzur' } })
  fireEvent.change(emailInput, { target: { value: 'email@gamil.com' } })
  fireEvent.click(screen.getByTestId("submit"))

  waitFor(() => { screen.getByTestId('pre') })

  expect(firstNameInput.value).toBe('Jorge')
  expect(lastNameInput.value).toBe('Manzur')
  expect(emailInput.value).toBe('email@gamil.com')

  waitFor(() => { expect(screen.getByTestID('pre')).toBeInTheDocument() })

})

