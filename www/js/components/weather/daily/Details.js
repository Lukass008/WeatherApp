import React from 'react';

//component with details of weather (humidity and pressure)
class Details extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Details';
    }
    render() {
        return(
        	<div>
        		<h4><b>Details</b></h4>
				Humidity: 
				<h3>{this.props.data.humidity} %</h3>
				Pressure: 
				<h3>{this.props.data.pressure} hPa</h3>
        	</div>
        );
    }
}

export default Details;
