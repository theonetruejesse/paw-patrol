import React from "react";
import { useAuth } from "../contexts/AuthContext";
import {Routes, Route, useNavigate, Link} from 'react-router-dom';


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
      padding: "20%",
      height: "300%",
      weight: "300%",
      backgroundColor: "orange",
      color: "red",
      fontSize: "75px",
      fontWeight: "bold",
      borderRadius: "50%"}}
      onClick={reportButton}>REPORT</button>
    </div>

    </div>)

};
export default Home;
