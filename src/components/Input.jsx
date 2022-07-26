import React from 'react';

function Input () {
    return (
        <>
            <div id='stdin' className={`flex flex-col justify-evenly h-[60%] w-[90%] bg-input-wrapper text-button-fg`}>
                {/* first row: 7, 8, 9, DEL, AC*/}
                <div id='first-row' className={`flex justify-evenly`}>
                    <div id='seven' className={`flex justify-center items-center w-16 h-8 bg-button-bg rounded-t-md rounded-b-xl shadow-sm shadow-black text-xl font-bold`}>
                        7
                    </div>
                    <div id='eight'>8</div>
                    <div id='nine'>9</div>
                    <div id='delete'>DEL</div>
                    <div id='clear'>AC</div>
                </div>


                {/* second row: 4, 5, 6, x, / */}
                <div id='second-row' className={`flex justify-evenly`}>
                    <div id='four'>4</div>
                    <div id='five'>5</div>
                    <div id='six'>6</div>
                    <div id='multiply'>x</div>
                    <div id='divide'>/</div>  
                </div>

                {/* third row: 1, 2, 3, +, - */}
                <div id='third-row' className={`flex justify-evenly`}>
                    <div id='one'>1</div>
                    <div id='two'>2</div>
                    <div id='three'>3</div>
                    <div id='add'>+</div>
                    <div id='subtract'>-</div>
                </div>


                {/* fourth row: 0, ., EXP, Ans, = */}
                <div id='fourth-row' className={`flex justify-evenly`}>
                    <div id='zero'>0</div>
                    <div id='decimal'>.</div>
                    <div id='exponent'>EXP</div>
                    <div id='answer'>Ans</div>
                    <div id='equals'>=</div>
                </div>
            </div>
        </>
    );
}

export default Input;