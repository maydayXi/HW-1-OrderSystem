import { useEffect, useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import PropTypes from 'prop-types';
import OrderMemo from './OrderMemo';
import drinkType from '../data/productType';

/**
 * QuantityInput component
 * @returns 數量輸入框
 */
const QuantityInput = ({item, onChange}) => {
    const { itemId, itemType, itemQuantity } = item;
    const [ value, setValue ] = useState(itemQuantity);

    useEffect(() => {
        onChange(itemId, itemType, value);
    }, [ value ]);

    const handleChange = e => {
        const quantity = e.target.value;
        if(quantity) setValue(Number(quantity));
    }

    return (
        <input type="number" className='item-quantity' value={value == itemQuantity ? value : itemQuantity} onChange={handleChange}  />
    )
}
QuantityInput.propTypes = {
    item: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};


const OrderReceipt = ({receiptItems, updateMemo, handleSubmit, updateQuantity}) => {
    const handleChange = () => updateMemo();
    const handleClick = () => handleSubmit();

    return (
        <div className="order-receipt">
            <h2>RECEIPT</h2>
            <hr />
            {receiptItems.length
                ? <>
                    {receiptItems.map((item, i) => (
                        <div key={i} className="receipt-item d-flex">
                            <span className='item-name'>{item.itemName}</span>
                            <span>{drinkType[item.itemType]}</span>
                            <QuantityInput item={item} onChange={updateQuantity} /><span>杯</span>
                            <span>$ {item.itemPrice}</span>
                            <span className='item-total'>$ {item.itemTotal}</span>
                        </div>
                    ))}
                    <div className="receipt-total d-flex">
                        <span>總計</span>
                        <span>$ {receiptItems.reduce((init, item) => init + item.itemTotal, 0)}</span>
                    </div>
                    <OrderMemo onChange={handleChange} />
                    <button className='btn-check' onClick={handleClick}>
                        <BsCheck />
                    </button>
                </>
                : <h3 className='no-receipt-item'>沒有訂單</h3>
            }
        </div>
    );
};
OrderReceipt.propTypes = {
    receiptItems: PropTypes.array.isRequired,
    updateMemo: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired
}

export default OrderReceipt;