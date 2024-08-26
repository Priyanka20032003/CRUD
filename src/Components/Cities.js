import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cities = () => {
  const citiesList = ["Newyork", "Paris", "Japan", "USA"];

  let [selectedIndex, setSelectedIndex] = useState(0);
  // const handleClick = (event) => {
  //     console.log(event.target)
  // }
  return (
    <div>
      <h2>CIties</h2>
      <ul className="list-group">
        {citiesList.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item "
            }
            // onClick={(event) => console.log(event)}
            //onClick={handleClick}
            onClick={() => setSelectedIndex(index)}
          >
            {index}-{city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cities;
