import PropTypes from 'prop-types';
import { useContext } from 'react';
import { InventoryContext } from '../App';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const ProductCard = ({id}) => {
    const { products } = useContext(InventoryContext);
    const [ product ] = products.filter(_product => _product.id == id);
    const { image, ...info } = product;

    return (
        <div className='product-card d-flex column-gap'>
            <ProductImage image={image} />
            <ProductInfo {...info} />
        </div>
    );
};
ProductCard.propTypes = {
    id: PropTypes.number.isRequired
};

export default ProductCard;