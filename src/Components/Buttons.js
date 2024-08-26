// import React, { useState } from "react";
// import AddUser from "../Components/AddUser/AddUser";
// import ViewUser from "./ViewUser/ViewUser";

// const Buttons = () => {
//   const [visibleComponent, setVisibleComponent] = useState(null);

//   // Function to display the AddUser component
//   const addUser = () => {
//     setVisibleComponent("addUser");
//   };

//   // Function to display the ViewUser component
//   const viewUser = () => {
//     setVisibleComponent("viewUser");
//   };

//   return (
//     <div>
//       <div>
//         <button className="btn btn-primary" onClick={addUser}>
//           Add User
//         </button>
//         <button className="btn btn-warning mx-2" onClick={viewUser}>
//           View User
//         </button>
//       </div>
//       {/* Conditionally render the components based on the state */}
//       {visibleComponent === "addUser" && <AddUser />}
//       {visibleComponent === "viewUser" && <ViewUser />}
//     </div>
//   );
// };

// export default Buttons;

import React, { useState } from "react";
import AddUser from "../Components/AddUser/AddUser";
import ViewUser from "./ViewUser/ViewUser";
import { useNavigate } from "react-router-dom";
const Buttons = () => {
  const navigate = useNavigate()
  

  return (
    <div>
      <div>
        <button className="btn btn-primary" onClick={()=>navigate("/user/add")}>
          Add User
        </button>
        <button className="btn btn-warning mx-2" onClick={()=>navigate("/user/view")}>
          View User
        </button>
      </div>
      
    </div>
  );
};

export default Buttons;
