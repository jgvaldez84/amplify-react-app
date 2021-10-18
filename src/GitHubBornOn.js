import "./App.css";
// Import useState and useEffect hooks from React
import React, { useState, useEffect } from "react";
// Import the API category from AWS Amplify
import { API } from "aws-amplify";
import "./App.css";

const ProjectThree = () => {
    // Create coins variable and set to empty array
    const [born, updateBorn] = useState([])
    // Define function to all API
    async function fetchBorn() {
    const data = await API.get('projectthree', '/born')
    updateBorn(data.born)
    }
    // Call fetchCoins function when component loads
    useEffect(() => {
    fetchBorn()
    }, [])
    return (
    <div className="Born">
    {
    coins.map((coin, index) => (
    <div key={index}>
    <h2>{coin.name} - {coin.symbol}</h2>
    <h5>${coin.price_usd}</h5>
    </div>
    ))
    }
    </div>
    );
    }
  export default ProjectThree;
  