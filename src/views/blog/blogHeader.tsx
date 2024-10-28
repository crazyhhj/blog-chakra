import { Box, Flex, Center, Square, Text } from "@chakra-ui/react";

export function BlogHeader() {

    return (
        <Flex
            direction="row"
            align="center"
            w="100%"
            h="100%"
            className="flexCLass"
        // justify="center"
        >
            <Center bg="tomato" w="25%" h="100%" mr={1} pt="2px" className="Boxnn">
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='3xl'
                    fontWeight='extrabold'
                >ARCANE</Text>
            </Center>
            <Box bg="tomato" w="50%" h="100%" mr={1} pt="2px" display={"flex"} justifyContent={"flex-start"} flexWrap={"wrap"} alignContent={"center"} pl={"100px"}>
                <Text
                    fontSize='2xl'
                >千年史册耻无名，一片丹心报天下</Text>
            </Box>
            <Box bg="tomato" w="25%" h="100%" mr={1} pt="2px" className="Boxnn">
                <Text>链接处</Text>
            </Box>
            
        </Flex>
    )
}