import React from 'react';
class BtnSearch extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'BtnSearch';
    }

    searchByZip() {
        return this.props.initialize();
    }
    render() {
        const btnStyle = {
            marginTop: '10px'
        }
        
        return <button style={btnStyle} class='btn btn-default' onClick={this.searchByZip.bind(this)}>Show weather</button>;
    }
}

export default BtnSearch;
