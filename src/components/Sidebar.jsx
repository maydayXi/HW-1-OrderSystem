import { BsListCheck } from 'react-icons/bs';
import { FaWarehouse } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import '../style/sidebar.css'

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

    const { pathname } = useLocation();
    const href = pathname.split("/")[1];

    return (
        <div id="sidebar" className={className}>
            {sidebarItem.map((item, i) => 
                (<Link key={i} to={item.href} className={"sidebar-item d-flex column-gap"
                    .concat(item.href.endsWith(href) ? " active" : "")} >
                    {item.icon}<span className='sidebar-text'>{item.text}</span>
                </Link>)
            )}
        </div>
    )
};

Sidebar.propTypes = {
    open: PropTypes.bool.isRequired,
};

export default Sidebar;