import PropTypes from 'prop-types';

/**
 * ProductImage component
 * @param {object} param0 properties, contain image source and product name
 * @returns Image
 */
const ProductImage = ({image, name}) => (<img src={image} alt={name} width="200px" />);
ProductImage.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default ProductImage;