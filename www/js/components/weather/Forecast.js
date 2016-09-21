import React from 'react';
import Icon from './Icon';


//component with forecast block (for single day)
class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Forecast';
    }
    render() {
    	const tempraturesStyle = {
    		float: 'left'
    	}
        const forecastDivStyle = {
            backgroundColor: 'white',
            margin: 0,
            padding: '15px 40px',
            height: '150px',
            marginTop: '15px',
            marginBottom: '15px'
        }
        const highTmpStyle = {
            color: 'red',
            fontSize: '1.7em',
            marginTop: '13px',
            marginLeft: '30px'
        }
        const lowTmpStyle = {
            color: 'blue',
            fontSize: '1.7em',
            marginTop: '3px',
            marginLeft: '30px'
        }

        return(
        	<div style={forecastDivStyle}>
        		<span>{this.props.data.day}, {this.props.data.date}</span>
        		<div className='clear'></div>
        		<Icon code={this.props.data.code} size='smallIcon' text={this.props.data.text} />
        		<div style={tempraturesStyle}>
	        		<div style={highTmpStyle}>{this.props.data.high}&deg;F</div>
	        		<div style={lowTmpStyle}>{this.props.data.low}&deg;F</div>
        		</div>
           	</div>
        );
    }
}

export default Forecast;
