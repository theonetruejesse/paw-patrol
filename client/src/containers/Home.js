import React, { useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { Wrapper } from '../components/Wrapper';
import { Image, Box} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Icon, createIcon } from '@chakra-ui/react'
import {Routes, Route, useNavigate, Link} from 'react-router-dom';


const Home = () => {
  const reportButton = () => {
    // fetch here
  }

  const { currentUser, currentUserId } = useAuth();

  return(
    <Wrapper variant="small">
    <div>
    <Link to="/cases">
    <Box boxSize='sm'>
      <Image src='https://bafkreicxzo3tv7csquxedpax7y4djdcowqnvc6dymvkx757bsdpchjpvea.ipfs.dweb.link' alt=''/>
    </Box>      
    </Link>    
    
    <Link to="/report-form" >
    <Box boxSize='sm'>
      <Image src='https://cdn-icons-png.flaticon.com/512/1255/1255893.png' alt='' />
    </Box></Link>

    </div></Wrapper>)

};
export default Home;
