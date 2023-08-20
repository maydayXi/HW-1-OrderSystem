/* eslint-disable react/prop-types */
import { useEffect, useContext, useMemo, useState } from 'react';
import { 
    BsCupStraw, 
    BsCardText, 
    BsCurrencyDollar, 
    BsBoxSeam, 
    BsCheckLg, 
    BsArrowLeft 
} from 'react-icons/bs';
import { InventoryContext } from './InventoryProvider';

const inputProps = [
    {
        id: "productName",
        icon: <BsCupStraw />,
        text: "品項",
        type: "text"
    }, 
    {
        id: "description",
        icon: <BsCardText />,
        text: "描述",
        type: "text"
    }, 
    {
        id: "price",
        icon: <BsCurrencyDollar />,
        text: "價格",
        type: "number"
    },
    {
        id: "inventory",
        icon: <BsBoxSeam />,
        text: "庫存",
        type: "number"
    }
];

const InputGroup = ({ productId, i, handleNewProduct }) => {
    // Get current product information
    const { products } = useContext(InventoryContext);
    const [ product ] = products.filter(_product => _product.productId === productId);

    const { id, icon, text, type } = inputProps[i];

    // input value.
    const [ value, setValue ] = useState(product[id]);
    // input validation status.
    const [ valid, setValid ] = useState(true);
    // error message.
    const [ errorMsg, setErrorMsg ] = useState("");
    
    // Get current error message states
    useEffect(() => { 
        setValid(!errorMsg);
    }, [ errorMsg ]);

    // Get current value.
    useEffect(() => {
        handleNewProduct(oldProduct => ({
            ...oldProduct,
            [id]: !errorMsg 
                ? type === "number" ? Number(value) : value
                : ""
        }));
    }, [value])

    const handleChange = e => {
        const input = e.target.value.trim();
        switch(id) {
            case "productName": 
                setErrorMsg(!input ? "品項必填" : "");
                break;
            case "description": 
                setErrorMsg(!input ? "描述必填" : "");
                break;
            case "price":
                setErrorMsg(!input 
                    ? "價格需是數字" 
                    : Number(input) < 30
                        ? "價格需 >= 30"
                        : "");
                break;
            case "inventory":
                setErrorMsg(!input 
                    ? "庫存需是數字" 
                    : Number(input) < 0
                        ? "庫存數量需 >= 0"
                        : "");
                break;
        }
        setValue(input);
    };

    const rest = {
        min: type === "number" 
            ? id === "price"
                ? 30 : 0
            : null,
        className: valid ? null: "input-invalid"
    };

    const invalidTextStyle = {
        marginTop: "4px",
        color: "#de3545",
        fontWeight: "bolder",
        letterSpacing: "1px"
    };

    return (
        <div className='modal-input-group d-flex flex-column'>
            <label htmlFor={id} className="d-flex">
                <div className='modal-group-icon d-flex'>{icon}</div>
                <span>{text}</span>
            </label>
            <input type={type} value={value} id={id} onChange={handleChange} {...rest} />
            { valid
                ? null
                : (
                    <div style={invalidTextStyle}>
                        {errorMsg}
                    </div>
                )
            }
        </div>
    )
};

const SettingsModal = ({productId, handleOpen}) => {
    // Get current product and update function.
    const { products, updateProduct } = useContext(InventoryContext);
    const [ product ] = products.filter(_product => _product.productId === productId);

    // Modal states
    const [ disabled, setDisabled ] = useState(true);
    const [ newProduct, setNewProduct ] = useState(product);

    const hasError = useMemo(() => {
        const result = Object.keys(newProduct).some(_key => newProduct[_key] === "");
        return result;
    }, [newProduct]);

    useMemo(() => { setDisabled(hasError); }, [hasError]);

    // Close modal
    const handleReturn = () => handleOpen(false);
    // Save changes.
    const handleSave = () => {
        updateProduct(productId, newProduct);
        handleOpen(false);
        setDisabled(true);
    };

    return (
            <div className='overlay'>
                <div className='settings-modal d-flex flex-column row-gap'>
                    <h1>SETTINGS</h1>
                    <div className='d-flex flex-column row-gap'>
                        {inputProps.map((inputProp, i) => {
                            const props = {
                                productId,
                                i,
                                handleNewProduct: handleSet => setNewProduct(handleSet)
                            };
                            return (<InputGroup key={inputProp.id} {...props} />);
                        })}
                    </div>
                    <div className='modal-buttons d-flex column-gap'>
                        <button className='btn-return' onClick={handleReturn}>
                            <BsArrowLeft />
                        </button>
                        <button className='btn-save' onClick={handleSave} disabled={disabled}>
                            <BsCheckLg />
                        </button>
                    </div>
                </div>
            </div>
        );
};

export default SettingsModal;