import { useState, useContext } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { InventoryContext } from './InventoryProvider';
import SettingsModal from './SettingsModal';
import InventoryCounter from "./InventoryCounter";
import PropTypes from 'prop-types';
import '../style/inventory.css'

const InventoryInfo = ({productId}) => {
    // Get all products data.
    const { products } = useContext(InventoryContext);
    // Get current product by id.
    const [ product ] = products.filter(_product => _product.productId === productId);
    // Deconstruct product object.
    const { productName, description } = product;
    // Modal open state
    const [ open, setOpen ] = useState(false);
    // Open handle event.
    const handleOpen = () => setOpen(true);
    const toggleOpen = isOpen => setOpen(isOpen);

    return (
        <>
            { open ? <SettingsModal productId={productId} handleOpen={toggleOpen} /> : null}
            <div className='inventory-info d-flex flex-column'>
                <button className='btn-settings ripple' onClick={handleOpen}>
                    <BsThreeDotsVertical />
                </button>
                <div className='d-flex flex-column'>
                    <h2 className='inventory-name'>{productName}</h2>
                    <p className='inventory-description'>{description}</p>
                </div>
                <InventoryCounter productId={productId} />
            </div>
        </>
    );
};
InventoryInfo.propTypes = {
    productId: PropTypes.string.isRequired
};

export default InventoryInfo;