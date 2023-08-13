import PropTypes from 'prop-types';
import InventoryCounter from "./InventoryCounter";
import { BsThreeDotsVertical } from 'react-icons/bs';

const ProductInfo = ({name, description, ...counter}) => {
    return (
        <div className='product-info d-flex flex-column'>
            <button className='btn-settings ripple'>
                <BsThreeDotsVertical />
            </button>
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