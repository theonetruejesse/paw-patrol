import {
  Box,
  Heading,
  Center,
  Flex,
  AspectRatio,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NoThreat, NotifyAuthorities } from "../components/Modals";
import { useHistory } from "react-router-dom";

export default function Vid(props) {
  const history = useHistory();
  // const [urlString, setUrlString] = useState("");
  // console.log("bruh: " + urlString);

  const urlString = `https://${props.match.params.id}.ipfs.dweb.link/`;

  useEffect(() => {}, [urlString]);
  const {
    isOpen: isNoThreatOpen,
    onOpen: onNoThreatOpen,
    onClose: onNoThreatClose,
  } = useDisclosure();

  const {
    isOpen: isNotifyAuthoritiesOpen,
    onOpen: onNotifyAuthoritiesOpen,
    onClose: onNotifyAuthoritiesClose,
  } = useDisclosure();

  return (
    <>
      <Box>
        <Center>
          <Flex direction="column">
            <Heading pb={10}>Review Footage</Heading>
            <AspectRatio w="560px" ratio={4 / 3}>
              <iframe title="is this helpful" src={urlString} allowFullScreen />
            </AspectRatio>
            <Flex direction="column" my={6}>
              <Button
                my={3}
                py={8}
                bgColor="rgb(128,128,128)"
                _hover={{
                  background: "rgb(100,100,100)",
                }}
                size="lg"
                fontSize="2xl"
                onClick={() => history.push("/cases")}
              >
                Not Helpful
              </Button>
              <Button
                my={3}
                py={8}
                colorScheme="red"
                size="lg"
                fontSize="2xl"
                // onClick={onNotifyAuthoritiesOpen}
                onClick={() => history.push("/cases")}
              >
                Add to Token
              </Button>
            </Flex>
          </Flex>
        </Center>
      </Box>
      <NoThreat isOpen={isNoThreatOpen} onClose={onNoThreatClose} />
      <NotifyAuthorities
        isOpen={isNotifyAuthoritiesOpen}
        onClose={onNotifyAuthoritiesClose}
      />
    </>
  );
}
