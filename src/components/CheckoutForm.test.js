import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    <CheckoutForm />
});

test("form shows success message on submit with form details", () => {
    render(
        <CheckoutForm />
    )

    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const zip = screen.getByLabelText(/zip/i)
    const state = screen.getByLabelText(/state/i)
    const button = screen.getByRole('button')

    userEvent.type(firstName, 'Jordan')
    userEvent.type(lastName, 'Shelton')
    userEvent.type(address, '20558 Legacy Xing')
    userEvent.type(city, 'Harrah')
    userEvent.type(zip, '73045')
    userEvent.type(state, 'Oklahoma')
    userEvent.click(button)

    const message = screen.getByTestId(/successMessage/i)
    expect(message).toBeInTheDocument()
    console.log(message)
});