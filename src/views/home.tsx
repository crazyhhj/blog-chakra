import React from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export function HomeView() {
  const navigate = useNavigate();

  function jumpToBlog() {
    navigate("/blog-layout");
  }
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      p={4}
      bg="gray.100"
    >
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
        <Heading as="h1" size="xl" mb={4}>
          Welcome to My Blog
        </Heading>
        <Text mb={4}>
          This is a simple layout using Chakra UI. Feel free to explore!
        </Text>
        <Button colorScheme="teal" onClick={jumpToBlog}>
          Get Started
        </Button>
      </Box>
    </Flex>
  );
}
