import React from 'react';

function Input () {
    return (
        <>
            <div id='stdin'>
                <div id='equals'>=</div>

                <div id='zero'>0</div>
                <div id='one'>1</div>
                <div id='two'>2</div>
                <div id='three'>3</div>
                <div id='four'>4</div>
                <div id='five'>5</div>
                <div id='six'>6</div>
                <div id='seven'>7</div>
                <div id='eight'>8</div>
                <div id='nine'>9</div>

                <div id='add'>+</div>
                <div id='subtract'>-</div>
                <div id='multiply'>0</div>
                <div id='divide'>/</div>

                <div id='decimal'>.</div>

                <div id='clear'>AC</div>
                <div id='delete'>DEL</div>
                <div id='exponent'>EXP</div>
                <div id='answer'>Ans</div>
            </div>
        </>
    );
}

export default Input;