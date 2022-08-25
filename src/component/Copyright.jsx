import React from "react";

const name = "lekan";
const currentYear = new Date(2022, 3, 4, 17);
const year = currentYear.getFullYear();

function Copyright() {
    return <div>
      <p>Created by Bankole Ola{name}</p>
      <p>Copyright {year}</p>
    </div>
  }

  export default Copyright;