import React from "react";
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
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <CounterTwo />
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
  );
}

export default App;
