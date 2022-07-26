import React from 'react';

function Display () {
    return (
        <>
            <div id='top' className={`flex flex-col justify-between items-center w-[90%] h-48 bg-black mt-4 rounded-3xl`}>
                <div id='panel' className={`flex justify-evenly w-[90%] h-1/3 bg-panel-bg mt-4`}>
                    <div id='panel-divider' className={`w-[2px] h-full bg-black`}></div>
                    <div id='panel-divider' className={`w-[2px] h-full bg-black`}></div>
                    <div id='panel-divider' className={`w-[2px] h-full bg-black`}></div>
                    <div id='panel-divider' className={`w-[2px] h-full bg-black`}></div>
                </div>

                <div id='display' className={``}>

                    <div id='input-line'>
                        display input here
                    </div>

                    <div id='output-line'>
                        display output here
                    </div>

                </div>
            </div>
        </>
    );
}

export default Display;