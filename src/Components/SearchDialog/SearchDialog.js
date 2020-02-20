import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './SearchDialog.css';
import PropTypes from 'prop-types';

class SearchDialog extends Component {   

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
                        <TextField
                            
                            id="location-search" 
                            type="text" 
                            value={this.state.location} 
                            label="City, St OR Zip Code"
                            name="location" 
                            onChange={this.handleChange} 
                            variant="outlined" />     

                        <TextField 
                            
                            id="event-search"
                            type="text" 
                            value={this.state.event}
                            label="Event Search"
                            name="event" 
                            onChange={this.handleChange} 
                            variant="outlined" />

                        <Button className="Button" variant="contained" size="large" color="primary" onClick={this.handleSubmit}>Search Events</Button>
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

export default SearchDialog;
