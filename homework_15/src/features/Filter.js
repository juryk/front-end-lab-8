import React from 'react';

export default class Filter extends React.Component {

    //this function sets focus on filter input
    componentDidMount() {
        let filterInput = document.querySelector('.filter');
        filterInput.focus();
    }

    //this function gets value from input and calls setSearchValue from main App component
    searchHandler(event) {
        this.props.setSearchValue(event.target.value.toLowerCase());
    }

    render() {
        return(
            <input type="text" placeholder="Color's name, tags" className="filter" onChange={this.searchHandler.bind(this)}/>
        );
    }
}
