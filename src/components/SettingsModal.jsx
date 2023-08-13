import PropTypes from 'prop-types';
import { 
    BsCupStraw, 
    BsCardText, 
    BsCurrencyDollar, 
    BsBoxSeam, 
    BsCheckLg, 
    BsArrowLeft 
} from 'react-icons/bs';

const inputs = [
    {
        id: "productName",
        icon: <BsCupStraw />,
        className: "modal-name",
        text: "品項",
        type: "text"
    }, 
    {
        id: "productDesc",
        className: "modal-desc",
        icon: <BsCardText />,
        text: "描述",
        type: "text"
    }, 
    {
        id: "productPrice",
        className: "modal-price",
        icon: <BsCurrencyDollar />,
        text: "價格",
        type: "number"
    },
    {
        id: "productInventory",
        className: "modal-inventory",
        icon: <BsBoxSeam />,
        text: "庫存",
        type: "number"
    }
];

const InputGroup = (props) => {
    const {id, icon, text, type, defaultValue} = { ...props };
    return (
        <div className='modal-input-group d-flex flex-column'>
            <label htmlFor={id} className="d-flex">
                <div className='modal-group-icon d-flex'>{icon}</div><span>{text}</span>
            </label>
            <input type={type} id={id} defaultValue={defaultValue} />
        </div>
    )
};
InputGroup.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.object,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    defaultValue: PropTypes.any
};

const SettingsModal = ({isOpen, name, description, price, inventory, setIsOpen}) => {
    const closeHandler = () => setIsOpen(false);
    const defaultValues = [name, description, price, inventory];

    return isOpen 
        ?  (
            <div className='overlay'>
                <div className='settings-modal d-flex flex-column row-gap'>
                    <h1>SETTINGS</h1>
                    <div className='d-flex flex-column row-gap'>
                        {inputs.map((input, i) => {
                            const props = {
                                ...input,
                                defaultValue: defaultValues[i]
                            };

                            return (<InputGroup key={i} {...props} />);
                        })}
                    </div>
                    <div className='modal-buttons d-flex column-gap'>
                        <button className='btn-return' onClick={closeHandler}>
                            <BsArrowLeft />
                        </button>
                        <button className='btn-save' onClick={closeHandler}>
                            <BsCheckLg />
                        </button>
                    </div>
                </div>
            </div>
        )
        : null;
};

export default SettingsModal;