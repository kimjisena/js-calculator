import React from 'react';
import InputButton from './InputButton';

function InputRow({buttons}) {
    return (
        <>
            <div id='first-row' className={`flex justify-evenly`}>
                <InputButton name={buttons[0].name} value={buttons[0].value} />
                <InputButton name={buttons[1].name} value={buttons[1].value} />
                <InputButton name={buttons[2].name} value={buttons[2].value} />
                <InputButton name={buttons[3].name} value={buttons[3].value} />
                <InputButton name={buttons[4].name} value={buttons[4].value} />
            </div>
        </>
    );
}

export default InputRow;