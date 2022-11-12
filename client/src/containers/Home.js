import { Box } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { currentUserId } = useAuth();
  console.log(currentUserId);
  return <Box>hellow world</Box>;
};
export default Home;
