import { useContext } from 'react';
import PropTypes from 'prop-types';
import { InventoryContext } from './InventoryProvider';
import ProductImage from './ProductImage';
import InventoryInfo from './InventoryInfo';

const InventoryCard = ({productId}) => {
    // Get products data.
    const { products } = useContext(InventoryContext);
    // Get current product.
    const [ product ] = products.filter(_product => _product.productId == productId);
    // deconstruct product image.
    const { image } = product;

    return (
        <div className='inventory-card d-flex column-gap'>
            <ProductImage image={image} />
            <InventoryInfo productId={productId} />
        </div>
    );
};
InventoryCard.propTypes = {
    productId: PropTypes.string.isRequired
};

export default InventoryCard;