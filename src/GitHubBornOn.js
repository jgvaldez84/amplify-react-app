import "./App.css";
// Import useState and useEffect hooks from React
import React, { useState, useEffect } from "react";
// Import the API category from AWS Amplify
import { API } from "aws-amplify";
import "./App.css";

const ProjectThree = () => {
  // Create user variable and set to empty array
  const [users, updateUsers] = useState([]);
  //Define function to call API
  async function fetchUsers() {
    const data = await API.get("projectthree", "/born");
    updateUsers(data.users);
  }
  //call fetchUsers function when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
    {
    users.map((user, index) => (
    <div key={index}>
    <h2>The github user{user.login}</h2>
        </div>
    ))
    }
    </>
    );
};
export default ProjectThree;
