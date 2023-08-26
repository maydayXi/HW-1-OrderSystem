import { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import AppLogo from '../assets/logo.svg'
import User from '../assets/user_icon.svg';
import Sidebar from './Sidebar';
import '../style/navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const bellStyle = {
        transform: "scale(1.5)",
        marginRight: "2.5rem"
    };

    const toggleSidebar = () => setOpen(!open);

    return (
        <>
            <nav className="d-flex" id="appNav">
                <div className="app-logo d-flex column-gap" onClick={toggleSidebar}>
                    <img src={AppLogo} width={48} height={48} alt="logo" />
                    <h1>六角茶</h1>
                </div>
                <div className="app-user d-flex">
                    <BsBell style={bellStyle} />
                    <img src={User} width={32} height={32} alt="user" />
                </div>
            </nav>
            <Sidebar open={open} handleClick={() => setOpen(false)} />
        </>
    )
};

export default Navbar;