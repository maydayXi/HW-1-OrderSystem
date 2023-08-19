import PropTypes from 'prop-types';
import { useContext } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs';
import { InventoryContext } from './InventoryProvider';

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

const InventoryCounter = ({id}) => {
    // Get products data and update function.
    const { products, updateProduct } = useContext(InventoryContext);
    // Get current product data.
    const [ product ] = products.filter(_product => _product.id === id);
    // Deconstruct product price and name.
    const { price, inventory } = product;

    const handlePlus = () => {
        updateProduct(id, {
            ...product,
            inventory: inventory + 1
        });
    };

    const handleSub = () => {
        updateProduct(id, {
            ...product,
            inventory: inventory - 1 > 0 ? inventory - 1 : 0
        });
    };

    return (
        <div className='inventory-counter d-flex column-gap'>
            <h2>${price}</h2>
            <InventoryButton className="btn-sub ripple" clickHandler={handleSub}>
                <BsDash />
            </InventoryButton>
            <h2>{inventory}</h2>
            <InventoryButton className="btn-plus ripple" clickHandler={handlePlus}>
                <BsPlus />
            </InventoryButton>
        </div>
    );
};
InventoryCounter.propTypes = {
    id: PropTypes.number.isRequired
};

export default InventoryCounter;