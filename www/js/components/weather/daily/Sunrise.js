import React from 'react';

//component showing sunrise and sunset
class Sunrise extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Sunrise';
    }
    render() {

    //define styles of component
    const sunriseStyle = {
        width: '100px',
        textAlign: 'center'
    }
    const sunMoonStyle = {
        height: '100px',
        background: 'url(../../../img/sunMoon.png)',
        backgroundSize: '100px 100px'
    }
        return(
        	<div>
        		<div style={sunriseStyle}>
        			<span title='sunrise'><b>{this.props.data.sunrise}</b></span>
        			<div style={sunMoonStyle}></div>
        			<span title='sunset'><b>{this.props.data.sunset}</b></span>
        		</div>
        	</div>
        );
    }
}

export default Sunrise;
