import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsPlus, BsDash } from 'react-icons/bs';

const InventoryButton = ({className, clickHandler, children}) => {
    return (
        <button className={className} onClick={clickHandler}>
            {children}
        </button>
    );
};
InventoryButton.propTypes = {
    className: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
};

const InventoryCounter = ({price, inventory}) => {
    const [count, setCount] = useState(inventory);

    const plusHandler = () => setCount(count + 1),
        subHandler = () => count > 0 
            ? setCount(count - 1)
            : setCount(0);

    return (
        <div className='inventory-counter d-flex column-gap'>
            <h2>${price}</h2>
            <InventoryButton className="btn-sub" clickHandler={subHandler}>
                <BsDash />
            </InventoryButton>
            <h2>{count}</h2>
            <InventoryButton className="btn-plus" clickHandler={plusHandler}>
                <BsPlus />
            </InventoryButton>
        </div>
    );
};
InventoryCounter.propTypes = {
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
};

export default InventoryCounter;