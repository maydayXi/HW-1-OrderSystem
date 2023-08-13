import { useState } from 'react';
import PropTypes from 'prop-types';
import InventoryCounter from "./InventoryCounter";
import { BsThreeDotsVertical } from 'react-icons/bs';
import SettingsModal from './SettingsModal';

const ProductInfo = ({name, description, ...counter}) => {
    const [isOpen, setIsOpen] = useState(false);
    const openHandler = () => setIsOpen(true);

    const props = {
        isOpen,
        name,
        description,
        ...counter,
        setIsOpen
    };

    return (
        <>
            <SettingsModal {...props} />
            <div className='product-info d-flex flex-column'>
                <button className='btn-settings ripple' onClick={openHandler}>
                    <BsThreeDotsVertical />
                </button>
                <div className='d-flex flex-column'>
                    <h2 className='product-name'>{name}</h2>
                    <p className='product-description'>{description}</p>
                </div>
                <InventoryCounter {...counter} />
            </div>
        </>
    );
};
ProductInfo.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
};

export default ProductInfo;