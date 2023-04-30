/**
 *  Wang Lee
 *  Created 4/02/2023
 *
 */

import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header className={'headerCSS'}>
                <h2 style={{height: 50 + "px"}}>Concordia University, St Paul</h2>
                <div className={'nav-row'}>
                    <Link className={'nav-link'} to={'/'} > Home </Link>
                    <Link className={'nav-link'} to={'/store'} > Store </Link>

                    <Link className={'nav-link'} to={'/item'} > Item </Link>
                    <Link className={'nav-link'} to={'/itemAmount'} > Item Amount</Link>
                    <Link className={'nav-link'} to={'/createAccount'} > Create Account </Link>

                </div>
            </header>
            <Outlet />
        </>
    );
}
function NoPage() {
    return null;
}