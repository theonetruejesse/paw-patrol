import { useField } from "formik";
import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
	Textarea
} from "@chakra-ui/react";

export const TextField = ({
  label,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Textarea {...props} {...field} id={field.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
