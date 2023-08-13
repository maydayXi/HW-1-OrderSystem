import PropTypes from 'prop-types';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const ProductCard = ({image, name, ...rest}) => {
    const info = {name, ...rest};
    return (
        <div className='product-card d-flex column-gap'>
            <ProductImage image={image} name={name} />
            <ProductInfo {...info} />
        </div>
    );
};
ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default ProductCard;