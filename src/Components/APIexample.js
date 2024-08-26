import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const APIexample = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // Get
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  //Delete user

  const deleteUser = (user) => {
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id != user.id));
    //console.log("delete user")
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
        setUsers(originalUsers);
      });
    console.log("delete user");
  };
  //Add user
  const newUser = {
    id: 0,
    name: "John",
  };

  const addUser = () => {
    setUsers([...users, newUser]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => {
        console.log(response);
        setUsers([...users, response.data]);

        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
    console.log("user added");
  };

  return (
    <div>
      {error && <h3 className="text-danger">{error}</h3>}
      <div className="text-end p-3">
        <button className="btn btn-primary mb-3 " onClick={addUser}>
          Add User
        </button>
      </div>

      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.id} - {user.name}
            <div>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => deleteUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default APIexample;
