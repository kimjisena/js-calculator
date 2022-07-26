import React, {useState} from "react";
import Display from "./components/Display";
import Input from "./components/Input";

function App () {
    const [input, setInput] = useState('Math.sqrt(69)');
    const [output, setOutput] = useState(8.456);
    const [ans, setAns] = useState(0);

    const handleClick = (event) => {
        let key = event.currentTarget.id;

        switch (key) {
            case 'clear':
                setInput('');
                setOutput(0);
                break;
            case 'delete':
                setInput(input.slice(0, input.length - 1));
                break;
            case 'answer':
                setInput(input+'Ans');
                break;
            default:
                break;
        }
    }

    return (
        <div className={`flex flex-col justify-center items-center w-full h-[100vh]`}>
            <div className={`app flex flex-col justify-between items-center w-96 h-[70%] bg-gray-one rounded-b-3xl rounded-t-lg`}>
                <Display input={input} output={output} />
                <Input clickHandler={handleClick} />
            </div>
        </div>
    );
}

export default App;