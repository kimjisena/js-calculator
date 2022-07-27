import React, {useState} from "react";
import Display from "./components/Display";
import Input from "./components/Input";

function App () {

    const [input, setInput] = useState([2, '/', 7]);
    const [output, setOutput] = useState(2/7);
    const [decimal, setDecimal] = useState(false);
    const [ans, setAns] = useState(0);
    const [calculated, setCalculated] = useState(false);

    const prepareInput = () => {
        if (input.length === 0) {
            return 0;
        } else if (input.length <= 17) {
            return input.join('')
                    .replace(/^0{2,}/, '0') // remove leading zeroes
        } else {
            return input.slice(input.length - 17).join('');
        }
    }

    const calculate = () => {
        let cleaned = input.join('')
                    .replace(/^0{2,}/, '0') // remove leading zeroes
                    .replace('×', '*') // replace times with asterisk
                    .replace(/[-*+/]+([*+/])/g, '$1'); // remove extra operators

        if (/^[-*+/]/.test(cleaned)) {
            cleaned = cleaned.replace(/^([-*+/])/, ans.toString() + '$1'); // the weird syntax
        }

        let cal = '() => ' + cleaned + ';';
        let answer;

        try {
            answer = eval(cal);
            setOutput(answer);
            setAns(answer);
            setCalculated(true);

            // get ready to accept new expressions
            setInput([]);
            setDecimal(false);
        } catch(e) {
            setOutput('ERROR');
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
            case 'exponent': //case 'answer':
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