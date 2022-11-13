import { Wrapper } from "../components/Wrapper";
import { Box, Button, Link, Heading } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useAuth } from "../contexts/AuthContext";
import { InputField } from "../components/InputField";
import { collection, doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase";

const ReportForm = () => {
  const submitForm = () => {
    
  }

  const { currentUser, currentUserId } = useAuth();

  return (
    <Wrapper variant="small">
      <Heading p={3}>Report Form</Heading>
      <Box shadow="md" borderWidth="1px" borderRadius="md" p={5}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={submitForm}>
          {({ isSubmitting }) => (
            <Form>
               <InputField name="Description" placeholder="Description" label="Description" />
              <Button
                type="submit"
                colorScheme="teal"
                isLoading={isSubmitting}
                mt={4}
              >
                Report
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Wrapper>
  );
}

export default ReportForm;
