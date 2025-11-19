import {
  Box,
  HStack,
  Text,
  Image,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RightDiv = () => {
  const toast = useToast();
  let url = `${process.env.REACT_APP_BE_URL}/wishlist`;

  const naigate = useNavigate();

  const [wishlistData, setWishlistData] = useState([]);
  const [render, setRender] = useState(false);
  const getData = () => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.length) {
          setWishlistData(res.data);
        }
      });
  };

  useEffect(() => {
    getData();
  }, [wishlistData.length, render]);

  const handleDelete = (item) => {
    let id = item._id;

    axios
      .delete(`${url}/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {});

    toast({
      title: "Successful!",
      description: "Product deleted to wishlist!!",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
    getData();
    setRender(!render);
  };

  return (
    <Box
      width={{
        base: "90%",
        sm: "70%",
        md: "70%",
        lg: "80%",
        xl: "70%",
        "2xl": "70%",
      }}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      fontSize={{ sm: "xs", md: "sm", lr: "sm", "2xl": "sm" }}
      margin={"auto"}
      minHeight={"390px"}
    >
      <Text fontWeight={"bold"} mt="10px" paddingLeft={"40%"}>
        My Wishlist
      </Text>

      {wishlistData.map((item) => {
        return (
          <Box
            display={"flex"}
            justifyContent="space-around"
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
            mt="5px"
            key={item.id}
          >
            <HStack>
              <Image width={"100px"} src={item.image} />
              <Box>
                <Text color={"orange"}>{item.name}</Text>
                <Text textDecoration={"line-through"}>
                  ₹{+item.price + 100}{" "}
                </Text>
                <Text>
                  ₹{item.price} <span style={{ color: "green" }}>35% Off</span>{" "}
                </Text>
              </Box>
            </HStack>
            <VStack mt={"1%"}>
              <Button
                bg="orange.400"
                color={"white"}
                size={["xs", "sm", "md", "md"]}
                fontSize={["sm", "md", "md", "md"]}
                onClick={() => {
                  naigate("/payments");
                }}
              >
                Buy Now
              </Button>
              <Button
                border={"1px solid"}
                color="orange.300"
                size={["xs", "sm", "md", "md"]}
                fontSize={["xs", "md", "md", "md"]}
                onClick={() => handleDelete(item)}
              >
                Remove
              </Button>
            </VStack>
          </Box>
        );
      })}
    </Box>
  );
};
