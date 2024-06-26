import React from 'react';
import '../styleSheets/ButtonClear.css';

const ButtonClear = (props) => (
    <div className='button-clear' onClick={props.clearInput}>
        {props.children}
    </div>
);

export default ButtonClear;