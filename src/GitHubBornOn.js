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
  const fetchUsers = async () =>  {
    console.log("got here");
    const data = await API.get("cryptoapi", "/born");

   updateUsers(data.users);
  }
  
  //call fetchUsers function when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  return (

    <div className="App">
        
      <h2>The github user {users.login} was created on {users.created_at}</h2>
    </div>
  );
};
export default ProjectThree;

 