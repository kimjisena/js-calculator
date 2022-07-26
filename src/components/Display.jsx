import React from 'react';

function Display ({input, output}) {

    return (
        <>
            <div id='top' className={`flex flex-col justify-evenly items-center w-[90%] h-48 bg-black mt-4 rounded-3xl`}>
                <div id='panel' className={`flex justify-evenly w-[90%] h-1/4 bg-panel-bg mt-1`}>
                    <div id='panel-divider' className={`w-[2px] h-full bg-black`}></div>
                    <div id='panel-divider' className={`w-[2px] h-full bg-black`}></div>
                    <div id='panel-divider' className={`w-[2px] h-full bg-black`}></div>
                    <div id='panel-divider' className={`w-[2px] h-full bg-black`}></div>
                </div>

                <div className={`flex flex-col justify-between items-center w-[90%] h-[40%] bg-display-bg`}>

                    <div id='display' className={`w-full text-right text-display-fg font-line-one text-xl font-bold overflow-hidden`}>{input}</div>

                    <div id='output-line' className={`w-full text-right text-display-fg font-line-two text-4xl font-bold pr-2`}>
                        {output}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Display;