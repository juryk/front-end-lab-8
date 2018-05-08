import React from 'react';

export default class SelectedColor extends React.Component{

    constructor(props){
        super(props);
        this.handleClearClick = this.handleClearClick.bind(this);
    }

    //this function gets id of selectedColors and calls removeSelectedColorById method
    handleClearClick(event) {
        this.props.removeSelectedColorById(event.target.parentNode.id);
    }

    render() {

        let divStyle = {
            "background": this.props.color.color,
            "borderColor": this.props.color.color
        }

        return(
            <div className={`selected-color-card p${this.props.position}`} style={divStyle} id={this.props.color.id}><i className="material-icons" onClick={this.handleClearClick}>&#xE14C;</i></div>
        )
    }
}
