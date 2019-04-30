import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  const btns = [
    {
      style: 'symbol',
      text: '\xF7'
    },
    {
      style: 'number',
      text: '7'
    },
    {
      style: 'number',
      text: '8'
    },
    {
      style: 'number',
      text: '9'
    },
    {
      style: 'symbol',
      text: '\xD7'
    },
    {
      style: 'number',
      text: '4'
    },
    {
      style: 'number',
      text: '5'
    },
    {
      style: 'number',
      text: '6'
    },
    {
      style: 'symbol',
      text: '\u2212'
    },
    {
      style: 'number',
      text: '1'
    },
    {
      style: 'number',
      text: '2'
    },
    {
      style: 'number',
      text: '3'
    },
    {
      style: 'symbol',
      text: '\u002B'
    },
  ];
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>

      <div className='calculator'>
        <CalculatorDisplay />
        <ActionButton text='clear' />
        {btns.map(btn => {
          return <NumberButton buttonStyle={btn.style} text={btn.text} />
        })}
        <ActionButton text='0' />
        <NumberButton buttonStyle='symbol' text='&#61;' />
      </div>

    </div>
  );
};

export default App;
