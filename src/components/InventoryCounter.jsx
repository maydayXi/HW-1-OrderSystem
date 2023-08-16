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

const InventoryCounter = ({price, inventory, handleInventory}) => {
    const plusHandler = () => handleInventory(inventory + 1),
        subHandler = () => inventory > 0 
            ? handleInventory(inventory - 1)
            : handleInventory(0);

    return (
        <div className='inventory-counter d-flex column-gap'>
            <h2>${price}</h2>
            <InventoryButton className="btn-sub ripple" clickHandler={subHandler}>
                <BsDash />
            </InventoryButton>
            <h2>{inventory}</h2>
            <InventoryButton className="btn-plus ripple" clickHandler={plusHandler}>
                <BsPlus />
            </InventoryButton>
        </div>
    );
};
InventoryCounter.propTypes = {
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    handleInventory: PropTypes.func.isRequired
};

export default InventoryCounter;