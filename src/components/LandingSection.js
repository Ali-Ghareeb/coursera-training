import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { motion } from "framer-motion";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "Specialised in React";

const MotionVStack = motion(VStack);
const MotionAvatar = motion(Avatar);
const MotionHeading = motion(Heading);

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      {/* Avatar */}
      <MotionAvatar
        size="2xl"
        src="https://i.pravatar.cc/150?img=7"
        name="Pete"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
      />

      {/* Greeting */}
      <MotionHeading
        as="h1"
        size="sm"  
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {greeting}
      </MotionHeading>

      {/* Bio1 */}
      <MotionHeading
        as="h2"
        size="2xl"  
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {bio1}
      </MotionHeading>

      {/* Bio2 */}
      <MotionHeading
        as="h2"
        size="2xl"  
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {bio2}
      </MotionHeading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;