import React from 'react';

function Display () {
    return (
        <>
            <div id='top' className={`flex flex-col justify-evenly items-center w-[90%] h-48 bg-black mt-4 rounded-3xl`}>
                <div id='panel' className={`flex justify-evenly w-[90%] h-1/4 bg-panel-bg mt-1`}>
                    <div id='panel-divider' className={`w-[2px] h-full bg-black`}></div>
                    <div id='panel-divider' className={`w-[2px] h-full bg-black`}></div>
                    <div id='panel-divider' className={`w-[2px] h-full bg-black`}></div>
                    <div id='panel-divider' className={`w-[2px] h-full bg-black`}></div>
                </div>

                <div id='display' className={`flex flex-col justify-evenly items-center w-[90%] h-[40%] bg-display-bg`}>

                    <div id='input-line' className={`w-full text-right text-display-fg font-line-one text-xl font-bold`}>
                        Math.sqrt(69)
                    </div>

                    <div id='output-line' className={`w-full text-right text-display-fg font-line-two text-4xl font-bold pr-2`}>
                        ATE SOMETHING
                    </div>

                </div>
            </div>
        </>
    );
}

export default Display;