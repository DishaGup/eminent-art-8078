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
  const dispatch=useDispatch()
  
    // const searchProducts = async () => {
    //   const data = await fetch(`https://erin-dizzy-clam.cyclic.app/trendify/products`);
    //   const res = await data.json();
    //   //console.log(res.products)
    // setProducts(res.products);
    // };
    useEffect(() => {
      // searchProducts();
 dispatch(searchProducts(onChangeValue)).then((res)=>{
  //console.log(res)
  setProducts(res.data.products);
 }).catch((err)=>console.log(err))
    }, [onChangeValue]);
    useEffect(() => {
      if (throttledText === "") {
        setSearch([]);
      } else {
        //console.log(throttledText);
        if(Products && Products.length>0){
        let newSuggestions = Products.filter((item) => {
          return item.title
            .split(" ")
            .join("")
            .trim()
            .toLowerCase()
            .indexOf(throttledText) !== -1? true: false;
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
            width={{ base: "90%", md: "90%" }}
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
            { onChangeValue.length>0 && search.length > 0 && (
              <Box
                borderRadius="5px"
                position="absolute"
                top="100px"
                zIndex="100"
                bgColor="white"
                overflow="scroll"
                w="38%"
                maxH="400px"
                m="auto"
                left={"280"}
              >
                {search.map((item, i) => {
                  return (
                    <Link href={`/products/:category/single/${item._id}`} target="_blank" key={i + 1}>
                      <Text
                        fontSize="16px"
                        p="10px"
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
  