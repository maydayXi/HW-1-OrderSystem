import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

/**
 * 訂單備註
 * @param {object} param0 備註修改事件
 * @returns <textarea>
 */
const OrderMemo = ({onChange}) => {
    const [ memo, setMemo ] = useState("");

    useEffect(() => {
        onChange(memo);
    }, [ memo, onChange ]);

    const handleChange = e => setMemo(e.target.value);

    return (
        <textarea className='receipt-memo' cols="20" rows="5" placeholder="不加香菜" value={memo} onChange={handleChange}></textarea>
    );
};
OrderMemo.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default OrderMemo;