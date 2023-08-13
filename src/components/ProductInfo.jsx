import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsPlus, BsDash } from 'react-icons/bs';

const InventoryCounter = ({price, inventory}) => {
    const [count, setCount] = useState(inventory);

    const plusHandler = () => setCount(count + 1),
        subHandler = () => count > 0 
            ? setCount(count - 1)
            : setCount(0);

    return (
        <div className='inventory-counter d-flex column-gap'>
            <h2>${price}</h2>
            <button className='btn-sub' onClick={subHandler}>
                <BsDash />
            </button>
            <h2>{count}</h2>
            <button className='btn-plus' onClick={plusHandler}>
                <BsPlus />
            </button>
        </div>
    );
};
InventoryCounter.propTypes = {
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
};

const ProductInfo = ({name, description, ...counter}) => {
    return (
        <div className='product-info d-flex flex-column'>
            <div className='d-flex flex-column'>
                <h2 className='product-name'>{name}</h2>
                <p className='product-description'>{description}</p>
            </div>
            <InventoryCounter {...counter} />
        </div>
    );
};
ProductInfo.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
};

export default ProductInfo;