import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia"
import entry from "./entry";


function createCard (emojipedia) {

  return <Entry

    name={emojipedia.name}
    emoji={emojipedia.emoji}
    meaning={emojipedia.meaning}

  />


}




function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
     
            {emojipedia.map(createCard)}
       
    {/* <Entry 
    name={emojipedia[0].name}
    emoji={emojipedia[0].emoji}
    meaning={emojipedia[0].meaning}
    />
       */}
    </div>
  );
}

export default App;
