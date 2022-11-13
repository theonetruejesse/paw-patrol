import { Wrapper } from "../components/Wrapper";
import { Box, Button, Link, Heading } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "../components/InputField";

const ReportForm = () => {
  const submitForm = () => {

  }

  return (
    <Wrapper variant="small">
      <Heading p={3}>Report Form</Heading>
      <Box shadow="md" borderWidth="1px" borderRadius="md" p={5}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={submitForm}>
          {({ isSubmitting }) => (
            <Form>
              <InputField name="Phone Number" placeholder="Phone Number" label="Phone Number" />
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
