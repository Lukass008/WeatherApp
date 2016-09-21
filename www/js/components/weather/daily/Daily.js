import React from 'react';
import Icon from '../Icon';
import Details from './Details';
import Wind from './Wind';
import Sunrise from './Sunrise';

//component with group of weather details blocks (details, wind and sunrise/sunset)
class Daily extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Daily';
    }
    render() {
        //put all weather data from props to const
    	const weather = this.props.data;

        //define styles
        const dailyDivStyle = {
            marginTop: '15px',
            backgroundColor: 'white',
            padding: '20px 30px',
            height: '600px'
        }
        const temperatureBigStyle = {
            fontSize: '7em',
            fontWeight: '500',
            marginTop: '30px',
            marginLeft: '50px',
            verticalAlign: 'middle',
            float: 'left'
        }
        const dailyDetailsStyle = {
            marginTop: '25px'
        }
        const updDateStyle = {
            position: 'absolute',
            bottom: '5px',
            right: '20px'
        }


        //render component
        return(
        	<div style={dailyDivStyle}>
        		<h4>{weather.description}</h4>
        		<Icon code={weather.item.condition.code} text={weather.item.condition.text} size='bigIcon' />
        		<div style={temperatureBigStyle}>{weather.item.condition.temp}&deg;{weather.units.temperature}</div>
        		<div className='clear'></div>
        		<div className='row' style={dailyDetailsStyle}>
        			<div className='col-md-4 col-sm-4'>
		    			<Details data={weather.atmosphere} />
		    		</div>
		    		<div className='col-md-4 col-sm-4'>
		    			<Wind data={weather.wind} units={weather.units} />
		    		</div>
		    		<div className='col-md-4 col-sm-4'>
		    			<Sunrise data={weather.astronomy} />
		    		</div>
        		</div>
        		<div style={updDateStyle}>Updated: {weather.item.pubDate}</div>
        	</div>
        );
    }
}

export default Daily;
