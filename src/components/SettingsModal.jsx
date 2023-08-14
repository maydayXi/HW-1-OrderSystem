import { useState } from 'react';
import { 
    BsCupStraw, 
    BsCardText, 
    BsCurrencyDollar, 
    BsBoxSeam, 
    BsCheckLg, 
    BsArrowLeft 
} from 'react-icons/bs';

const inputProps = [
    {
        id: "productName",
        icon: <BsCupStraw />,
        text: "品項",
        type: "text"
    }, 
    {
        id: "productDesc",
        icon: <BsCardText />,
        text: "描述",
        type: "text"
    }, 
    {
        id: "productPrice",
        icon: <BsCurrencyDollar />,
        text: "價格",
        type: "number"
    },
    {
        id: "productInventory",
        icon: <BsBoxSeam />,
        text: "庫存",
        type: "number"
    }
];

const InputGroup = (props) => {
    // DOM id, label icon, label text, input type, input default value
    const { id, icon, text, type, defaultValue, ...handlers } = { ...props };
    // Handlers callback from parent component
    const { disabledHandler, nameHandler, descriptionHandler, priceHandler, inventoryHandler } = { ...handlers };

    // input state
    const [value, setValue] = useState(defaultValue);

    const valueHandler = e => {
        const input = e.target.value.trim();
        switch(id) {
            case "productName": 
                nameHandler(input); 
                break;
            case "productDesc": 
                descriptionHandler(input); 
                break;
            case "productPrice":
                priceHandler(input);
                break;
            default:
                inventoryHandler(input);
                break;
        }
        setValue(input);
        disabledHandler(false);
    };

    const inputProps = {
        id, 
        type,
        value,
        onChange: valueHandler,
        min: type === "number" 
            ? id === "productPrice"
                ? 30 : 0
            : null,
        required: true
    };

    return (
        <div className='modal-input-group d-flex flex-column'>
            <label htmlFor={id} className="d-flex">
                <div className='modal-group-icon d-flex'>{icon}</div><span>{text}</span>
            </label>
            <input {...inputProps} />
        </div>
    )
};

const SettingsModal = (props) => {
    // spread default value
    const { name, description, price, inventory, ...handlers } = { ...props };
    // spread handler from parent component
    const { isOpen, openHandler, nameHandler, descriptionHandler, priceHandler, inventoryHandler } = { ...handlers };
    // default value for modal input
    const defaultValues = [name, description, price, inventory];

    // Modal states
    const [ disabled, setDisabled ] = useState(true);
    const [ newName, setNewName ] = useState(name);
    const [ newDescription, setNewDescription ] = useState(description);
    const [ newPrice, setNewPrice ] = useState(price);
    const [ newInventory, setNewInventory ] = useState(inventory);

    const returnHandler = () => openHandler(false);

    const saveHandler = () => {
        if ([newName, newDescription].filter(newInput => newInput.trim() === "").length === 0) {
            console.log("new inventory", newInventory);
            nameHandler(newName);
            descriptionHandler(newDescription);
            priceHandler(Number(newPrice))
            inventoryHandler(Number(newInventory));
            openHandler(false);
        }

        setDisabled(true);
    }

    return isOpen 
        ?  (
            <div className='overlay'>
                <div className='settings-modal d-flex flex-column row-gap'>
                    <h1>SETTINGS</h1>
                    <div className='d-flex flex-column row-gap'>
                        {inputProps.map((inputProps, i) => {
                            const props = {
                                ...inputProps,
                                defaultValue: defaultValues[i],
                                disabledHandler: enable => setDisabled(enable),
                                nameHandler: _newName => setNewName(_newName),
                                descriptionHandler: _newDescription => setNewDescription(_newDescription),
                                priceHandler: _newPrice => setNewPrice(_newPrice),
                                inventoryHandler: _newInventory => setNewInventory(_newInventory)
                            };

                            return (<InputGroup key={inputProps.id} {...props} />);
                        })}
                    </div>
                    <div className='modal-buttons d-flex column-gap'>
                        <button className='btn-return' onClick={returnHandler}>
                            <BsArrowLeft />
                        </button>
                        <button className='btn-save' onClick={saveHandler} disabled={disabled}>
                            <BsCheckLg />
                        </button>
                    </div>
                </div>
            </div>
        )
        : null;
};

export default SettingsModal;