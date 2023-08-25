import { useContext } from 'react';
import InventoryProvider, { InventoryContext } from '../components/InventoryProvider';
import InventoryCard from '../components/InventoryCard';

const Content = () => {
    const { products } = useContext(InventoryContext);

    return (
        <div id='inventoryManage' className='d-flex flex-column row-gap'>
            {
                products.map(product => {
                    const { productId } = product;
                    return (<InventoryCard key={productId} productId={productId} />)
                })
            }
        </div>
    )
};

/**
 * 庫存管理頁面
 * @returns Inventory management page
 */
const Inventory = () => {
    return (
        <InventoryProvider>
            <Content />
        </InventoryProvider>
    )
};

export default Inventory;