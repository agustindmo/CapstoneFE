import React, {useReducer, useState, useEffect} from 'react';
import Form from './BookingForm.js';
import fetchAPI from './fetchAPI';


const availableTimes = [
    "Select time",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
]

function BookPage() {

    function updateTimes(state, action){

        let newList
        switch(action.type){
            case 'selected': {
                newList = [...state]
                let aList = state.filter(e => e !== action.payload)
                console.log(action.payload)
                console.log(newList)
                console.log(aList)
                return(aList)
            }
            default:
                break
        }
        }

    const[apiFunctions, setApiFunctions] = useState([])

    const fetcData = () => {
        fetch("scripts.js")
        .then((response)=> response.json())
        .then((data)=> console.log(data))
    }

    useEffect(()=> {
        fetcData();
    }, []);

    const todayDate = new Date()

    const initializeTimes = () => {
        fetchAPI(todayDate)
    }

   const [time, dispatcher] = useReducer(updateTimes, availableTimes)

    return(
        <>
         <Form time={time} dispatch={dispatcher} apiFunctions={apiFunctions} />
        </>
    )
}

export default BookPage;