import React from 'react';

function InputButton ({name, value}) {
    return (
        <>
            <div id={name} className={`flex justify-center items-center w-16 h-10 bg-gray-two rounded-t-md rounded-b-xl shadow-sm shadow-black text-xl text-white font-bold`}>
                {value}
            </div>
        </>
    );
}

export default InputButton;