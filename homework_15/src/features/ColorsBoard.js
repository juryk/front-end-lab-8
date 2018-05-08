import React from 'react';
import ColorCard from './ColorCard.js';

export default class ColorsBoard extends React.Component {

    render() {
        return(
            <div className="color-board">
                {
                    this.props.colors.length ?
                        this.props.colors.map((el, index) => {return <ColorCard key={index} color={el} index={el.id} selectColorById={this.props.selectColorById}/>})
                                                : <p> There are no colors found </p>
                }
            </div>
        );
    }
}
