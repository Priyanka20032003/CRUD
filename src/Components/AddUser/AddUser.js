// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AddUser = () => {
//   // const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");
//   const [formError, setFormError] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//     userRole: "",
//   });
// const navigate = useNavigate();
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);

//     if (!formData.name) {
//       setFormError("name is required");
//       return;
//     }
//     if (!formData.email) {
//       setFormError("email is required");
//       return;
//     }
//     if (!formData.mobile) {
//       setFormError("mobile number is required");
//       return;
//     }

//     if (!formData.password) {
//       setFormError("password is required");
//       return;
//     }

//     if (!formData.confirmPassword) {
//       setFormError("confirmPassword is required");
//       return;
//     }
//     if (!formData.userRole) {
//       setFormError("userRole is required");
//       return;
//     }
//     setFormError("");

//     axios

//       .post(
//         "https://66bc814f24da2de7ff6ad6a3.mockapi.io/users/userDetails",
//         formData
//       )
//       .then((response) => {
//         console.log(response);
//         //setUsers([response.data, ...formData]);
//         console.log("data posted successfully");
//         setError("");
//         setFormData({
//           name: "",
//           email: "",
//           mobile: "",
//           password: "",
//           confirmPassword: "",
//           userRole: "",
//         });
//         navigate("/viewUser")
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   //get user
//   /*
//       const getUser = () => {
//          axios.get("https://66bc814f24da2de7ff6ad6a3.mockapi.io/users/userDetails")
//         .then((response) => {
//           console.log(response.data);
//           setUsers(response.data);
//           setError("");
//         })
//         .catch((error) => {
//           setError(error.message);
//         });


//   };
//   */

//   //add user
//   /*
//     const addUser = () => {
     
//         const newUser = {
//             name: "xyz",
//             email: "xyz@gmail.com",
//             mobile: 1234567890,
//             password: "abcd",
//             confirmPassword: "abcd",
//             userRole:"Backend"
//         }
        
//         // console.log("user added")
//         axios.post("https://66bc814f24da2de7ff6ad6a3.mockapi.io/users/userDetails", newUser).then((response) => {
//             setUsers([response.data, ...users])
//             console.log(users)
//         }).catch((error) => {
//             setError(error.message)
            
//         })
        
//     }
//     */

//   return (
//     <>
//       {/* {error && <h4 className="text-danger">{error}</h4>}
//       <ul className="list-group">
//         {users.map((user) => (
//           <li key="user.id" className="list-group-item">
//             {user.id} - {user.name}
//           </li>
//         ))}
//       </ul> */}
//       {error && <h4 className=" container text-danger  mt-4 ">{formError}</h4>}

//       {formError && (
//         <h4 className=" container text-danger  mt-4 ">{formError}</h4>
//       )}

//       <div className="container border p-3">
//         <div className="d-flex justify-content-between mb-4">
//           <h1>Add User</h1>
//           <button className="btn btn-secondary" onClick={() => navigate("/viewUser")}>View Users</button>
//         </div>
//         <div>
//           <div>
//             <h5>User Name:</h5>
//             <input
//               type="text"
//               placeholder="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-75 mx-5 px-2 py-1 border rounded"
//             ></input>
//           </div>
//           <div>
//             <h5>User Mail:</h5>
//             <input
//               type="text"
//               placeholder="Mail"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-75 mx-5 px-2 py-1 border rounded"
//             ></input>
//           </div>
//           <div>
//             <h5>User Mobile:</h5>
//             <input
//               type="text"
//               placeholder="Mobile"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-75 mx-5 px-2 py-1 border rounded"
//             ></input>
//           </div>
//           <div>
//             <h5>User Password:</h5>
//             <input
//               type="text"
//               placeholder="Password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-75 mx-5 px-2 py-1 border rounded"
//             ></input>
//           </div>
//           <div>
//             <h5>Confirm Password:</h5>
//             <input
//               type="text"
//               placeholder="Confirm Password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-75 mx-5 px-2 py-1 border rounded"
//             ></input>
//           </div>
//           <div>
//             <h5>User Role:</h5>
//             <input
//               type="text"
//               placeholder="Role"
//               name="userRole"
//               value={formData.userRole}
//               onChange={handleChange}
//               className="w-75 mx-5 px-2 py-1 border rounded"
//             ></input>
//           </div>
//         </div>
//         {/* <button className="btn btn-primary mt-4 mx-3" onClick={getUser}>
//           Get User
//         </button>
//         <button className="btn btn-primary mt-4" onClick={addUser}>
//           Add User
//         </button> */}
//         <button className="btn btn-primary mt-4" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//     </>
//   );
// };

// export default AddUser;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    userRole: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userId = params.get("userId");

    if (userId) {
      axios
        .get(`https://66bc814f24da2de7ff6ad6a3.mockapi.io/users/userDetails/${userId}`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [location.search]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      setFormError("Name is required");
      return;
    }
    if (!formData.email) {
      setFormError("Email is required");
      return;
    }
    if (!formData.mobile) {
      setFormError("Mobile number is required");
      return;
    }
    if (!formData.password) {
      setFormError("Password is required");
      return;
    }
    if (!formData.confirmPassword) {
      setFormError("Confirm password is required");
      return;
    }
    if (!formData.userRole) {
      setFormError("User role is required");
      return;
    }
    setFormError("");

    const url = formData.id
      ? `https://66bc814f24da2de7ff6ad6a3.mockapi.io/users/userDetails/${formData.id}`
      : "https://66bc814f24da2de7ff6ad6a3.mockapi.io/users/userDetails";

    const method = formData.id ? "put" : "post";

    axios[method](url, formData)
      .then(() => {
        console.log("User details saved successfully");
        navigate("/user/view");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      {error && <h4 className="text-danger container mt-4">{error}</h4>}
      {formError && <h4 className="text-danger container mt-4">{formError}</h4>}
      <div className="container border p-3 rounded">
        <div className="d-flex justify-content-between mb-4">
          <h1>{formData.id ? "Update User" : "Add User"}</h1>
          <button className="btn btn-secondary me-5" onClick={() => navigate("/user/view")}>
            View Users
          </button>
        </div>
        <div>
          <div>
            <h5>User Name:</h5>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-75 mx-5 px-2 py-1 border rounded"
            />
          </div>
          <div>
            <h5>User Mail:</h5>
            <input
              type="text"
              placeholder="Mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-75 mx-5 px-2 py-1 border rounded"
            />
          </div>
          <div>
            <h5>User Mobile:</h5>
            <input
              type="text"
              placeholder="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-75 mx-5 px-2 py-1 border rounded"
            />
          </div>
          <div>
            <h5>User Password:</h5>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-75 mx-5 px-2 py-1 border rounded"
            />
          </div>
          <div>
            <h5>Confirm Password:</h5>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-75 mx-5 px-2 py-1 border rounded"
            />
          </div>
          <div>
            <h5>User Role:</h5>
            <input
              type="text"
              placeholder="Role"
              name="userRole"
              value={formData.userRole}
              onChange={handleChange}
              className="w-75 mx-5 px-2 py-1 border rounded"
            />
          </div>
        </div>
        <button className="btn btn-primary mt-4" onClick={handleSubmit}>
          {formData.id ? "Update" : "Submit"}
        </button>
      </div>
   
    </>
  );
};

export default AddUser;
