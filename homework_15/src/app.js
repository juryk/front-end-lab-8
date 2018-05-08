import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';
import Filter from './features/Filter.js';
import ColorsBoard from './features/ColorsBoard.js';
import AmountOfColorItems from './features/AmountOfColorItems.js';
import SelectedColors from './features/SelectedColors.js'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            colors: [],
            searchString: "",
            selectedColors: []
        };
        this.setSearchValue = this.setSearchValue.bind(this);
        this.selectColorById = this.selectColorById.bind(this);
        this.removeSelectedColorById = this.removeSelectedColorById.bind(this);
    }

    //this function is calling in Filter component and it sets state with searchString
    setSearchValue(searchString){
        this.setState({searchString: searchString});
    }

    //function is calling in ColorCard component and it removes color by id from colors state and concat it to selectedColors array in state
    selectColorById(colorId){
        if(this.state.selectedColors.length < 10){
            let array = this.state.colors;
            for(let i = 0; i < array.length; i++){
                if(array[i].id == colorId){
                    let index = array.indexOf(array[i]);
                    let selected = array.splice(index, 1);
                    this.setState(
                        {
                            colors: array,
                            selectedColors: this.state.selectedColors.concat(selected)
                        });
                    break;
                }
            }
        }
    }

    //function is calling in SelectedColor component and it removes selected color by id from selected colors array and concat it to colors array in state
    removeSelectedColorById(colorId){
        let array = this.state.selectedColors;
        for(let i = 0; i < array.length; i++){
            if(array[i].id == colorId){
                let index = array.indexOf(array[i]);
                let selected = array.splice(index, 1);
                this.setState(
                    {
                        selectedColors: array,
                        colors: this.state.colors.concat(selected)
                    });
                break;
            }
        }
    }

    //this method get array of colors
    componentDidMount() {
        fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        colors: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        }

    render() {

        const { error, isLoaded, items } = this.state;

            var filteredColors = this.state.colors.filter(
                (color) => {
                    let filtered;
                    for(let i = 0; i < color.tags.length; i++){
                        if(color.tags[i].indexOf(this.state.searchString) !== -1){
                            filtered = true;
                            break;
                        } else {
                            filtered = false;
                        }
                    }
                    return filtered;
                }
            ).sort((a, b) => {
                return a.id - b.id;
            })

        return (
            <div>
                <Filter setSearchValue={this.setSearchValue}/>
                <SelectedColors selectedColors={this.state.selectedColors} removeSelectedColorById={this.removeSelectedColorById}/>
                <AmountOfColorItems amount={filteredColors.length} />

                { !isLoaded ? <p style={{"textAlign": "center"}}>Loading...</p> : <ColorsBoard colors={filteredColors} selectColorById={this.selectColorById}/>}
            </div>
        );
    }
}

export default hot(module)(App);
