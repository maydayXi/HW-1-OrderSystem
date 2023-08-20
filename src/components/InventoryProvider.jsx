import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import data from '../data/products.json';

// Inventory context for children access.
export const InventoryContext = createContext();

const InventoryProvider = ({children}) => {
    // Context products data state.
    const [ products, setProducts ] = useState(data.products);

    /**
     * Handle product update
     * @param {string} productId Product Id
     * @param {object} newProduct New Product object
     * @returns {null} null
     */
    const updateProduct = (productId, newProduct) => {
        // Update product by id.
        setProducts(products.map(oldProduct => 
            oldProduct.productId === productId 
                ? newProduct
                : oldProduct
            )
        );
    };

    /**
     * Inventory context value.
     */
    const value = {
        products,
        updateProduct
    };

    return (
        <InventoryContext.Provider value={value}>
            {children}
        </InventoryContext.Provider>
    );
};

InventoryProvider.propTypes = {
    children: PropTypes.any
};

export default InventoryProvider;