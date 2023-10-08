import { useState } from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookEffect from './components/HookEffect';
import HookMouse from './components/HookMouse';

function App() {
  return (
    <div className="App">
      <HookMouse />
      {/* <HookEffect /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HooksCounterTwo /> */}
      {/* <HookCounter /> */}
      
    </div>
  );
}

export default App;
