// style="display: grid; max-width: 200px; gap: 20px"
import React, {useState} from "react"


function Form() {
    
    const [date, setDate] = useState("");
    const [time, setTime] = useState();
    const [guests, setGuests] = useState("2");
    const [occasion, setOcassion] = useState("Anniversary");
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        setDate("")
        setTime("")
        setGuests("2")
        setOcassion("Anniversary")
    }

    return (
        <div className="llForm">
            <form>
                <div>
                    <label for="res-date">Choose date</label>
                    <input 
                    type="date" 
                    id="res-date" 
                    value={date}
                    onChange ={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <label for="res-time">Choose time</label>
                    <select 
                    id="res-time " 
                    value={time}
                    onChange={(e) => setTime(e.target.value) &&
                    setAvailableTimes(e.target.value)}
                    >
                       {availableTimes.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                </div>
                <div>
                    <label for="guests">Number of guests</label>
                    <input 
                    type="number" 
                    placeholder="1" 
                    min="1" 
                    max="10" 
                    id="guests" 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)} 
                    />
                </div>
                <div>
                    <label for="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => setOcassion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Make Your reservation" onClick={handleSubmit}/>
                </div>
            </form>
        </div>

    )
}

export default Form;