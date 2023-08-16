/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useMemo } from 'react';
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
    const { id, icon, text, type, defaultValue, i, handleErrors, handleNewValue } = props;

    // input state
    const [ value, setValue ] = useState(defaultValue);
    const [ valid, setValid ] = useState(true);
    const [ errorMsg, setErrorMsg ] = useState("");

    useEffect(() => {
        setValid(!errorMsg);
        handleErrors(errs => {
            errs[i] = errorMsg;
            return errs;
        });
    }, [errorMsg]);

    const handleChange = e => {
        const input = e.target.value.trim();
        switch(id) {
            case "productName": 
                setErrorMsg(!input ? "品項必填" : "");
                break;
            case "productDesc": 
                setErrorMsg(!input ? "描述必填" : "");
                break;
            case "productPrice":
                setErrorMsg(!input 
                    ? "價格需是數字" 
                    : Number(input) < 30
                        ? "價格需 >= 30"
                        : "");
                break;
            case "productInventory":
                setErrorMsg(!input 
                    ? "庫存需是數字" 
                    : Number(input) < 0
                        ? "庫存數量需 >= 0"
                        : "");
                break;
        }
        handleNewValue(input);
        setValue(input);
    };

    const inputProps = {
        id, 
        type,
        value,
        onChange: handleChange,
        min: type === "number" 
            ? id === "productPrice"
                ? 30 : 0
            : null,
        required: true,
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
                <div className='modal-group-icon d-flex'>{icon}</div><span>{text}</span>
            </label>
            <input {...inputProps} />
            { valid
                ? null
                : (<div style={invalidTextStyle}>
                    {errorMsg}
                </div>) }
        </div>
    )
};

const SettingsModal = (props) => {
    // spread default value
    const { name, description, price, inventory, ...handles } = props;
    // spread handler from parent component
    const { handleOpen, handleName, handleDescription, handlePrice, handleInventory } = handles;
    // default value for modal input
    const defaultValues = [name, description, price, inventory];

    // Modal states
    const [ disabled, setDisabled ] = useState(true);
    const [ errors, setErrors ] = useState(["", "", "", ""]);
    const [ newName, setNewName ] = useState(name);
    const [ newDescription, setNewDescription ] = useState(description);
    const [ newPrice, setNewPrice ] = useState(price);
    const [ newInventory, setNewInventory ] = useState(inventory);

    const setNewStates = [setNewName, setNewDescription, setNewPrice, setNewInventory];
    const hasError = Boolean(errors.filter(error => Boolean(error)).length);

    useMemo(() => {
        setDisabled(hasError);
    }, [hasError])

    const handleReturn = () => handleOpen(false);

    const handleSave = () => {
        handleName(newName);
        handleDescription(newDescription);
        handlePrice(Number(newPrice))
        handleInventory(Number(newInventory));
        handleOpen(false);
        setDisabled(true);
    };

    return (
            <div className='overlay'>
                <div className='settings-modal d-flex flex-column row-gap'>
                    <h1>SETTINGS</h1>
                    <div className='d-flex flex-column row-gap'>
                        {inputProps.map((inputProps, i) => {
                            const props = {
                                ...inputProps,
                                i,
                                defaultValue: defaultValues[i],
                                handleErrors: handleError => setErrors(handleError),
                                handleNewValue: newValue => setNewStates[i](newValue)
                            };

                            return (<InputGroup key={inputProps.id} {...props} />);
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