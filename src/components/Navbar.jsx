import { BsBell } from 'react-icons/bs';
import AppLogo from '../assets/logo.svg'
import User from '../assets/user_icon.svg';
import '../style/navbar.css'

const Navbar = () => {
    const bellStyle = {
        transform: "scale(2)",
        marginRight: "3rem"
    };

    return (
        <nav className="d-flex" id="appNav">
            <div className="app-logo d-flex column-gap">
                <img src={AppLogo} width={48} height={48} alt="logo" />
                <h1>六角茶</h1>
            </div>
            <div className="app-user d-flex">
                <BsBell style={bellStyle} />
                <img src={User} width={48} height={48} alt="user" />
            </div>
        </nav>
    )
};

export default Navbar;