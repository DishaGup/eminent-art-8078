import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Link,
  useBoolean,
} from "@chakra-ui/react";
import useThrottle from "./customHooks/useThrottle";
import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../Redux/ProductReducer/action";
function SearchBar() {
  const [onChangeValue, setOnChangeValue] = useState("");
  const [search, setSearch] = useState([]);
  const [Products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useBoolean();
  const throttledText = useThrottle(onChangeValue, 1000);
  const dispatch = useDispatch();

  
  useEffect(() => {
    
    dispatch(searchProducts(onChangeValue))
      .then((res) => {
      
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, [onChangeValue]);
  
  useEffect(() => {
    if (throttledText === "") {
      setSearch([]);
    } else {
    
      if (Products && Products.length > 0) {
        let newSuggestions = Products.filter((item) => {
          return item.title
            .split(" ")
            .join("")
            .trim()
            .toLowerCase()
            .indexOf(throttledText) !== -1
            ? true
            : false;
        });
        setSearch(newSuggestions);
        setShowDropdown.on();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [throttledText]);
  // console.log(search);
  const [add, setP] = useState("");

  return (
    <Box fontFamily={"Clear-Sans"} shadow={"sm"} bg="#fff">
      <Flex justify={"space-around"} minH={"40px"} py="10px" align={"center"}>
        <Flex
          gap={0.1}
          width={{ base: "100%", md: "90%" }}
          flexDir={{ base: "column", md: "row" }}
          align={"center"}
        >
          <Input
            variant="filled"
            placeholder="What is on Your mind today?"
            size="sm"
            w={"100%"}
            onChange={(e) => setOnChangeValue(e.target.value)}
          />
          {onChangeValue.length > 0 && search.length > 0 && (
            <Box
              borderRadius="5px"
              position="relative"
             
              zIndex="100"
              bgColor="white"
              overflow="scroll"
              w={{base:'80%',xl:"35%"}}
              maxH="400px"
              m="auto"
               px={3}
               top={{base:'2%'  ,xl:'1.1%'}}
              pt={2}
              border={'2px solid gray'}
              scrollBehavior={'smooth'}
             
            >
              {search.map((item, i) => {
                return (
                  <Link
                    href={`/products/:category/single/${item._id}`}
                    target="_blank"
                    key={i + 1}
                    borderBottom={'1px solid gray'}
                  >
                    <Text
                      fontSize="14px"
                      p="8px"
                      cursor="pointer"
                      onClick={setShowDropdown.off}
                    >
                      {item.title}
                    </Text>
                  </Link>
                );
              })}
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default SearchBar;
