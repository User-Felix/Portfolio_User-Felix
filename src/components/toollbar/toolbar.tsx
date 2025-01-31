import React from 'react';
import { Link } from 'react-router-dom';
import './toolbar.css';


export default function Toolbar(): React.ReactElement {
    return(
        <header>
            <div id="content-logo">
                <Link id='logo' to="/">
                    oi_sou_felix
                </Link>
            </div>
            
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/About">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/Skills">
                            Skills
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};