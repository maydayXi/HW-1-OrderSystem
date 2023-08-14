import { useState } from 'react';
import PropTypes from 'prop-types';
import InventoryCounter from "./InventoryCounter";
import { BsThreeDotsVertical } from 'react-icons/bs';
import SettingsModal from './SettingsModal';

const ProductInfo = ({name, description, price, inventory}) => {
    const [isOpen, setIsOpen] = useState(false),
        [_name, setName] = useState(name),
        [_description, setDescription] = useState(description),
        [_price, setPrice] = useState(price),
        [_inventory, setInventory] = useState(inventory);

    const modalProps = {
        isOpen,
        name: _name,
        description: _description,
        price: _price,
        inventory: _inventory,
        openHandler: open => setIsOpen(open), 
        nameHandler: productName => setName(productName),
        descriptionHandler: productDescription => setDescription(productDescription),
        priceHandler: productPrice => setPrice(productPrice),
        inventoryHandler: productInventory => setInventory(productInventory)
    };

    const counterProps = {
        price: _price,
        inventory: _inventory,
        inventoryHandler: productInventory => setInventory(productInventory)
    };

    return (
        <>
            <SettingsModal {...modalProps} />
            <div className='product-info d-flex flex-column'>
                <button className='btn-settings ripple' onClick={() => setIsOpen(true)}>
                    <BsThreeDotsVertical />
                </button>
                <div className='d-flex flex-column'>
                    <h2 className='product-name'>{_name}</h2>
                    <p className='product-description'>{_description}</p>
                </div>
                <InventoryCounter {...counterProps} />
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