/**
 *  Wang Lee
 *  Created 4/15/2023
 *  Altered 4/29/2023
 */

import React, {useState, useEffect, useContext, Component} from "react";
import {createStore} from 'redux'
import logo from './img/cspbook.png'
import './cssLib/itemAmount.css';
import './cssLib/store.css'

function amountCounter(state = {value: 20}, action){
    switch (action.type){
        case 'add':
            return {value:state.value + 1}
        case 'sub':
            return {value:state.value - 0}
        default:
            return state
    }
}

let store = createStore(amountCounter)
store.subscribe(()=>console.log(store.getState()))



export default function ItemAmount(){
    /** useEffect to connect / pass information to external library, such as Redux */
    /** useContext to read and update product */
    return<>
        <div className={'body'}>
            <Amount />
        </div>
    </>
}


function Amount(){
    const [count, setCount] = useState(1);
    function add(){
        if(count < store.getState().value){
            setCount(count+1)
        }
    }
    function sub() {
        if(count > 0){
            setCount(count-1)
        }
    }
    const total = useContext(store.getState().value);
    useEffect(() => {
        const currentTotal = total;
        return () => total - count
    },[count]
    )
    class AmountTaken extends Component{
        constructor(props) {
            super(props);
            this.state={
                userAmount: '',
                isSearching: false,
            }
        }
        toggleSearch = () => {
            this.setState(state => ({isSearching: !state.isSearching}))
        };
        render(){
            const totalAmount = store.getState().value - count
            return(
                <>
                    <button onClick={this.toggleSearch}>Submit</button>
                    <br/>
                    <div className={'user-inform'}>
                        {this.state.isSearching? "   There Are "+totalAmount + " amount Remaining":null}
                    </div>

                </>
            )
        }

    }
    return<>
        <div className={'item-display'}>
            <img src={logo} alt={'image of book with C S P written on it'}/>
            <p> Amount in Store: {store.getState().value}</p>
            <p> Amount you want: {count}</p>
        </div>


        <div className={'button-display'}>
            <button onClick={()=> add()} >+</button>
            <button onClick={()=> sub()} >-</button>
            <br/>
            <AmountTaken />
        </div>



    </>

}