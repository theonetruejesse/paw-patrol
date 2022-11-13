import { Wrapper } from "../components/Wrapper";
import { Box, Button, Heading } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useAuth } from "../contexts/AuthContext";
import { InputField } from "../components/InputField";
import { Image } from "@chakra-ui/react";
import {Link} from 'react-router-dom';


const ReportForm = () => {

  const { currentUser, currentUserId } = useAuth();

  return (
    <Wrapper variant="small">
      <Heading p={3}>Report Form</Heading>
      <Box shadow="md" borderWidth="1px" borderRadius="md" p={5}>
        <Formik
          initialValues={{ email: "", password: "" }}>
          {({ isSubmitting }) => (
            <Form>
               <InputField name="Description" placeholder="Description" label="Description" />
               <Link to="/cases">
              <Button
                type="submit"
                colorScheme="teal"
                isLoading={isSubmitting}
                mt={4}
              >
                Report
              
              </Button>
              </Link>
            </Form>
            
          )}
        </Formik>

      </Box>
    </Wrapper>
  );
}

export default ReportForm;
