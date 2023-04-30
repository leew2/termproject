/**
 *  Wang Lee
 *  Created 4/02/2023
 *  Altered 4/29/2023
 */

import React, {Component, useState} from 'react';
import './cssLib/store.css';
import logo from "./img/cspbook.png";
function StorePage() {
    return (
        <>
            <div className={'item-display'}>
                <div className={'search-area'}>
                    <Search />
                </div>
                <div>
                    <div className={'item'}>
                        <img src={logo} className={'item-image'} alt={"Book with white background titled C S P book by author"}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default StorePage;

/**
 *  Event Handling, Via Button
 */
class Search extends Component{

    constructor(props) {
        super(props);
        this.state={
            isSearching: false,
            isEnter: false
        }
    }

    toggleSearch = () => {
        this.setState(state => ({isSearching: !state.isSearching}))
    };
    render(){
        const greeting = "Searched Results"
        return(
            <div>
                <SearchBar />
                <button onClick={this.toggleSearch} type={"button"}> Click Me</button>
                {this.state.isSearching? <Greeting greeting={greeting}/>:null}

            </div>
        )
    }
}
class Greeting extends Component{
        render() {
            return <h1>{this.props.greeting}</h1>
        }
}

/** --------------------------------------------------------------------
 *  Event Handling via Button press and 'enter' key detect
 */

const SearchBar = () => {
    const [state, setState] = useState('');

    const handler = (event) => {
        // changing the state to the name of the key
        // which is pressed

        if (event.key === "Enter"){
            setState("Searched Result")
        }
    };
    return (
        <div>
            {/* Passing the key pressed to the handler function */}
            <label htmlFor={'searchBar'} >Searchbar </label>
            <input type="text" id={'searchBar'} className={'searchBar'} onKeyPress={(e) => handler(e)} />
            <p>{state}</p>
        </div>
    );
};

