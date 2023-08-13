import PropTypes from 'prop-types';

const SettingsModal = ({isOpen, name, description, price, inventory, setIsOpen}) => {
    const closeHandler = () => setIsOpen(false);

    return isOpen 
        ?  (
            <div className='overlay'>
                <div className='settings-modal d-flex flex-column row-gap'>
                    <h1>SETTINGS</h1>
                    <div className='d-flex flex-column row-gap'>
                        <label htmlFor="productName" className='modal-name'>品項</label>
                        <input type="text" id="productName" defaultValue={name} />
                        <label htmlFor="productDesc" className='modal-description'>描述</label>
                        <input type="text" id='productDesc' defaultValue={description} />
                        <label htmlFor="productPrice" className='modal-price'>價格</label>
                        <input type="number" id='productPrice' min={30} defaultValue={price} />
                        <label htmlFor="productInventory" className='modal-inventory'>庫存</label>
                        <input type="number" id='productInventory' min={0} defaultValue={inventory} />
                    </div>
                    <div className='d-flex'>
                        <button onClick={closeHandler}>Cancel</button>
                        <button onClick={closeHandler}>Save</button>
                    </div>
                </div>
            </div>
        )
        : null;
};

export default SettingsModal;