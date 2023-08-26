import PropTypes from 'prop-types';
import { BsStarFill } from 'react-icons/bs';
import ProductImage from "./ProductImage";
import '../style/menu.css'


const MenuCard = ({product}) => {
    const { image, productName, price, rating } = product;

    return (
        <div className="menu-card d-flex flex-column">
            <ProductImage image={image} />
            <h3 className='product-name'>{productName}</h3>
            <h5 className='product-rating d-flex'><BsStarFill style={{color: "#f77539"}}/> {rating}</h5>
            <div className="d-flex column-gap">
                <div>
                    <p>Price</p>
                    $ {price}
                </div>
                <div className="divide"></div>
                <div>
                    <p>Size</p>
                    L / M
                </div>
                <div className="divide"></div>
                <div>
                    <p>Type</p>
                    H / I
                </div>
            </div>
        </div>
    );
};

MenuCard.propTypes ={
    product: PropTypes.object.isRequired
};

export default MenuCard;