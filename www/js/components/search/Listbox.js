import React from 'react';
import classNames from 'classnames';

class Listbox extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Listbox';
        this.citiesList = [{zip: 10007, name: 'New York'}, {zip: 33130, name: 'Miami'}, {zip: 94103, name: 'San Francisco'}];
        this.activeClass = [];
        this.state = {
            zipCode: null
        }
    }
    //set state.zipCode after active and run props function
    selectCity(zipCode) {
        this.setState({zipCode});
        return this.props.setZipCode(zipCode);
    }

    //create an array telling which item is active (by zipCode stored in state)
    createActiveClassArr() {
        if(this.state.zipCode) {
            this.citiesList.map((city, index) => {
                if(city.zip == this.state.zipCode) {
                    this.activeClass[city.zip] = 'active';
                } else {
                    this.activeClass[city.zip] = '';
                }   
            })
        }    
    }

    render() {
        this.createActiveClassArr()

        const listboxStyle = {
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '10px'
        }

        return (
        	<div style={listboxStyle} className="list-group">
                {this.citiesList.map((city) => {
                    const itemClass = (this.activeClass.length > 0) ? classNames('list-group-item', this.activeClass[city.zip]) : 'list-group-item';
                    return <a href="#" className={itemClass} onClick={() => this.selectCity(city.zip)} key={city.zip} >{ city.name }</a>
                })}
			</div>
        );
    }
}

export default Listbox;
