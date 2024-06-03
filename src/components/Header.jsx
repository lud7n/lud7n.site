import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <h3><nav><ul><li><Link to="/">lud7n.site</Link></li></ul></nav></h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/blog">blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header