import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';




function CreatePostHomePHForm(){
    const history = useHistory()
    const dispatch = useDispatch()


    // stuff for form

    const [date,setDate] = useState('')
    const [time, setTime] = useState('')
    const [ph, setPh] = useState(0)
    const [ppm, setPpm] = useState(3.1459)
    const [temperature, setTemperature] = useState('')
    const [submit, setSubmit] = useState(false)
 

    



    // end form stuff



    const handleSubmit = async e => {
        e.preventDefault()

        const newLogEntrie = {
            date: date,
            time: time,
            ph: ph,
            ppm: ppm,
            temperature: temperature,
            
        }
       
    }

        

           



    return(
           
        <form className='formMain' onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} required />
    
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" value={time} onChange={e => setTime(e.target.value)} required />
    
        <label htmlFor="ph">pH:</label>
        <input type="number" step="0.01" id="ph" value={ph} onChange={e => setPh(parseFloat(e.target.value))} required />
    
        <label htmlFor="ppm">PPM:</label>
        <input type="number" step="0.01" id="ppm" value={ppm} onChange={e => setPpm(parseFloat(e.target.value))} required />
    
        <label htmlFor="temperature">Temperature:</label>
        <input type="number" step="0.01" id="temperature" value={temperature} onChange={e => setTemperature(parseFloat(e.target.value))} required />
    
        <button type="submit">Submit</button>
    </form>
              



    )

}

export default CreatePostHomePHForm