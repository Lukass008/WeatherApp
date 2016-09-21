import React from 'react';

class ErrInfo extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ErrInfo';
    }
    render() {
    	const errStyle = {
    		height: '200px',
    		paddingTop: '60px',
    		marginTop: '30px',
    		textAlign: 'center',
    		backgroundColor: 'white'
    	}
        return(
        	<div style={errStyle}>
        		<h2>Oooops! Something went wrong while downloading data</h2>
        	</div>
        );
    }
}

export default ErrInfo;
