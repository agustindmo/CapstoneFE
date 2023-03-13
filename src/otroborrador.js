
import react, { useState, useReducer } from "react"


const availableTimes = [
        "Select time",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
]



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


function MainUX () {
    
    const [time, dispatcher] = useReducer(updateTimes, availableTimes)

    

    return <Form time={time} dispatch={dispatcher} />
}

export default MainUX;



function Form({time, dispatch}) {



    function handleChange(e) {
            dispatch({type:'selected',
            payload: e.target.value,
                
            })
            console.log(e.target.value)
        }

    return (

        <div>
            <form>
                    <label for="res-time">Choose time</label>
                    <select 
                    id="res-time" 
                    value={"00:00"}
                    onChange={handleChange}
                    >
                        {time.map((item) => (<option key={item} value={item}>{item}</option>))}
                    </select>
            </form>
        </div>
    )

}


