import React from "react";

const currentYear = new Date();
const greeting = currentYear.getHours();

let talkGreet;
let greetColor;

if (greeting<13) {
  talkGreet = "Good morning";
  greetColor= { color: "red"}
} else if (greeting > 17) {
  talkGreet = "Good evening";
  greetColor= { color: "blue"}
} else {
  talkGreet = "Good afternoon";
  greetColor= { color: "green"}
}

// console.log(talkGreet);
// console.log(greetColor.color)

function Greeting() {
    return <h1 style={greetColor}> {talkGreet} sir</h1>
}

export default Greeting;