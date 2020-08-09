import React from 'react'
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Btn() {
  const history = useHistory();

  function handleClick() {
    history.push("./showroom");
  }

  return (
    <Button type="button" variant="warning" onClick={handleClick}>
      Showroom
    </Button>
  );
}


export default Btn;