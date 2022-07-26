import Display from "./components/Display";
import Input from "./components/Input";

function App() {
  return (
    <div className={`flex flex-col justify-center items-center w-full h-[100vh]`}>
      <div className={`app flex flex-col justify-between items-center w-96 h-[80%] bg-input-wrapper`}>
        <Display />
        <Input />
      </div>
    </div>
  );
}

export default App;