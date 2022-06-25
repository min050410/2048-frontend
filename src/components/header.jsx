import { Link } from "react-router-dom";
import { useState } from 'react';

// style
import '../style/header.css';

const Header = () => {

    const [menu, setMenu] = useState(0);

    const toggleMenu = () => {
        setMenu((menu) => !menu);
    }

    return (
        <header>
            <Link to="/" style={{ textDecoration: 'none' }}><span className="logo">2048</span></Link>
            <div className="menu">
                <Link to="/ranking" style={{ textDecoration: 'none' }}>
                    <div className="ranking">
                        <span>랭킹</span>
                    </div>
                </Link>

                <div className="mypage">
                    <a href="https://github.com/min050410/2048-frontend" style={{ textDecoration: 'none' }}><span>Github</span></a>
                </div>

                {/* <button className={menu ? "active" : "menu-trigger"} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button> */}
            </div>
        </header>

    )
}

export default Header;