import { Grid, GridItem } from "@chakra-ui/react";
import {BlogHeader} from '@/views/blog/blogHeader'
export function LayoutBlog() {
  return (
    <Grid
      templateAreas={`"header header header"
                  "nav main navRight"
                  "nav footer navRight" `}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"25% 1fr 25%"}
      h="100vh"
      minW="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2"  area={"header"}>
        <BlogHeader></BlogHeader>
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