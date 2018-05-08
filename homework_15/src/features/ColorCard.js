import React from 'react';

export default class ColorCard extends React.Component {

    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    //this function gets color id and calls selectColorById from main App component
    clickHandler(event){
        let id;
        if(event.target.parentNode.nodeName == "BUTTON"){
            id = event.target.parentNode.parentNode.id;
        } else if(event.target.parentNode.nodeName == "DIV") {
            id = event.target.parentNode.id;
        }
        this.props.selectColorById(id);
    }

    render() {

        let backgroundStyle = {
            background: this.props.color.color
        }

        return(
            <div className="card" style={backgroundStyle} id={this.props.index}>
            <button onClick={this.clickHandler}><i className="material-icons">add</i><span>Add</span></button>
            </div>
        );
    }
}
