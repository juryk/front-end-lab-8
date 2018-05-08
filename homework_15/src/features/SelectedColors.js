import React from 'react';
import SelectedColor from './SelectedColor.js'

export default class SelectedColors extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        const shortenedColorsArr = this.props.selectedColors.slice(-5);

        const selectedIcons = this.props.selectedColors.length ?
            (
                <div>
                    {   shortenedColorsArr.map((el, index) => {
                            return <SelectedColor color={el} key={index} removeSelectedColorById={this.props.removeSelectedColorById} position={index + 5 - shortenedColorsArr.length}/>
                        })
                    }

                </div>
            ) : (<div>
                    <div className="selected-color-default-card purple">
                    </div>
                    <div className="selected-color-default-card blue">
                    </div>
                    <div className="selected-color-default-card grey">
                    </div>
                </div>

            )

        return(
            <div className="selected-colors">
                {selectedIcons}
            </div>

        )
    }
}
