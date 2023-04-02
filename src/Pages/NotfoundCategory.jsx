import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
const NotfoundCategory = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let { loading, productsData, allData, params, filters } = useSelector(
    (store) => store.ProductReducer
  );

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Box textAlign="center">
      <Image
        src={
          "https://listabsolute.com/wp-content/uploads/2019/05/no-product-found.jpg"
        }
        alt="Product Not Available"
        mb="20px"
        maxWidth="80%"
        mx="auto"
      />
      <Text fontSize="xl" mb="20px" fontWeight="bold">
        Sorry, this Category is currently not available
      </Text>
      <Box>
        <Button onClick={handleGoBack} mt="20px" size="lg">
          Shop More
        </Button>
      </Box>
    </Box>
  );
};

export default NotfoundCategory;
