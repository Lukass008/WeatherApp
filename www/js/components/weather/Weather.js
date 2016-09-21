import React from 'react';
import Daily from './daily/Daily';
import Forecast from './Forecast';

//component do show all weather - daily and forecast
class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Weather';
    }

    render() {
    	const weatherData = this.props.data.channel;
    	const forecast = weatherData.item.forecast;
    	
    	const weatherDivStyle = {
			margin: 0,
			padding: 0,
			marginTop: '15px'
		}
    	return (
    		<div className='row' style={weatherDivStyle}>
		    	<div className='col-md-8 col-sm-12 mp0'>
		    		<Daily data={weatherData} />
		    	</div>


		    	<div className='col-md-4 col-sm-12 mp0'>
			    	<div className='forecastContainer'>
						<h4><b>Forecast for the next 10 days</b></h4>
				    	{forecast.map((day, index) => {
				    		return(
				    			<div key={index} className='col-md-12 col-sm-6 mp0'>
				    				<Forecast data={day} />
			    				</div>
				    		);
				    	})}
			    	</div>
		    	</div>
		    	
    		</div>
    		);
    }
}

export default Weather;
