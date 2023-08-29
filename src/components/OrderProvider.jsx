import { createContext } from 'react';
import PropTypes from 'prop-types';
import data from '../data/products.json';
import { useState } from 'react';

export const OrderContext = createContext();

const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([]);

    /**
     * Add order data into order list.
     * @param {object} order order information
     */
    const addOrder = order => {
        setOrders(oldOrders => [ ...oldOrders, order ]);
    }

    /**
     * Update order data.
     * @param {string} orderId order id
     * @param {object} order order information
     */
    const updateOrder = (orderId, order) => {
        setOrders(oldOrders => oldOrders.map(oldOrder => 
            oldOrder.orderId === orderId 
                ? order 
                : oldOrder
        ))
    }

    const value = {
        products: data.products,
        orders,
        addOrder,
        updateOrder
    };

    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    )
};

OrderProvider.propTypes = {
    children: PropTypes.any
}

export default OrderProvider;