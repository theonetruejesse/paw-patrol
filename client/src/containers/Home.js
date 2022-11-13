import React, { useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { Wrapper } from '../components/Wrapper';
import { Image, Box} from '@chakra-ui/react'
import {Link} from 'react-router-dom';


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
      <Image src='https://bafkreigspuyyxch6nfka5vswxhkdaywp37osp2be4lf5yvyyfxyobdscoe.ipfs.dweb.link' alt='' />
    </Box></Link>

    </div></Wrapper>)

};
export default Home;
