import React from "react"


function entry(props) {
    return (
        <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" >
            {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
             <dd>{props.meaning}</dd>
             </div>
      </dl>
    );
}

export default entry;