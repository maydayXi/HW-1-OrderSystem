import { BsListCheck } from 'react-icons/bs';
import { FaWarehouse } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../style/sidebar.css'
import { Link } from 'react-router-dom';

const sidebarItem = [
    {
        text: "庫存管理",
        icon: <FaWarehouse />,
        href: "/inventory"
    },
    {
        text: "訂單管理",
        icon: <BsListCheck />,
        href: "/orders"
    }
]

const Sidebar = ({open}) => {
    const className = "d-flex flex-column row-gap"
        .concat(open ? " open" : "");

    return (
        <div id="sidebar" className={className}>
            {sidebarItem.map((item, i) => 
                (<Link key={i} to={item.href} className="sidebar-item d-flex column-gap">
                    {item.icon}<span className='sidebar-text'>{item.text}</span>
                </Link>)
            )}
        </div>
    )
};

Sidebar.propTypes = {
    open: PropTypes.bool.isRequired
};

export default Sidebar;