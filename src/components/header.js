import bplogo from '../img/bplogo.png';

// style
import '../style/header.css';

const Header = () => {
    return(
        <header>
            <img src={bplogo} alt="bplogo"></img>
        </header>
    )
}

export default Header;