import React from 'react';
import InputRow from './InputRow';

const inputRows = {
    rowOne: [
        {name: 'seven', value: 7},
        {name: 'eight', value: 8},
        {name: 'nine', value: 9},
        {name: 'delete', value: 'DEL'},
        {name: 'clear', value: 'AC'},
    ],

    rowTwo: [
        {name: 'four', value: 4},
        {name: 'five', value: 5},
        {name: 'six', value: 6},
        {name: 'multiply', value: 'x'},
        {name: 'divide', value: '/'},
    ],

    rowThree: [
        {name: 'one', value: 1},
        {name: 'two', value: 2},
        {name: 'three', value: 3},
        {name: 'add', value: '+'},
        {name: 'subtract', value: '-'},
    ],

    rowFour: [
        {name: 'zero', value: 0},
        {name: 'decimal', value: '.'},
        {name: 'exponent', value: 'EXP'},
        {name: 'answer', value: 'Ans'},
        {name: 'equals', value: '='},
    ]
}

function Input ({clickHandler}) {
    return (
        <>
            <div id='stdin' className={`flex flex-col justify-evenly h-[50%] w-[90%]`}>
                {/* first row: 7, 8, 9, DEL, AC*/}
                <InputRow buttons={inputRows.rowOne} clickHandler={clickHandler} />

                {/* second row: 4, 5, 6, x, / */}
                <InputRow buttons={inputRows.rowTwo} clickHandler={clickHandler} />

                {/* third row: 1, 2, 3, +, - */}
                <InputRow buttons={inputRows.rowThree} clickHandler={clickHandler} />


                {/* fourth row: 0, ., EXP, Ans, = */}
                <InputRow buttons={inputRows.rowFour} clickHandler={clickHandler} />
            </div>
        </>
    );
}

export default Input;