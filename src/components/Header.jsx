import React from 'react'
import { Link } from "react-router-dom";
import './Header.css';  // CSSファイルをインポート
import logoImage from '../Images/lud7n.logo_0815.png'; // ロゴ画像のパスを適切に設定してください

const Header = () => {
    return (
        <header className="header">
            <div className='logo'>
                <img src={logoImage} alt="lud7n.site Logo" className="logo-image" />
                <h3><nav><ul><li><Link to="/">lud7n.site</Link></li></ul></nav></h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header