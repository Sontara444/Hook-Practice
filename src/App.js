import React, {useReducer} from "react";
import "./App.css";
import HookCounter from "./components/HookCounter";
import HooksCounterTwo from "./components/HooksCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookEffect from "./components/HookEffect";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalCounterHook from "./components/IntervalCounterHook";
import DataFetching from "./components/DataFetching";
// import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./componentsTwo/ComponentA";
import ComponentB from "./componentsTwo/ComponentB";
import ComponentC from "./componentsTwo/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();


export const CountContext = React.createContext()
const initialState = 0
const reducer = (state, action) =>{
   switch(action){
    case 'increment':
        return state + 1
    case 'decrement':
        return state - 1
    case 'reset':
        return initialState
    default:
        return state
   }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />


      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={'coding'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <DataFetching /> */}
      {/* <IntervalCounterHook /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookEffect /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HooksCounterTwo /> */}
      {/* <HookCounter /> */}
    </div>
    </CountContext.Provider>
  );
}

export default App;
