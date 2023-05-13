import { Box, HStack, Text, Image, Button, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RightDiv = () => {
  const naigate = useNavigate();
  const [item, setItem] = useState("");
  const [wishlistData, setWishlistData] = useState([]);
const [rerender,setRerender]=useState(false)
  const getData = () => {
    axios.get(`http://localhost:4444/wishlist`).then((res) => {
      setWishlistData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, [wishlistData.length]);
  console.log(item);
  

  const handleDelete = (item) => {
   
    let id = +item.id;
    axios.delete(`http://localhost:4444/wishlist/${id}`).then((res) => {
      console.log(res);
    });
    getData();
    setRerender(!rerender)
  };
  

  return (
    <Box
      width={{base: "90%",sm:"70%", md:"70%", lg: "80%", xl:"70%","2xl":"70%"}}  
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      fontSize={{ sm: "xs", md: "sm", lr: "sm", "2xl": "sm" }}
      margin={"auto"}
      minHeight={"390px"}
    >
      <Text fontWeight={"bold"} mt="10px"  paddingLeft={"40%"} >
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
                <Text>{item.title}</Text>
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
