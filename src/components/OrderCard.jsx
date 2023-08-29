import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

/**
 * OrderCard component
 * @param {object} param0 order object
 * @returns 訂單
 */
const OrderCard = ({order}) => {
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        setTotal(Object.keys(order).reduce((init, key) => 
            init + (isNaN(key) ? 0 : order[key].orderTotal), 0));
    }, [order]);

    return (
        <div className="order-card">
            <h2 className='text-center'>Order</h2>
            {
                Object.keys(order).map(key => key !== "memo" 
                    ? (
                        <div className="order-item d-flex" key={key}>
                            <span>{order[key].orderName}</span>
                            <span>{order[key].orderQuantity} 杯</span>
                            <span>${order[key].orderTotal}</span>
                        </div>
                    ) 
                    : null
                )
            }
            <div className="order-item order-memo d-flex">
                備註：{order.memo}
            </div>
            <div className="order-item order-total d-flex">
                總計：$ {total}
            </div>
        </div>
    );
};
OrderCard.propTypes = {
    order: PropTypes.object.isRequired
};

export default OrderCard;