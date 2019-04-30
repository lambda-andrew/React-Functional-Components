import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton'

const App = () => {
  return (
    <div>
      <div class = 'bor' >
        <ActionButton/>
        <NumberButton/>
      </div>
    </div>
  );
};

export default App;
