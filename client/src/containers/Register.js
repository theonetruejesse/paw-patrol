import { Wrapper } from "../components/Wrapper";
import { Box, Button, Link, Heading, position, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "../components/InputField";
import { useHistory, Link as ReactLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Register() {
  const { signup, createUser } = useAuth();
  const history = useHistory();

  const profile = {
    address: [],
    camera: false,
    email: "",
    name: "",
    phone: ""
  }

  return (
    <Wrapper variant="small">
      <Heading p={3}>Create an Account</Heading>
      <Box shadow="md" borderWidth="1px" borderRadius="md" p={5}>
        <Formik
          initialValues={{
            username: "",
            email: "",
            name: "",
            phone: "",
            password: "",
            camera: false
          }} // bruh
          onSubmit={async (values, { setErrors }) => {

            navigator.geolocation.getCurrentPosition((position) => {
              profile.address = [position.coords.longitude, position.coords.latitude];
            });
            // profile.camera = values.camera;
            profile.email = values.email;
            profile.name = values.name;
            profile.phone = values.phone;

            try {
              await createUser(profile);
              await signup(values.email, values.password);
              history.push("/");
            } catch (e) {
              console.log(e);
              setErrors("Failed to create an account");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="email" placeholder="email" label="Email" />
              <Box mt={3}>
                <InputField name="phone" placeholder="phone" label="Phone" />
                <InputField name="name" placeholder="name" label="Name" />
                {/* <Checkbox name="camera" label="camera">Own a Camera?</Checkbox> */}
              </Box>
              <Box mt={3}>
                <InputField
                  name="password"
                  placeholder="password"
                  label="Password"
                  type="password"
                />
              </Box>
              <Button type="submit" colorScheme="teal" mt={4}>
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Box mt={3} ml={5}>
        Already have an account?{" "}
        <Link as={ReactLink} to="/login" color="teal">
          Login here.
        </Link>
      </Box>
    </Wrapper>
  );
}

export default Register;
