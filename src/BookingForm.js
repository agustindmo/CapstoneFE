// style="display: grid; max-width: 200px; gap: 20px
import "./bookingForm.css"
import React, {useState, useReducer} from "react"

function Form({time, dispatch, apiFunctions}) {

    function handleChange(e) {
        dispatch({type:'selected',
        payload: e.target.value, 
        })
        console.log(e.target.value)
    }

    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("2");
    const [occasion, setOcassion] = useState("Anniversary");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        setDate("")
        setGuests("2")
        setOcassion("Anniversary")
        console.log("")
        console.log(apiFunctions.name)
    }

    return (
        <div className="llForm">
            <form className="theForm">
                <div>
                    <label htmlfor="res-date">Choose date</label>
                    <input 
                    type="date" 
                    id="res-date" 
                    value={date}
                    onChange ={(e) => setDate(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlfor="res-time">Choose time</label>
                    <select 
                    id="res-time" 
                    value={"00:00"}
                    onChange={handleChange}
                    required
                    >
                        {time.map((item) => (<option key={item} value={item}>{item}</option>))}
                    </select>
                </div>
                <div>
                    <label htmlfor="guests">Number of guests</label>
                    <input 
                    type="number" 
                    placeholder="1" 
                    min="1" 
                    max="10" 
                    id="guests" 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)} 
                    required
                    />
                </div>
                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => setOcassion(e.target.value)} required>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Make Your reservation" 
                        onClick={handleSubmit}/>
                </div>
            </form>
        </div>

    )
}

export default Form;