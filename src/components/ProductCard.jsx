import PropTypes from 'prop-types';
import { useState } from 'react';

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

const ProductInfo = ({name, description, price, inventory}) => {
    const [count, setCount] = useState(inventory);

    const plusHandler = () => setCount(count + 1),
        subHandler = () => count > 0 
            ? setCount(count - 1)
            : setCount(0);

    return (
        <div className='product-info d-flex flex-column'>
            <div className='d-flex flex-column'>
                <h2 className='product-name'>{name}</h2>
                <p className='product-description'>{description}</p>
            </div>
            <div className='d-flex column-gap'>
                <p>${price}</p>
                <button onClick={subHandler}>-</button>
                <p>{count}</p>
                <button onClick={plusHandler}>+</button>
            </div>
        </div>
    );
};
ProductInfo.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
};

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