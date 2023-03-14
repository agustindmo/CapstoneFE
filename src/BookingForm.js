// style="display: grid; max-width: 200px; gap: 20px
import "./bookingForm.css"
import React, {useState, useReducer} from "react"
import { submitAPI } from "./script"
import {useFormik} from "formik"
import { useNavigate } from "react-router-dom"
import * as Yup from 'yup';

// formik form
function Form({time, dispatch}){

    const today = new Date()
    
    const ReserveSchema = Yup.object().shape({
        date: Yup.date()
            .required('Please select a date')
            .min(today, "Oh! we are sorry, that date already passed"),
        time: Yup.string()
            .required('Please, select a time'),
        guests: Yup.number()
            .required('Please, enter the guests number')
            .min(1, 'We may reserve this table for one visitor at least')
            .max(10, 'We are sorry, we can only attend 10 guests at a time'),
        ocassion: Yup.string(),
    })

    const navigate = useNavigate
    
    const formik = useFormik({
        initialValues: {
            date: '',
            time: time[0],
            guests:'',
            ocassion:'',
        },
        onSubmit: values => {
            if (submitAPI(values)) {
                navigate("/confirmation", { state: { ...values } });
                alert(JSON.stringify(values, null, 2))
        }
    },
    })

    const handleDateChange = (e) => {
        formik.setFieldValue("date", e.target.value);
        dispatch({ type: "selected", payload: new Date(e.target.value) }); 
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
            <label htmlFor="date">Choose Date</label>
            <input
            id='date'
            className="date"
            type='date'
            onChange={handleDateChange}
            value={formik.values.date}
            required
            />
            </div>

            <div>
            <label htmlFor="time">Choose Time</label>
            <select
              type="time"
              name="time"
              id="res-time"
              {...formik.getFieldProps("time")}
              required
            >
              {time.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            </div>

            <div>
            <label htmlFor="guests">Number of guests</label>
            <input
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={formik.values.guests}
                onChange={formik.handleChange}
                required
            />
            </div>

            <div>
            <label htmlFor="ocassion">ocassion</label>
            <select
                id="ocassion"
                value={formik.values.ocassion}
                onChange={formik.handleChange}
                required
            >
                <option value='Birthday'>Birthday</option>
                <option value='Anniversary'>Anniversary</option>
            </select>
            </div>


            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;


// Preformik form 

// function Form({time, dispatch, apiFunctions}) {

//     function handleChange(e) {
//         dispatch({type:'selected',
//         payload: e.target.value, 
//         })
//         console.log(e.target.value)
//     }

//     const [date, setDate] = useState("");
//     const [guests, setGuests] = useState("2");
//     const [occasion, setOcassion] = useState("Anniversary");
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form submitted");
//         setDate("")
//         setGuests("2")
//         setOcassion("Anniversary")
//         console.log("")
//         console.log(apiFunctions.name)
//     }

//     return (
//         <div className="llForm">
//             <form className="theForm">
//                 <div>
//                     <label htmlfor="res-date">Choose date</label>
//                     <input 
//                     type="date" 
//                     id="res-date" 
//                     value={date}
//                     onChange ={(e) => setDate(e.target.value)}
//                     required
//                     />
//                 </div>
//                 <div>
//                     <label htmlfor="res-time">Choose time</label>
//                     <select 
//                     id="res-time" 
//                     value={"00:00"}
//                     onChange={handleChange}
//                     required
//                     >
//                         {time.map((item) => (<option key={item} value={item}>{item}</option>))}
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlfor="guests">Number of guests</label>
//                     <input 
//                     type="number" 
//                     placeholder="1" 
//                     min="1" 
//                     max="10" 
//                     id="guests" 
//                     value={guests}
//                     onChange={(e) => setGuests(e.target.value)} 
//                     required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="occasion">Occasion</label>
//                     <select id="occasion" value={occasion} onChange={(e) => setOcassion(e.target.value)} required>
//                         <option>Birthday</option>
//                         <option>Anniversary</option>
//                     </select>
//                 </div>
//                 <div>
//                     <input 
//                         type="submit" 
//                         value="Make Your reservation" 
//                         onClick={handleSubmit}/>
//                 </div>
//             </form>
//         </div>

//     )
// }

