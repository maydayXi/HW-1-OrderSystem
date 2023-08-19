import { useContext } from 'react';
import PropTypes from 'prop-types';
import { InventoryContext } from './InventoryProvider';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const ProductCard = ({id}) => {
    // Get products data.
    const { products } = useContext(InventoryContext);
    // Get current product.
    const [ product ] = products.filter(_product => _product.id == id);
    // deconstruct product image.
    const { image } = product;

    return (
        <div className='product-card d-flex column-gap'>
            <ProductImage image={image} />
            <ProductInfo id={id} />
        </div>
    );
};
ProductCard.propTypes = {
    id: PropTypes.number.isRequired
};

export default ProductCard;