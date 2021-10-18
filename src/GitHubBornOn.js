import "./App.css";
// Import useState and useEffect hooks from React
import React, { useState, useEffect } from "react";
// Import the API category from AWS Amplify
import { API } from "aws-amplify";
import "./App.css";

const ProjectThree = () => {
    // Create born variable and set to empty array
    const [ghBornOn, updateGhBornOn] = useState([]);
    // Define function to all API
    async function fetchGhBornOn() {
    const data = await API.get('projectthree', '/born')
    updateGhBornOn(data.ghBornOn)
    }
    // Call fetchGhBornOn function when component loads
    useEffect(() => {
    fetchGhBornOn()
    }, [])

    return (
    <div className="Born">
    {
    ghBornOn.map((born, index) => (
    <div key={index}>
    <h2>{born.login} - {born.created_at}</h2>
    </div>
    ))
    }
    </div>
    );
    }
  export default ProjectThree;
  