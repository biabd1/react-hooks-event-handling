import React from "react";

function Tickler() {
  function tickle(event) {
    return (event);
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;