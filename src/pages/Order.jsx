import { useState } from 'react';
import OrderProvider from '../components/OrderProvider';
import OrderCard from '../components/OrderCard';
import OrderProduct from '../components/OrderProduct';
import OrderReceipt from '../components/OrderReceipt';
import '../style/order.css';

const Content = () => {
    /**
     * receipt item
     * { itemId: , itemName: , itemType:, itemPrice:, itemQuantity: , itemTotal: }
     */
    const [ receiptItems, setReceiptItems ] = useState([]);
    const [ order, setOrder ] = useState({});
    const [ memo, setMemo ] = useState("");
    /**
     * Add new item into receipt
     * @param {object} newItem new product item object
     */
    const handleAddItem = newItem => {
        setReceiptItems(oldReceiptItems => oldReceiptItems.length
            ? oldReceiptItems.find(item => item.itemId == newItem.itemId && item.itemType === newItem.itemType)
                ? oldReceiptItems.map(item => item.itemId == newItem.itemId && item.itemType === newItem.itemType 
                    ? ({
                        ...item, 
                        itemQuantity: item.itemQuantity + 1,
                        itemTotal: item.itemTotal + item.itemPrice
                    })
                    : item
                )
                : [ ...oldReceiptItems, newItem ]
            : [ newItem ]
        );
    };

    /**
     * Update item quantity by id and type.
     * @param {string} id receipt item id
     * @param {string} type receipt item type
     * @param {number} quantity receipt item quantity
     */
    const updateQuantity = (id, type, quantity) => {
        setReceiptItems(oldReceiptItems => 
            oldReceiptItems.map(item => {
                return item.itemId === id && item.itemType === type 
                    ? { ...item, itemQuantity: quantity, itemTotal: item.itemPrice * quantity }
                    : item
            }));
    };

    const updateMemo = newMemo => setMemo(newMemo);

    const handleSubmit = () => {
        receiptItems.forEach((item, i) => {
            const { itemName, itemQuantity, itemTotal } = item;
            setOrder(oldOrder => ({
                ...oldOrder,
                [i]: {
                    orderName: itemName,
                    orderQuantity: itemQuantity,
                    orderTotal: itemTotal
                }
            }));
        });

        setOrder(oldOlder => ({
            ...oldOlder,
            memo
        }));

        setReceiptItems([]);
    };

    const receiptProps = {
        receiptItems,
        updateQuantity,
        updateMemo,
        handleSubmit
    }

    return (
        <div id='order' className='d-flex column-gap'>
            <OrderProduct addItem={handleAddItem} />
            <OrderReceipt {...receiptProps} />
            <div className="order-details">
                {Object.keys(order).length
                    ? <OrderCard order={order} />
                    : null
                }
            </div>
        </div>
    )
};

/**
 * Order component
 * @returns 訂單管理畫面
 */
const Order = () => {
    return (
        <OrderProvider>
            <Content />
        </OrderProvider>
    )
};

export default Order;