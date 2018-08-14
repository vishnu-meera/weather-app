import React, { Component } from 'react'
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogelMap from '../components/google_map';

//import {bindActionCreators} from 'redux'
class WeatherList extends Component{

    renderWeather(cityData){
        const name =cityData.city.name
        const temps = cityData.list.map(weather=>weather.main.temp-273.15);
        const humidity = cityData.list.map(weather=>weather.main.humidity);
        const pressure = cityData.list.map(weather=>weather.main.pressure);
        const {lon,lat} = cityData.city.coord;

        return(
            <tr key={name}>
                <td><GoogelMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="blue" unit="C"/></td>
                <td><Chart data={pressure} color="green" unit="hPa"/></td>
                <td><Chart data={humidity} color="orange" unit="%"/></td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state){
//     return {weather:state.weather}
// }

function mapStateToProps({weather}){return {weather};}

export default connect(mapStateToProps)(WeatherList);