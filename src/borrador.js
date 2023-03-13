


import react, { useState, useReducer } from "react"


const availableTimes = [
    {
        id:'a',
        time: "17:00",
    },
    {
        id:'b',
        time: "18:00",
    },
    {
        id:'c',
        time: "19:00",
    },
    {
        id:'d',
        time: "20:00",
    },
    {
        id:'e',
        time: "21:00",
    },
    {
        id:'f',
        time: "22:00",
    },
]




function updateTimes(state, action){
    let newList
    switch(action.type){
        case 'selected': {
            newList = [...state];
            newList.pop()
            return(newList)
        }
        default:
            break
    }
}


function MainUI () {
    
    const [time, dispatcher] = useReducer(updateTimes, availableTimes)

    

    return <Form time={time} dispatch={dispatcher} />
}

export default MainUI;



function Form({time, dispatch}) {


    function handleChange(e) {
            dispatch({type:'selected', 
            payload: e.target.value
        })
            console.log(e.target.value)
        }

    return (

        <div>
            <form>
                    <label for="res-time">Choose time</label>
                    <select 
                    id="res-time " 
                    value={time}
                    // onChange={(e)=>updateTimes(e.target.value)}
                    onChange={handleChange}
                    >
                        {time.map((item) => (<option key={item.id} value={item.time}>{item.time}</option>))}
                    </select>
            </form>
        </div>
    )

}


