import { useState } from 'react';
import { Link } from 'react-router-dom';
import './toolbar.css';

export default function Toolbar(): React.ReactElement {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div id="content-logo">
                <Link id="logo" to="/">
                    User_Felix
                </Link>
            </div>
            
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={isMenuOpen ? 'active' : ''}>
                <ul>
                    <li>
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/About" onClick={() => setIsMenuOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/Skills" onClick={() => setIsMenuOpen(false)}>
                            Skills
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}