import bplogo from '../img/bplogo.png';
import { Link } from "react-router-dom";
import { useState } from 'react';

// style
import '../style/header.css';

const Header = () => {

    const [menu, setMenu] = useState(0);

    const toggleMenu = () => {
        setMenu( (menu)=>!menu );
    }

    return (
        <header>
            <Link to="/" style={{ textDecoration: 'none' }}>2048</Link>
            <div className="menu">
                <div className="graph">
                    <span>랭킹</span>
                </div>
                <div className="mypage">
                    <span>마이 페이지</span>
                </div>
            
                <button class={ menu ? "active" : "menu-trigger" } onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>

    )
}

export default Header;