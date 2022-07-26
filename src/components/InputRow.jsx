import React from 'react';
import InputButton from './InputButton';

function InputRow({buttons, clickHandler}) {
    return (
        <>
            <div id='first-row' className={`flex justify-evenly`}>
                <InputButton name={buttons[0].name} value={buttons[0].value} clickHandler={clickHandler} />
                <InputButton name={buttons[1].name} value={buttons[1].value} clickHandler={clickHandler} />
                <InputButton name={buttons[2].name} value={buttons[2].value} clickHandler={clickHandler} />
                <InputButton name={buttons[3].name} value={buttons[3].value} clickHandler={clickHandler} />
                <InputButton name={buttons[4].name} value={buttons[4].value} clickHandler={clickHandler} />
            </div>
        </>
    );
}

export default InputRow;