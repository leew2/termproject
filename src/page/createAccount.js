/**
 *  Wang Lee
 *  Created 4/02/2023
 *
 */

import React from 'react';
import "./createAccount.css";

export default function CreateAccountPage() {
    return (
        <>
            <SighUpForm />
        </>
    );
};
function SighUpForm(){
    return (
        <>  {/** This is passing from child to child, since we can call for a form or individual label/input*/}
            <form className="userForm">
                <UserInput display={"First Name"} name={"fName"} />
                <UserInput display={"Last Name"} name={"lName"} />
                <UserInput display={"Email"} name={"userEmail"} />
                <UserInput display={"Password"} name={"userPassword"} />
                <SubmitBtn />
            </form>
        </>
    );
};
/**
 *  This is example of passing parents to child using function
 */
export function UserInput({display}, {name}){
    return (
        <>
            <div className="input">
                <label htmlFor={name}> {display} </label>
                <br/>
                <input type="text" id={name} name={name}></input>
            </div>
        </>
    );
};
function SubmitBtn() {
    return(
        <div className="submitbtn" ><button>Submit</button></div>
    );
};
