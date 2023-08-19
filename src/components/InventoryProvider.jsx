import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import data from '../data/products.json';

// Inventory context for children access.
export const InventoryContext = createContext();

const InventoryProvider = ({children}) => {
    // Context products data state.
    const [ products, setProducts ] = useState(data.products);

    // Handle product data update.
    const updateProduct = (id, newProduct) => {
        // deconstruct product property without id. (id is read-only).
        const { name, description, price, inventory } = newProduct;
        
        // Update product by id.
        setProducts(products.map(_product => 
            _product.id === id 
                ? { ..._product, name, description, price, inventory } 
                : _product 
            )
        );
    };

    // Inventory context value.
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