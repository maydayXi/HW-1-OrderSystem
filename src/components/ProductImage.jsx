import PropTypes from 'prop-types';

/**
 * ProductImage component
 * @param {object} param0 properties, contain image source and product name
 * @returns Image
 */
const ProductImage = ({image}) => {
    const imageStyle = {
        background: `url("${image}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "75%",
        minHeight: "150px"
    }

    return (
        <div className='product-image' style={imageStyle}></div>
    );
}
ProductImage.propTypes = {
    image: PropTypes.string.isRequired,
};

export default ProductImage;