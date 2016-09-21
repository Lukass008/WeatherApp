import React from 'react';


//component to show wind parameters
class Wind extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Wind';
    }
    render() {
        return(
        	<div>
        		<h4><b>Wind</b></h4>
        		Speed: 
				<h4>{this.props.data.speed} {this.props.units.speed}</h4>
				Direction: 
				<h4>{this.props.data.direction} &deg;</h4>
        	</div>
        );
    }
}

export default Wind;
