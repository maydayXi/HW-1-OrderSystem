import { useState, useContext } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { InventoryContext } from './InventoryProvider';
import SettingsModal from './SettingsModal';
import InventoryCounter from "./InventoryCounter";
import PropTypes from 'prop-types';

const ProductInfo = ({id}) => {
    // Get all products data.
    const { products } = useContext(InventoryContext);
    // Get current product by id.
    const [ product ] = products.filter(_product => _product.id === id);
    // deconstruct product object.
    const { name, description, price, inventory } = product;

    const [ open, setOpen ] = useState(false),
        [_name, setName] = useState(name),
        [_description, setDescription] = useState(description),
        [_price, setPrice] = useState(price),
        [_inventory, setInventory] = useState(inventory);

    const modalProps = {
        name: _name,
        description: _description,
        price: _price,
        inventory: _inventory,
        handleOpen: open => setOpen(open), 
        handleName: productName => setName(productName),
        handleDescription: productDescription => setDescription(productDescription),
        handlePrice: productPrice => setPrice(productPrice),
        handleInventory: productInventory => setInventory(productInventory)
    };

    const handleOpen = () => setOpen(true);

    return (
        <>
            { open ? <SettingsModal {...modalProps} id={id} /> : null}
            <div className='product-info d-flex flex-column'>
                <button className='btn-settings ripple' onClick={handleOpen}>
                    <BsThreeDotsVertical />
                </button>
                <div className='d-flex flex-column'>
                    <h2 className='product-name'>{name}</h2>
                    <p className='product-description'>{description}</p>
                </div>
                <InventoryCounter id={id} />
            </div>
        </>
    );
};
ProductInfo.propTypes = {
    id: PropTypes.number.isRequired
};

export default ProductInfo;