import React from 'react';

export default function AmountOfColorItems(props) {
    return (
        <div className="colors-amount">
            <p>
                Colors: {props.amount}
            </p>
        </div>

    )
}
