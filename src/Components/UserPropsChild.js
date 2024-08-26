import React from "react";

const UserPropsChild = ({Persons}) => {
  //  const { Persons } = props;
  return (
    <div>
      <h2>Details</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        {Persons.map((person) => (
          <tr>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>{person.gender}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserPropsChild;
