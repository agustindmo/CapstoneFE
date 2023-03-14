import React, {useReducer, useState, useEffect} from 'react';
import Form from './BookingForm.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import { fetchAPI } from './script.js';

// const availableTimes = [
//     "Select time",
//     "17:00",
//     "18:00",
//     "19:00",
//     "20:00",
//     "21:00",
//     "22:00",
// ]

function BookPage() {

    function updateTimes(state, action){

        let newList
        switch(action.type){
            case 'selected': {
                const availableTimes = fetchAPI(action.payload);
                return{
                    ...state,
                    availableTimes,
                }
                return time

                // newList = [...state]
                // let aList = state.filter(e => e !== action.payload)
                // console.log(action.payload)
                // console.log(newList)
                // console.log(aList)
                // return(aList)
            }
            default:
                break
        }
        }

    function initializeTimes() {
        let date = new Date()
        return fetchAPI(date)
    }

   const [time, dispatcher] = useReducer(updateTimes, {availableTimes: initializeTimes()})

    return(
        <>
            <>
                <Nav />
            </>
            <>
                <Form time={time.availableTimes} dispatch={dispatcher}/>
            </>
            <>
                <Footer />
            </>
        </>
    )
}

export default BookPage;