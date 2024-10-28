import React from "react";
import { Box, Flex, Heading, Text, Button, AspectRatio, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import kai from "@/asset/lk-AI.png" 
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
            跟随老凯AI进行博客构建
        </Text>
        <Box mb={4}>
            <Button colorScheme="teal" onClick={jumpToBlog}>Get Started
        </Button>
        </Box>
            <AspectRatio minW="200px" ratio={4/3}>
                <Image src={kai}/>
            </AspectRatio>
      </Box>
    </Flex>
  );
}
