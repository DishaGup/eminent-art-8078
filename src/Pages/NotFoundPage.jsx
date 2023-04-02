import React from "react";

import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Box textAlign="center">
      <Image
        src={"https://i.ytimg.com/vi/m7ZZNsa0pOA/maxresdefault.jpg"}
        alt="Product Not Available"
        mb="20px"
        maxWidth="80%"
        mx="auto"
      />
      <Text fontSize="xl" mb="20px" fontWeight="bold">
        Oops! Page not found
      </Text>
      <Box>
        <Text fontSize="lg" mb="20px">
          The page you are looking for could not be found.
        </Text>
        <Button onClick={handleGoBack} mt="20px" size="lg">
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
