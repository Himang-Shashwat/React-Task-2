import React, { useState } from 'react';
import { Circle }  from './icons'
import { Sun } from './themePic'
import { Moon } from './themePic'
import './lightStyle.css'
import Numpad from './numPad'
const math = require('mathjs');

function Calculator() {
  // State variables
  const [isSun, setIsSun] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [calVal, setCalVal] = useState('');
  const [history, setHistory] = useState([]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsSun((prevIsSun) => !prevIsSun);
  };

  // Function to handle user input
  const handleInput = (event) => {
    if (event === 'backspace') {
      setInputVal((prevInputValue) => prevInputValue.slice(0, -1));
    } else if (event === 'calculate') {
      try {
        const result = math.evaluate(inputVal);
        setCalVal(result);
      } catch (error) {
        setCalVal('Error');
      }
      setHistory((prevHistory) => {
        const newHistory = [inputVal, ...prevHistory];
        if (newHistory.length > 3) {
          newHistory.pop();
        }
        return newHistory;
      });
    } else {
      setInputVal((prevInputValue) => prevInputValue + event);
    }
  };

  // Define the cardClass based on the theme
  const cardClass = isSun ? 'card-light' : 'card-dark';

  return (
    <div className={`card rounded-5 w-25 h-75 d-flex flex-column ${cardClass}`}>
      <div className="ms-4 me-4 d-flex align-items-center" style={{ height: '40px' }}>
        <Circle />
        {isSun ? <Sun onClick={toggleTheme} /> : <Moon onClick={toggleTheme} />}
      </div>
      <div className="text-end pe-4 h-50 d-flex flex-column">
        {history.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <p className="mt-auto h5">{inputVal}</p>
        <p className="mt-auto h3">{calVal}</p>
      </div>
      <div className='d-flex justify-content-center mt-auto h-50'>
        <Numpad isSun={isSun} onButtonClick={handleInput} />
      </div>
    </div>
  );
}

export default Calculator;
