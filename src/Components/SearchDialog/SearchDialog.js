import React, { Component } from 'react'
import './SearchDialog.css'
import PropTypes from 'prop-types';

export class SearchDialog extends Component {
    constructor(props){
        super(props);

        this.state = {
            location: '',
            event: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const nam = e.target.name;
        const val = e.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit(e) {
        alert(`Location: ${this.state.location} \nEvent: ${this.state.event}`);
        e.preventDefault();
    }


    render() {
        return (                                               
            <div className="search-dialog">   
                <div className="search-title">             
                    <h1>Find an event near you</h1>
                </div>
                <div className="search-options">
                    <form onSubmit={this.handleSubmit}>                                       
                        <label>
                            Location:
                            <input type="text" value={this.state.location} name="location" placeholder="Enter City" onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Event:
                            <input type="text" value={this.state.event} name="event" placeholder="Event Name" onChange={this.handleChange}></input>
                        </label>
                        <input type="submit" value="Search Events"></input>
                    </form>      
                </div>          
            </div>
        )
    }
}

SearchDialog.propTypes = {
    location: PropTypes.string,
    event: PropTypes.string
}

export default SearchDialog
