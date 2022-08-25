import React from "react";

const num = 3;

const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
  };  
customStyle.color = "blue";

function Body() {
    return <div>
    <h1 style={customStyle}>My Favourite Food </h1>
    <ul className="foodList" >
        <li >Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li>
        <li> i eat {num} times a day</li>
    </ul>
    </div>
  }

  export default Body;