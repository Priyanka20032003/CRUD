import React from 'react'
import UserPropsChild from './UserPropsChild';

const UserPropsParent = () => {
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
  return (
      <div>
          <h3>Parent Component</h3>
          <UserPropsChild Persons={persons} />
    </div>
  )
}

export default UserPropsParent