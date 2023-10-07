import { useState } from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';

function App() {
  return (
    <div className="App">
      <HookCounterFour />
      {/* <HookCounterThree /> */}
      {/* <HooksCounterTwo /> */}
      {/* <HookCounter /> */}
      
    </div>
  );
}

export default App;
