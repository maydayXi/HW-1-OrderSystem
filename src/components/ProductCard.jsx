import { useContext } from 'react';
import PropTypes from 'prop-types';
import { InventoryContext } from './InventoryProvider';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const ProductCard = ({productId}) => {
    // Get products data.
    const { products } = useContext(InventoryContext);
    // Get current product.
    const [ product ] = products.filter(_product => _product.productId == productId);
    // deconstruct product image.
    const { image } = product;

    return (
        <div className='product-card d-flex column-gap'>
            <ProductImage image={image} />
            <ProductInfo productId={productId} />
        </div>
    );
};
ProductCard.propTypes = {
    productId: PropTypes.string.isRequired
};

export default ProductCard;