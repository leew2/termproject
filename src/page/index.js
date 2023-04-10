/**
 *  Wang Lee
 *  Created 4/02/2023
 *
 */

import React, {Component} from 'react';
import './cssLib/index.css';

function MainPage(){
    return (
        <>
            <div className={'body'}>
                <Welcome />
            </div>
        </>
    );
};
export default MainPage;

/**----------------------------------------------------------------------------------------------
 *
 */
class Welcome extends Component {
    constructor(props) {
        super();
        this.state = {
            message:'Welcome To My Concordia Page'
        }
    }
    render() {

        return (
            <div>
                {/**  Passing State to Child  */}
                <MessageDisplay welcome={this.state.message} />
            </div>
        );
    }
}
class MessageDisplay extends Component {
    render() {
        return <h2 className={'welcome'}>{this.props.welcome}</h2>;
    }
}

/**-----------------------------------------------------------------------------------------
 *
 */