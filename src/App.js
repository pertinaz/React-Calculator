import Button from './components/Button';
import './App.css';
import calculatorLogo from './images/icons8-estudiante-de-lienzo-50.png';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [input,setInput] = useState('');
  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input){
      setInput(evaluate(input));
    }else{
      alert("Add more than one value.");
    }
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
            src={calculatorLogo}
            className='calculator-logo'
            alt='Logo de la calculadora' />
        <h2 className='title'>Calculator</h2>
      </div>
      <div className='calculator-container'>
        <Screen  input={input}/>
        <div className='row'>
          <Button click={addInput}>1</Button>
          <Button click={addInput}>2</Button>
          <Button click={addInput}>3</Button>
          <Button click={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button click={addInput}>4</Button>
          <Button click={addInput}>5</Button>
          <Button click={addInput}>6</Button>
          <Button click={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button click={addInput}>7</Button>
          <Button click={addInput}>8</Button>
          <Button click={addInput}>9</Button>
          <Button click={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button click={calculateResult}>=</Button>
          <Button click={addInput}>0</Button>
          <Button click={addInput}>.</Button>
          <Button click={addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear clearInput = {() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
