import { createContext, useState } from "react";
import ClasssState from "./ClasssState";
import CompA from "./CompA";
import FunctionEffect from "./FunctionEffect";
import FunctionState from "./FunctionState";
import USComponent from "./USComponent";
import USWIthArray from "./USWIthArray";
import USWithObject from "./USWithObject";
import ControlledForm from "./ControlledForm";

export let NameContext = createContext()
export let ChannelContext = createContext()

function App() {
  let [name, setName] = useState('Khan')
  return (
    <div>
      <>
        {/* <USComponent />
        <USWithObject />
        <USWIthArray />
        <ClasssState />
        <FunctionState />
        <FunctionEffect/>

        <NameContext.Provider value={name}>
          <ChannelContext.Provider value={"learning Nover Ends"}>
            <CompA />
          </ChannelContext.Provider>

        </NameContext.Provider> */}

        <ControlledForm/>

      </>
    </div>
  );
}

export default App;
