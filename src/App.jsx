import React, {useState} from "react";
import Display from "./components/Display";
import Input from "./components/Input";

function App () {

    const [input, setInput] = useState([]); // gets input
    const [output, setOutput] = useState(0); // controls output
    const [decimal, setDecimal] = useState(false); // decimal flag: true when a decimal is processed
    const [ans, setAns] = useState(0); // keeps track of the previous answer
    const [calculated, setCalculated] = useState(false); // controls the display element

    // show relevant input...handle overflow
    const prepareInput = () => {
        let unprepped = input.join('');
        if (input.length === 0) {
            return 0;
        } else if (unprepped.length <= 17) {
            return unprepped
                    .replace(/^0{2,}/, '0') // remove leading zeroes
        } else {
            return unprepped.slice(unprepped.length - 17);
        }
    }

    // calculate result using eval()
    const calculate = () => {

        let cleaned = input.join('')
                    .replace(/^0{2,}/, '0') // remove leading zeroes
                    .replace('×', '*') // replace times with asterisk
                    .replace(/[-*+/]+([*+/])/g, '$1'); // remove extra operators

        if (/^[-*+/]/.test(cleaned)) {
            cleaned = cleaned.replace(/^([-*+/])/, ans.toString() + '$1'); // the weird syntax
        }

        let expression = '() => ' + cleaned + ';';
        let answer;

        try {
            if (/^E/.test(cleaned)) {
                throw new Error("Expression can't start with E");
            }

            answer = eval(expression);

            setOutput(answer); // show result
            setAns(answer); // save result
            setCalculated(true);

            // get ready to accept new expressions
            setInput([]);
            setDecimal(false);
        } catch(e) {
            console.log(e);
            setOutput('SYNTAX ERROR');
        }
    }

    const handleClick = (event) => {
        let key = event.currentTarget;

        switch (key.id) {
            case 'clear':
                setInput([]);
                setOutput(0);
                setDecimal(false);
                setCalculated(false);
                break;
            case 'delete':
                setInput(input.slice(0, input.length - 1));
                break;
            case 'exponent':
                setInput([...input, 'E']);
                break;
            case 'answer':
                setInput([...input, ans]);
                break;
            case 'decimal':
                if (!decimal) {
                    setInput([...input, key.innerText]);
                    setDecimal(true); // done with decimals
                }
                break;
            case 'equals':
                calculate();
                break;
            case 'add': case 'subtract': 
            case 'divide': case 'multiply':
                setInput([...input, key.innerText]);
                setDecimal(false); // ooops accept decimals
                break;
            default:
                setInput([...input, key.innerText]);
                break;
        }
    }

    return (
        <div className={`flex flex-col justify-center items-center w-full h-[100vh]`}>
            <div className={`app flex flex-col justify-between items-center w-96 h-[70%] bg-gray-one rounded-b-3xl rounded-t-lg`}>
                <Display input={prepareInput()} output={output} calculated={calculated} />
                <Input clickHandler={handleClick} />
            </div>
        </div>
    );
}

export default App;