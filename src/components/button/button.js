import React from 'react'
import { useHistory } from "react-router-dom";

function Button() {
  const history = useHistory();

  function handleClick() {
    history.push("./showroom");
  }

  return (
    <button type="button" onClick={handleClick}>
      Showroom
    </button>
  );
}


export default Button;