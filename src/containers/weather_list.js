import React, { Component } from 'react'

class WeatherList extends Component{
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        );
    }
}

export default WeatherList;