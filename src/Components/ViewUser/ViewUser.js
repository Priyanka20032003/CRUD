// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import DeletePopup from "./DeletePopup";

// const ViewUser = () => {
//   const [userDetails, setUserDetails] = useState([]);
//   const [error, setError] = useState("");
//   const [delPopup, setDelPopup] = useState(false);

//   useEffect(() => {
//     axios
//       .get("https://66bc814f24da2de7ff6ad6a3.mockapi.io/users/userDetails")
//       .then((response) => {
//         // console.log(response.data);
//         setUserDetails(response.data);
//         setError("");
//       })
//       .catch((error) => {
//         console.log(error.message);
//         setError(error.message);
//         setUserDetails([]);
//       });
//   }, []);

//   const deleteUser = (user) => {
//     const originaldata = [...userDetails];
//     setUserDetails(userDetails.filter((u) => u.id != user.id));
//     axios
//       .delete(
//         "https://66bc814f24da2de7ff6ad6a3.mockapi.io/users/userDetails/" +
//           user.id
//       )
//       .then((response) => console.log("User deleted successfully"))
//       .catch((error) => {
//         console.log(error.message);
//         setError(error.message);
//         setUserDetails(originaldata);
//       });
//   };

//   return (
//     <div>
//       {error && <h3 className="text-danger">{error}</h3>}
//       <table className="table">
//         <tr>
//           <th>User id</th>
//           <th>User Name</th>
//           <th>User Email</th>
//           <th>User Mobile</th>
//           <th>Role</th>
//           <th>Action</th>
//         </tr>

//         {userDetails.map((user) => (
//           <tr>
//             <td>{user.id}</td>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
//             <td>{user.mobile}</td>
//             <td>{user.userRole}</td>
//             <td>
//               <div>
//                 <button className="btn btn-warning mx-2">Update</button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => deleteUser(user)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   );
// };

// export default ViewUser;

import React, { useEffect, useState } from "react";
import axios from "axios";
import DeletePopup from "./DeletePopup";
import "./ViewUser.css";
import { useNavigate } from "react-router-dom";

const ViewUser = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [error, setError] = useState("");
  const [delPopup, setDelPopup] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://66bc814f24da2de7ff6ad6a3.mockapi.io/users/userDetails")
      .then((response) => {
        setUserDetails(response.data);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setUserDetails([]);
      });
  }, []);

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setDelPopup(true);
  };

  /*
  http://localhost:3000/user/
http://localhost:3000/user/<id>
  */

  const deleteUser = () => {
    const originalData = [...userDetails];
    setUserDetails(userDetails.filter((u) => u.id !== userToDelete.id));
    axios
      .delete(
        "https://66bc814f24da2de7ff6ad6a3.mockapi.io/users/userDetails/" +
          userToDelete.id
      )
      .then(() => {
        console.log("User deleted successfully");
        setDelPopup(false);
      })
      .catch((error) => {
        setError(error.message);
        setUserDetails(originalData);
        setDelPopup(false);
      });
  };

  const closePopup = () => {
    setDelPopup(false);
  };
  const handleUpdateClick = (user) => {
    // Navigate to the AddUser route
    navigate(`/user/add?userId=${user.id}`);
  };

  return (
    <div className="border container rounded">
      {error && <h3 className="text-danger">{error}</h3>}
      <div className="d-flex justify-content-between align-items-center mt-2  ">
        <h3>Users</h3>
        <div className="d-flex gap-2">
          <select className="rounded ">
            {userDetails.map((user) => (
              <option>{user.userRole}</option>
            ))}
          </select>
          <button className="btn btn-primary">Search</button>
        </div>

        <button
          className="btn btn-primary me-5"
          onClick={() => navigate("/user/add")}
        >
          AddUser
        </button>
      </div>
      <hr></hr>
      <div className={delPopup ? "blurred" : ""}>
        <table className="table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Mobile</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.userRole}</td>
                <td>
                  <div>
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => handleUpdateClick(user)}
                    >
                      Update
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteClick(user)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {delPopup && <DeletePopup onDelete={deleteUser} onClose={closePopup} />}
    </div>
  );
};

export default ViewUser;
