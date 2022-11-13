import * as React from 'react';
import { Wrapper } from "../components/Wrapper";
import { useAuth } from "../contexts/AuthContext";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Wrap,
  Heading,
  Box,
} from '@chakra-ui/react'

const Cases = () => {
  const { currentUser, currentUserId } = useAuth();
  
  return (
    <Wrapper variant='small'>
      <Heading p={3}>Reports</Heading>
      <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Token 1
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <video width="320" height="240" controls src='https://bafybeiadexhbk76mb6lg42agybypyifwfkeo6klatuetaemoxpvg4vnfom.ipfs.dweb.link' />

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Token 2
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <video width="320" height="240" controls src='https://dweb.link/ipfs/bafybeia7rr4efh5zdwgea7zkmpuwimdahwgqvysdwx4y2pd3ttx42ikbv4' />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Token 3
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <video width="320" height="240" controls src='https://dweb.link/ipfs/bafybeifq2n52rmylinbtmb55dbdvakifcaxmrxqf6of5axas2laypcgs4q' />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Token 4
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <video width="320" height="240" controls src='https://dweb.link/ipfs/bafkreiafkrwjtchzxrxfrin2o47oop3nl7rjkcd5cmafujl4vp6imhpwqa' />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Token 5
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <video width="320" height="240" controls src='https://dweb.link/ipfs/bafybeiakfqq4kmmb22hex5h4wvqu6imjhrvch25v6kwbezmgbypmzyinve' />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Token 6
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <video width="320" height="240" controls src='https://dweb.link/ipfs/bafkreihuhk6sm5fxnicdocysbbty7wiocevz7qfjbesuodk3dk7id4gwtq' />
    </AccordionPanel>
  </AccordionItem>
      </Accordion>
    </Wrapper>
  )
}

export default Cases;

