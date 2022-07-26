import React, {useState} from "react";
import Display from "./components/Display";
import Input from "./components/Input";

function App () {

    const [input, setInput] = useState([2, '/', 7]);
    const [output, setOutput] = useState(2/7);
    const [ans, setAns] = useState(0);

    const prepareInput = () => {
        if (input.length === 0) {
            return 0;
        } else if (input.length <= 17) {
            return input.join('');
        } else {
            return input.slice(input.length - 17).join('');
        }
    }

    const handleClick = (event) => {
        let key = event.currentTarget;

        switch (key.id) {
            case 'clear':
                setInput([]);
                setOutput(0);
                break;
            case 'delete':
                setInput(input.slice(0, input.length - 1));
                break;
            case 'exponent': case 'answer':
                break;
            default:
                setInput([...input, key.innerText]);
                break;
        }
    }

    return (
        <div className={`flex flex-col justify-center items-center w-full h-[100vh]`}>
            <div className={`app flex flex-col justify-between items-center w-96 h-[70%] bg-gray-one rounded-b-3xl rounded-t-lg`}>
                <Display input={prepareInput()} output={output} />
                <Input clickHandler={handleClick} />
            </div>
        </div>
    );
}

export default App;