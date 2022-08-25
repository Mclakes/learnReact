import React from "react";

const image = "./img/photocard-lekan.png";

function Pictures() {
   return  <div>
    <div className="people">
        <img className="people-img" src=".././img/photocard-taofeek.png"  alt="taofeek" />
        <img className="people-img" src="./img/photocard-awotile.png"  alt="awotile" />
        <img className="people-img" src="./img/photocard-lekan.png"  alt="lekan1" />
      </div>
  
      <img src= {image} alt="rasheed" /> 
    </div>
  }

  export default Pictures;