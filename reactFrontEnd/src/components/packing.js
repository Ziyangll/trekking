import React from 'react';
import Group_3 from '../Group 3.svg';
import axios from 'axios';

export default class Packer extends React.Component {
    state = {
        weight: '',
        BPday: '',
        results: {},
    }

    handleChange1 = event => {
        this.setState({ weight: event.target.value });
    }
    handleChange2 = event => {
        this.setState({ BPday: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();

        axios.post('http://localhost:8080/api/v1/packer', {
            weight: this.state.weight,
            BPday: this.state.BPday
         })
            .then(res => {
                this.results = res.data
                alert('Your Backpack should be '+ (this.results) + ' LBS');
                console.log(this.state.weight);
                console.log(this.results);
            })
    }
    render() {
        return (
            <div className="contact" >
                <h1>Trekker Packer</h1>
                <form onSubmit={this.handleSubmit}>
                    <h3>How are you trekking?</h3>

                    <select>
                        <option selected value="backpacking">Backpacking</option>
                        <option value="hiking">Hiking</option>
                    </select>

                    <h3>How much do you weigh in lb?</h3>
                    <input type="number" weight="weight" onChange={this.handleChange1} />
                    <h3>How many days do you plan to hike?</h3>
                    <input type="number" min="1" max="5" BPday="BPday" onChange={this.handleChange2}/>
                    <button className="submit-btn" type="submit">Submit</button>
                </form>
                <img src={Group_3} alt="" />
            </div>
        )
    }
}