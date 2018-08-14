import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchWeather,FETCH_WEATHER} from '../actions/index'

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term:''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value})
    };

    onFormSubmit(event){
        //we need to fetch weather data
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    };

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input  className="form-control"
                        placeholder="Get a five day forecast in your city"
                        value = {this.state.term}
                        onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar)