/**
 * Reference:
 * https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/#
 * https://www.w3schools.com/react/react_router.asp
 *
 */

/**
 *  Wang Lee
 *  Created 3/26/2026
 *  Altered 4/9/2023
 */



import './App.css';
import "./page/cssLib/Layout.css";
import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import MainPage from "./page";
import StorePage from "./page/store";
import CreateAccountPage from "./page/createAccount";
import ItemPage from "./page/item";

function Layout() {
    return (
        <>
            <header className={'headerCSS'}>
                <h2 style={{height: 50 + "px"}}>Concordia University, St Paul</h2>
                <div className={'nav-row'}>
                    <Link className={'nav-link'} to={'/'} > Home </Link>
                    <Link className={'nav-link'} to={'/store'} > Store </Link>

                    <Link className={'nav-link'} to={'/item'} > Item </Link>

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

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/store" element={<StorePage />} />
                    <Route path={"/item"} element={<ItemPage />} />
                    <Route path="/createAccount" element={<CreateAccountPage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}