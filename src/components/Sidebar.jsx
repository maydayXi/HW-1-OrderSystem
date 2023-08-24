import { BsListCheck } from 'react-icons/bs';
import { FaWarehouse } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../style/sidebar.css'

const sidebarItem = [
    {
        text: "庫存管理",
        icon: <FaWarehouse />
    },
    {
        text: "訂單管理",
        icon: <BsListCheck />
    }
]

const Sidebar = ({open}) => {
    const className = "d-flex flex-column row-gap"
        .concat(open ? " open" : "");

    return (
        <div id="sidebar" className={className}>
            {sidebarItem.map((item, i) => 
                (<a key={i} className="sidebar-item d-flex column-gap">
                    {item.icon}<span className='sidebar-text'>{item.text}</span>
                </a>)
            )}
        </div>
    )
};

Sidebar.propTypes = {
    open: PropTypes.bool.isRequired
};

export default Sidebar;