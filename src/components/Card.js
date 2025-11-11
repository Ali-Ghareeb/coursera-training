import React from "react";
import { Box, VStack, HStack, Image, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      width="100%"
      maxW="400px"
      transition="transform 0.2s"
      _hover={{ transform: "translateY(-5px)" }}
      cursor="pointer"
    >
      
      <Image
        src={imageSrc}
        alt={title}
        width="100%"
        height="300px"  
        objectFit="cover"
        borderRadius="lg"
      />

      <VStack align="start" p={3} spacing={1}>
        <Heading size="sm" color="black">
          {title}
        </Heading>
        <Text fontSize="sm" color="grey" noOfLines={2}>
          {description}
        </Text>
        <HStack spacing={1} pt={1}>
          <Text fontWeight="bold" color="black" fontSize="sm">
            Learn More
          </Text>
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "black", fontSize: "16px" }} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;