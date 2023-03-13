import {fireEvent, render, screen} from '@testing-library/react'
import Main from './Main.js'
import Form from './BookingForm.js'

test('returns the expected value', () => {
    render(<Form />)
    const times = screen.getByTestId("time")
    const btn = screen.getByTestId("res-time")
    fireEvent.change(btn)
    expect(times).toHaveTextContent(
    
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",)

})
