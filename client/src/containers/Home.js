import React from "react";
import { useAuth } from "../contexts/AuthContext";
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'



const Home = () => {

  const reportButton = () => {

  }

  const { currentUserId } = useAuth();
  return(
    <div>
    <Link to="/cases">Cases</Link>    
    <div
    style={{
      display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
    <button style={{
      padding: "5px",
      display:"block",
      height: "300px",
      weight: "300px",
      backgroundColor: "orange",
      borderRadius: "50%"}}>Report</button>
    </div>

    </div>)

};
export default Home;
