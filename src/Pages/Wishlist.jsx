import { Box, Heading } from "@chakra-ui/react";
import LeftDiv from "./Wishlist/LeftDiv";
import { RightDiv } from "./Wishlist/RightDiv";
import Navmain from "../Components/HomePage/Navmain";
import SearchBar from "../Components/SearchBar";

const Wishlist = () => {
  return (
    <>
    <Navmain/>
    <Box h="100vh" w="95%" m="auto" >
      <Box
        display={"flex"}
        flexDirection={{ base: "column",sm:"column", md:"row", lg: "row", xl:"row","2xl":"row" }}
        justifyContent="space-around"
        mt={"2%"}
        width={{base: "95%",sm:"95%", md:"95%", lg: "95%", xl:"95%","2xl":"95%"}}
      >
        <LeftDiv />
        <RightDiv />
      </Box>
    </Box>
    </>
  );
};

export { Wishlist };
