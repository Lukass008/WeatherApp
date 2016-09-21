
//MAIN LAYOUT, ALL COMPONENTS INSIDE
import React from 'react';
import Search from './search/Search';
import Weather from './weather/Weather';

import ErrInfo from './others/ErrInfo';

import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';

@connect((store) => {
  return {
    weather: store.weather,
    error: store.error
  }
})


class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Layout';
    }

    //run action 'fetchWeather' and get data from server
    fetchWeather(zipCode) {
        this.props.dispatch(fetchWeather(zipCode));
    }

    render() {
    	const weather  = this.props.weather;

        //check if there are weather data to show
        if(weather.channel) {
            return (
                <div className='container'>
                    <Search initialize={this.fetchWeather.bind(this)} />
                    <Weather data={weather} />
                </div>);
        } else {
            return (
                <div className='container'>
                    <Search initialize={this.fetchWeather.bind(this)} />
                    {this.props.error ? <ErrInfo /> : null}
                </div>);
        }


    }
}

export default Layout;
