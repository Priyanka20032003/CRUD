import React from "react";

const User = () => {
  const persons = [
    {
      name: "Priya",
      gender: "F",
      email: "priya@123",
    },
    {
      name: "Gnanesh",
      gender: "M",
      email: "Gnanesh@123",
    },
    {
      name: "Akash",
      gender: "M",
      email: "Akash@123",
    },
    {
      name: "Mohith",
      gender: "M",
      email: "Mohith@123",
    },
  ];
  return <div>
    <h1>User details</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
      </tr>
      
        {
        persons.map((person) => (
          <tr>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>{person.gender}</td>
          </tr>
            
            
          ))
        }
      
    </table>
  </div>;
};

export default User;
