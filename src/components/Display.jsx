import React from 'react';

function Display () {
    return (
        <>
            <div id='display' className={`w-[90%] h-48 bg-display-wrapper mt-2`}>

                <div id='input-line'>
                    display input here
                </div>

                <div id='output-line'>
                    display output here
                </div>
            </div>
        </>
    );
}

export default Display;