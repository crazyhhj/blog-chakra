import { Grid, GridItem } from "@chakra-ui/react";

export function LayoutBlog() {
  return (
    <Grid
      templateAreas={`"header header header"
                  "nav main navRight"
                  "nav footer navRight" `}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr 100px"}
      h="200px"
      w="900px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"navRight"}>
        Nav
      </GridItem>
    </Grid>
  );
}
