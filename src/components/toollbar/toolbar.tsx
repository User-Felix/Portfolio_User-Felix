import './toolbar.css'

export default function Toolbar() {
    return(
        <header>
            <div id="content-logo">
                <p>oi_sou_felix</p>
            </div>
            
            <nav>
                <ul>
                    <li>
                        <a>
                            Home
                        </a>
                    </li>
                    <li>
                        <a>
                            About
                        </a>
                    </li>
                    <li>
                        <a>
                            Skills
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}