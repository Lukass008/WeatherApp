import React from 'react';
import BtnSearch from './BtnSearch';
import Listbox from './Listbox';

// component with listbox and button to show a weather
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Search';
        this.state = {
            error: false,
            zip: null
        }
    }

    setZipCode(zip) {
        this.setState({zip});
        this.setState({error: false});
    }

    initialize() {
        //check if any position from listbox is
        if(this.state.zip) {
            const zipCode = this.state.zip;
            return this.props.initialize(this.state.zip);
        } else {
            //if no position choosen set error statement
            this.setState({error: 'noChecked'});
        }
    }

    render() {
        //define all styles
        const searchBoxStyle = {
            width: '100%',
            backgroundColor: 'white',
            marginTop: '30px',
            padding: '15px',
            fontSize: '1.2em',
            textAlign: 'center'
        }
        const whiteHeaderStyle = {
            fontWeight: 500,
            fontSize: '1.3em'
        }
        const errorStyle = {
            color: 'red',
            fontWeight: '500',
            marginBottom: '5px',
            fontSize: '0.9em'
        }

        return (
        	<div className='row'>
        		<div className='col-md-12'>
	        		<div style={searchBoxStyle}>
		        		<p style={whiteHeaderStyle}>Select a city to show weather</p>
						<Listbox setZipCode={this.setZipCode.bind(this)} />
                        {this.state.error ? <span style={errorStyle}>You must select a city<br/></span> : null}
                        <BtnSearch initialize={this.initialize.bind(this)} />                        
					</div>
        		</div>
        	</div>
        );
    }
}

export default Search;
	
