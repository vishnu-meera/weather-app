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
            <form onSubmit={this.onFormSubmit} className="row no-gutters group align-content-sm-center">
                <div className="col">
                    <input  className="form-control border-secondary border-right-0 rounded-0"
                            placeholder="Get a five day forecast in your city"
                            value = {this.state.term}
                            onChange={this.onInputChange}/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-secondary border-left-0 rounded-0 rounded-right">
                        Search                    
                    </button>
                </div>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar)