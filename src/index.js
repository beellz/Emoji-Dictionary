import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";


ReactDOM.render(<App />, document.getElementById("root"));


let rank = [1,2,3,4,5,6,7,8,9,10];

let arrowMap = rank.map(x => x + 21);
console.log(arrowMap);
let arrowFilter = rank.filter( x => x < 0 | x > 9 );
console.log(arrowFilter);

let arrowReduce = rank.reduce( (x , y) => x + y );
console.log(arrowReduce)
