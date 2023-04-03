/**
 *  Wang Lee
 *  Created 4/02/2023
 *
 */

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/store">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/createAccount">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;