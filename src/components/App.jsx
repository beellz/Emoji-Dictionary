import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia";



function createCard (emojipedia) {

  return <Entry
    key={emojipedia.id}
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
      <dl className="dictionary">
            {emojipedia.map(createCard)}

       
    {/* <Entry 
    name={emojipedia[0].name}
    emoji={emojipedia[0].emoji}
    meaning={emojipedia[0].meaning}
    />
       */}
      </dl> 
      

    </div>
  );
}

export default App;
