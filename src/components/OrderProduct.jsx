import { useState, useContext, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { OrderContext } from "./OrderProvider";
import PropTypes from 'prop-types';

const drinkType = [
    "正常", "少冰", "微冰", "去冰", "溫", "熱"
];
// const drinkSize = [
//     "大", "中"
// ]


/**
 * 下拉元件
 * @param {object} param0 dropdown content
 * @returns Dropdown 
 */
const Dropdown = ({content, changeType}) => {
    const [ value, setValue ] = useState(0);

    useEffect(() => {
        changeType(value);
    }, [value, changeType]);

    const handleChange = e => setValue(Number(e.target.value));

    return (
        <select onChange={handleChange} value={value}>
            {content.map((item, i) => <option key={i} value={i}>{item}</option>)}
        </select>
    );
};
Dropdown.propTypes = {
    content: PropTypes.array.isRequired,
    changeType: PropTypes.func.isRequired
};


/**
 * 產品項目元件
 * @param {object} param0 contain product id and handle click 
 * @returns Product item list
 */
const ProductItem = ({productId, addItem}) => {
    const { products } = useContext(OrderContext);
    const [ product ] = products.filter(_product => _product.productId === productId);
    const { productName, price } = product;

    const [ type, setType ] = useState(0);
    const changeType = newType => setType(newType);

    const handleClick = () => {
        const newItem = {
            itemId: productId,
            itemName: productName,
            itemPrice: price,
            itemQuantity: 1,
            itemType: type,
            itemTotal: price
        };
        addItem(newItem);
    };

    return (
        <li className="d-flex column-gap">
            <span className='product-name'>{productName}</span>
            <span>$ {price}</span>
            <Dropdown content={drinkType} changeType={changeType} />
            <button className='btn-add-item' onClick={handleClick}>
                <BsPlus />
            </button>
        </li>
    );
};
ProductItem.propTypes = {
    productId: PropTypes.string.isRequired,
    addItem: PropTypes.func.isRequired
};


const OrderProduct = ({addItem}) => {
    const { products } = useContext(OrderContext);
    
    return (
        <div className='order-product'>
            <h2>PRODUCT</h2>
            <ul className='order-products d-flex flex-column'>
                {products.map(product => {
                    const { productId } = product;
                    const itemProps = {
                        productId,
                        addItem
                    }
                    return (
                        <ProductItem key={productId} {...itemProps} />
                    );
                })}
            </ul>
        </div>
    );
};
OrderProduct.propTypes = {
    addItem: PropTypes.func.isRequired
};

export default OrderProduct;