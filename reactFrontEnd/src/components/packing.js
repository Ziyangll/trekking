import React from 'react';
import "react-toggle/style.css"
import Group_3 from '../Group 3.svg';


export default function Packer()
{
    
    var isBackpacking = false;
    function handleChange(event) 
    {
        isBackpacking = !isBackpacking;
    }
    function handleSubmit(event) 
    {
        // after POST the date in the html form
    }
    return (
        <div className="contact" >
            <h1>Trekker Packer</h1>
            <form onSubmit={handleSubmit}>
			    <h3>How are you trekking?</h3>
                
                <select>
                <option selected value="backpacking">Backpacking</option>
                <option value="hiking">Hiking</option>
                </select>
                
			    <h3>How much do you weigh in lb?</h3>
                <input type="number" />
			    <h3>How many days do you plan to hike?</h3>
			    <input type="number" min = "1" max = "5" />
                <button className = "submit-btn" type="submit">Submit</button>
            </form>
            <img src={Group_3} />
        </div>
    )
}
