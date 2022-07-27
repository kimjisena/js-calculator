import React from 'react';

function InputButton ({name, value, clickHandler}) {

    if (name === 'multiply') {
        return (
            <>
                <div onClick={(ev) => clickHandler(ev)} id={name} className={`flex justify-center items-center hover:cursor-pointer w-16 h-10 ${name === 'delete' || name === 'clear' ? 'bg-red' : 'bg-gray-two'} rounded-t-md rounded-b-xl shadow-sm shadow-black active:shadow-inner text-xl text-white font-bold`}>
                    &times;
                </div>
            </>
        );
    }

    return (
        <>
            <div onClick={(ev) => clickHandler(ev)} id={name} className={`flex justify-center items-center hover:cursor-pointer w-16 h-10 ${name === 'delete' || name === 'clear' ? 'bg-red' : 'bg-gray-two'} rounded-t-md rounded-b-xl shadow-sm shadow-black active:shadow-inner text-xl text-white font-bold`}>
                {value}
            </div>
        </>
    );
}

export default InputButton;