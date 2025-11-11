import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
  initialValues: { firstName: "", email: "", type: "hireMe", comment: "" },
  validationSchema: Yup.object({
    firstName: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    type: Yup.string().required("Please select a type"),
    comment: Yup.string()
      .required("Message is required")
      .min(25, "Your message must be at least 25 characters long"),
  }),
  onSubmit: async (values, { resetForm }) => {
    const result = await submit(null, values);
    onOpen(result.type, result.message);
    if (result.type === "success") resetForm();
  },
});


  return (
    <FullScreenSection isDarkBackground backgroundColor="#512DA8" py={16} spacing={8}>
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">Contact me</Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* Name */}
              <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input id="firstName" name="firstName" {...formik.getFieldProps("firstName")} />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              {/* Email */}
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input id="email" name="email" type="email" {...formik.getFieldProps("email")} />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              {/* Type */}
              <FormControl isInvalid={formik.touched.type && !!formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  bg="#512DA8"         
                  color="white"      
                  _hover={{ bg: "#512DA8.100" }} 
                >
                  <option value="hireMe" style={{ backgroundColor: "#E0E0E0", color: "black" }}>
                    Freelance project proposal
                  </option>
                  <option value="openSource" style={{ backgroundColor: "#E0E0E0", color: "black" }}>
                    Open source consultancy session
                  </option>
                  <option value="other" style={{ backgroundColor: "#E0E0E0", color: "black" }}>
                    Other
                  </option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>

              {/* Comment */}
              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea id="comment" name="comment" height={250} {...formik.getFieldProps("comment")} />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              {/* Submit */}
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
