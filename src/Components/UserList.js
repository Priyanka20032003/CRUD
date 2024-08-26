import React, { useState, useEffect } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //           }
  //           console.log(response)

  //           return response.json();

  //       })
  //       .then((data) => {
  //           setUsers(data);
  //           console.log(users)
  //         setLoading(false); // Set loading to false after data is fetched
  //       })
  //       .catch((error) => {
  //         setError(error); // Handle any errors
  //         setLoading(false); // Set loading to false if there's an error
  //       });
  //   }, []); // Empty dependency array means this useEffect runs only once, when the component mounts

  //   if (loading) {
  //     return <p>Loading...</p>; // Display a loading message while the data is being fetched
  //   }

  //   if (error) {
  //     return <p>Error: {error.message}</p>; // Display an error message if there's an error
  //   }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          <p>Error in fetching details..</p>;
          }
          console.log(response)
        return response.json();
      })
      .then((data) => {
          setUsers(data);
          console.log(data)
      }).catch((error) => {
          setError(error)
      })
  }, []);
    
    if (error) {
       return <p>Error:{ error.message}</p>
    }

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
